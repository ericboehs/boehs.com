# CLI Email on macOS: mbsync + himalaya + neomutt

I wanted my email in local Maildir files — searchable, indexable, and accessible from the command line. The goal is a stack where [mbsync](https://isync.sourceforge.io/) handles IMAP sync, [himalaya](https://github.com/pimalaya/himalaya) provides quick CLI access, and [neomutt](https://neomutt.org/) gives me a full TUI when I need it. Push notifications via IMAP IDLE keep it all near-instant.

I run two accounts through this setup — Fastmail (personal) and Google Workspace (work) — and adding more follows the same pattern.

<!-- truncate -->

## Why?

I'm building a universal search setup (via [qmd](https://github.com/tobi/qmd)) that indexes markdown and text files, and I want email in there too. Local Maildir makes that possible — every email becomes a file on disk that can be converted to plain text and indexed alongside my notes, wiki, and docs. Beyond search, having email as files means I can `grep` it, pipe it, and script against it — no web UI or proprietary API required.

## The stack

| Tool | Role |
|------|------|
| **mbsync** (isync) | Two-way IMAP sync to local Maildir |
| **himalaya** | Fast CLI for listing, reading, flagging |
| **neomutt** | Full TUI with sidebar, vim keys, colors |
| **goimapnotify** | IMAP IDLE → triggers sync on new mail |
| **qmd** | Full-text search across all indexed email |

## 1. Install everything

```bash
brew install isync himalaya neomutt w3m
go install github.com/chmouel/goimapnotify@latest
```

`w3m` is for rendering HTML emails in neomutt. `goimapnotify` isn't in Homebrew but installs cleanly via `go install`.

## 2. Store your app passwords

Both Fastmail and Google require app-specific passwords for IMAP/SMTP. Store them in the macOS Keychain so nothing touches disk in plaintext:

```bash
# Personal (Fastmail)
security add-generic-password -a 'you@fastmail.com' -s 'personal-email' \
  -w 'your-app-password' ~/Library/Keychains/login.keychain-db

# Work (Google Workspace)
security add-generic-password -a 'you@work.com' -s 'work-email' \
  -w 'your-app-password' ~/Library/Keychains/login.keychain-db
```

For Fastmail, create an app password at **Settings > Privacy & Security > App Passwords**. For Google, go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).

Verify they work:

```bash
security find-generic-password -a 'you@fastmail.com' -s 'personal-email' -w
security find-generic-password -a 'you@work.com' -s 'work-email' -w
```

## 3. Configure mbsync

Create `~/.mbsyncrc` with a section per account. Each account gets its own IMAPAccount, stores, and channel:

```
# =============================================================================
# Personal (Fastmail)
# =============================================================================

IMAPAccount personal
Host imap.fastmail.com
Port 993
User you@fastmail.com
PassCmd "security find-generic-password -a 'you@fastmail.com' -s 'personal-email' -w"
AuthMechs LOGIN
TLSType IMAPS
CertificateFile /etc/ssl/cert.pem

IMAPStore personal-remote
Account personal

MaildirStore personal-local
Path ~/Mail/personal/
Inbox ~/Mail/personal/INBOX
SubFolders Verbatim

Channel personal
Far :personal-remote:
Near :personal-local:
Patterns *
Create Both
Expunge Both
SyncState *
CopyArrivalDate yes

# =============================================================================
# Work (Google Workspace)
# =============================================================================

IMAPAccount work
Host imap.gmail.com
Port 993
User you@work.com
PassCmd "security find-generic-password -a 'you@work.com' -s 'work-email' -w"
AuthMechs LOGIN
TLSType IMAPS
CertificateFile /etc/ssl/cert.pem

IMAPStore work-remote
Account work

MaildirStore work-local
Path ~/Mail/work/
Inbox ~/Mail/work/INBOX
SubFolders Verbatim

Channel work
Far :work-remote:
Near :work-local:
Patterns * !"[Gmail]/All Mail" !"[Gmail]/Important" !"[Gmail]/Starred"
Create Both
Expunge Both
SyncState *
CopyArrivalDate yes
```

A few things to note:

- **`AuthMechs LOGIN`** — required on macOS. Without it, isync tries the system SASL library which fails with a cryptic "Unable to find a callback" error.[^1]
- **`SubFolders Verbatim`** — preserves folder names as-is (Fastmail's custom folders, Gmail's `[Gmail]/` prefix).
- **`Create Both` + `Expunge Both`** — full two-way sync. Deleting locally deletes on the server.
- **`CopyArrivalDate yes`** — preserves original email dates when syncing.
- **Gmail `Patterns`** — excludes `All Mail`, `Important`, and `Starred` which are virtual labels that duplicate messages. Without this exclusion you'd sync every message twice.

Create the directories and run the initial sync:

```bash
mkdir -p ~/Mail/personal ~/Mail/work
mbsync -a
```

First run pulls everything. My personal account synced 143K messages in a couple minutes; the work account had 188. Incremental syncs take about 4 seconds for both combined.

You can also sync a single account: `mbsync personal` or `mbsync work`.

## 4. Configure himalaya

Himalaya reads the local Maildir (fast, offline) and sends via SMTP. Create `~/.config/himalaya/config.toml`:

```toml
[accounts.personal]
default = true
email = "you@fastmail.com"
display-name = "Your Name"

backend.type = "maildir"
backend.root-dir = "~/Mail/personal"

message.send.backend.type = "smtp"
message.send.backend.host = "smtp.fastmail.com"
message.send.backend.port = 465
message.send.backend.encryption.type = "tls"
message.send.backend.login = "you@fastmail.com"
message.send.backend.auth.type = "password"
message.send.backend.auth.cmd = "security find-generic-password -a 'you@fastmail.com' -s 'personal-email' -w"

[accounts.work]
email = "you@work.com"
display-name = "Your Name"

backend.type = "maildir"
backend.root-dir = "~/Mail/work"

message.send.backend.type = "smtp"
message.send.backend.host = "smtp.gmail.com"
message.send.backend.port = 465
message.send.backend.encryption.type = "tls"
message.send.backend.login = "you@work.com"
message.send.backend.auth.type = "password"
message.send.backend.auth.cmd = "security find-generic-password -a 'you@work.com' -s 'work-email' -w"
```

Now you've got quick CLI access to both accounts:

```bash
himalaya envelope list                    # Default account inbox
himalaya envelope list -a work            # Work account inbox
himalaya message read 1                   # Read first message
himalaya flag add 1 seen                  # Mark as read
```

## 5. Configure neomutt

Neomutt handles multiple accounts via `folder-hook` — it switches from/smtp settings automatically based on which folder you're viewing.

Create `~/.config/neomutt/neomuttrc`:

```bash
# =============================================================================
# Accounts
# =============================================================================

set mbox_type = Maildir
set realname = "Your Name"

# Default account: Personal (Fastmail)
set folder = "~/Mail/personal"
set spoolfile = "+INBOX"
set record = "+Sent"
set postponed = "+Drafts"
set trash = "+Trash"
set from = "you@fastmail.com"
set smtp_url = "smtps://you@fastmail.com@smtp.fastmail.com:465"
set smtp_pass = "`security find-generic-password -a 'you@fastmail.com' -s 'personal-email' -w`"

# Personal mailboxes
named-mailboxes \
  "INBOX" +INBOX \
  "  Sent" +Sent \
  "  Drafts" +Drafts \
  "  Archive" +Archive \
  "  Spam" +Spam \
  "  Trash" +Trash

# Work mailboxes
named-mailboxes \
  "Work" "~/Mail/work/INBOX" \
  "  Sent" "~/Mail/work/[Gmail]/Sent Mail" \
  "  Drafts" "~/Mail/work/[Gmail]/Drafts" \
  "  Trash" "~/Mail/work/[Gmail]/Trash" \
  "  Spam" "~/Mail/work/[Gmail]/Spam"

# Auto-switch account settings based on current folder
folder-hook "~/Mail/personal" "\
  set from = 'you@fastmail.com'; \
  set smtp_url = 'smtps://you@fastmail.com@smtp.fastmail.com:465'; \
  set smtp_pass = \"\`security find-generic-password -a 'you@fastmail.com' \
    -s 'personal-email' -w\`\"; \
  set record = '+Sent'; set postponed = '+Drafts'; set trash = '+Trash'; \
  macro index,pager A '<save-message>+Archive<enter>' 'Archive message'"

# Gmail archive = delete from INBOX (removes Inbox label; stays in All Mail)
folder-hook "~/Mail/work" "\
  set from = 'you@work.com'; \
  set smtp_url = 'smtps://you@work.com@smtp.gmail.com:465'; \
  set smtp_pass = \"\`security find-generic-password -a 'you@work.com' \
    -s 'work-email' -w\`\"; \
  set record = '~/Mail/work/[Gmail]/Sent Mail'; \
  set postponed = '~/Mail/work/[Gmail]/Drafts'; \
  set trash = '~/Mail/work/[Gmail]/Trash'; \
  macro index,pager A '<delete-message>' 'Archive message (Gmail)'"

# =============================================================================
# Display
# =============================================================================

set index_format = "%4C %Z %{%b %d} %-20.20L  %s"
set sort = reverse-date
set sort_aux = last-date-received
set date_format = "%Y-%m-%d %H:%M"
set pager_index_lines = 10
set pager_context = 3
set pager_stop = yes
set tilde = yes
set markers = no
set wrap = 0
alternative_order text/plain text/html
auto_view text/html

# =============================================================================
# Sidebar
# =============================================================================

set sidebar_visible = yes
set sidebar_width = 24
set sidebar_format = "%D%?F? [%F]?%* %?N?%N?"
set sidebar_short_path = no
set mail_check_stats = yes

bind index,pager \Cp sidebar-prev
bind index,pager \Cn sidebar-next
bind index,pager \Co sidebar-open
bind index,pager B sidebar-toggle-visible

# =============================================================================
# Vim keys
# =============================================================================

bind index j next-entry
bind index k previous-entry
bind index g noop
bind index gg first-entry
bind index G last-entry
bind pager j next-line
bind pager k previous-line
bind pager g noop
bind pager gg top
bind pager G bottom

# =============================================================================
# Macros
# =============================================================================

# Switch inboxes
macro index gp "<change-folder>+INBOX<enter>" "Go to personal inbox"
macro index gw "<change-folder>~/Mail/work/INBOX<enter>" "Go to work inbox"

# Manual sync
macro index S "<shell-escape>mail-sync -a<enter>" "Sync all mail"

# Archive (overridden per-account by folder-hooks above)
macro index,pager A "<save-message>+Archive<enter>" "Archive message"

# =============================================================================
# Compose
# =============================================================================

set editor = "nvim"
set edit_headers = yes
set fast_reply = yes
set include = yes
```

A few things going on here:

- **`named-mailboxes`** gives each sidebar entry a clean display name. Without this, `~/Mail/work/[Gmail]/Sent Mail` would show as a long ugly path.
- **`folder-hook`** auto-switches from address, SMTP, and folder paths when you navigate between accounts. Note the escaped quotes around the backtick — `\"\`...\`\"` — this is needed when the password contains spaces.
- **`gp`/`gw` macros** jump directly between inboxes using `g` as a vim-like leader key.
- **Archive (`A`)** behaves differently per account: moves to `+Archive` for Fastmail, deletes from INBOX for Gmail (which is how Gmail archiving works — the message stays in All Mail, it just loses the Inbox label).
- **No `new_mail_command`** — sync is handled entirely by background services (see step 6), not by neomutt. The `S` macro is there for manual sync when you want it.

And `~/.mailcap` for HTML rendering:

```
text/html; w3m -I %{charset} -T text/html -dump; copiousoutput;
```

For colors, I'm using the [Catppuccin Mocha](https://github.com/catppuccin/neomutt) theme, which uses terminal palette colors (color0-15). If your terminal already has Catppuccin set as its color scheme, just append the theme's `neomuttrc` to your config.

## 6. Push notifications with IMAP IDLE

Polling every 15 minutes is fine, but IMAP IDLE gives you near-instant sync. [goimapnotify](https://github.com/chmouel/goimapnotify) holds an IDLE connection open and runs mbsync the moment new mail arrives.

goimapnotify supports one IMAP connection per config file, so create one per account:

`~/.config/goimapnotify/personal.json`:

```json
{
  "host": "imap.fastmail.com",
  "port": 993,
  "tls": true,
  "username": "you@fastmail.com",
  "passwordCmd": "security find-generic-password -a 'you@fastmail.com' -s 'personal-email' -w",
  "onNewMail": "/Users/you/.local/bin/mail-sync personal",
  "boxes": ["INBOX"]
}
```

`~/.config/goimapnotify/work.json`:

```json
{
  "host": "imap.gmail.com",
  "port": 993,
  "tls": true,
  "username": "you@work.com",
  "passwordCmd": "security find-generic-password -a 'you@work.com' -s 'work-email' -w",
  "onNewMail": "/Users/you/.local/bin/mail-sync work",
  "boxes": ["INBOX"]
}
```

Note each config targets its specific mbsync channel (`mail-sync personal` / `mail-sync work`) rather than `mail-sync -a`, so a new email in one account doesn't trigger a full sync of both.

### The sync wrapper

With both goimapnotify instances and a launchd timer all triggering syncs, you can get collisions. A wrapper script handles locking and chains together the full pipeline — IMAP sync, text extraction, and search indexing (see [section 8](#8-indexing-email-for-search)):

`~/.local/bin/mail-sync`:

```bash
#!/bin/sh
# Full mail sync: pull from IMAP, convert to text, update search index
LOCKFILE="${HOME}/.mbsync.lock"
if ! mkdir "$LOCKFILE" 2>/dev/null; then
  exit 0
fi
trap 'rmdir "$LOCKFILE"' EXIT

/opt/homebrew/bin/mbsync "$@"
/Users/you/.local/bin/maildir-to-text
qmd update -c email
```

```bash
chmod +x ~/.local/bin/mail-sync
```

Uses `mkdir` as an atomic lock — if another sync is already running, the second one silently exits. All the goimapnotify configs and launchd plists point at this wrapper instead of calling mbsync directly. The `maildir-to-text` and `qmd update` steps are explained in section 8.

Test them:

```bash
~/go/bin/goimapnotify -conf ~/.config/goimapnotify/personal.json
~/go/bin/goimapnotify -conf ~/.config/goimapnotify/work.json
```

You should see `Watching mailbox INBOX` for each.

## 7. Keep it running with launchd

Three launchd agents: one goimapnotify per account for push, plus mbsync on a 15-minute timer as a fallback (catches non-INBOX folder changes, flag syncs, etc.).

Create a plist for each goimapnotify instance. Here's the template — duplicate it for each account, changing the label, config path, and log path:

`~/Library/LaunchAgents/com.example.goimapnotify-personal.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.example.goimapnotify-personal</string>
    <key>ProgramArguments</key>
    <array>
        <string>/Users/you/go/bin/goimapnotify</string>
        <string>-conf</string>
        <string>/Users/you/.config/goimapnotify/personal.json</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/Users/you/Library/Logs/goimapnotify-personal.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/you/Library/Logs/goimapnotify-personal.log</string>
    <key>EnvironmentVariables</key>
    <dict>
        <key>PATH</key>
        <string>/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin</string>
    </dict>
</dict>
</plist>
```

For the work account, duplicate the file as `com.example.goimapnotify-work.plist` and swap `personal` → `work` in the label, config path, and log path.

The sync timer plist (runs the full pipeline as a fallback):

`~/Library/LaunchAgents/com.example.mbsync.plist`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.example.mbsync</string>
    <key>ProgramArguments</key>
    <array>
        <string>/Users/you/.local/bin/mail-sync</string>
        <string>-a</string>
    </array>
    <key>StartInterval</key>
    <integer>900</integer>
    <key>StandardOutPath</key>
    <string>/Users/you/Library/Logs/mbsync.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/you/Library/Logs/mbsync.log</string>
    <key>EnvironmentVariables</key>
    <dict>
        <key>PATH</key>
        <string>/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin</string>
    </dict>
</dict>
</plist>
```

Load them all:

```bash
launchctl load ~/Library/LaunchAgents/com.example.goimapnotify-personal.plist
launchctl load ~/Library/LaunchAgents/com.example.goimapnotify-work.plist
launchctl load ~/Library/LaunchAgents/com.example.mbsync.plist
```

## 8. Indexing email for search

With everything syncing to local Maildir, the last piece is making it all searchable. Raw MIME email files aren't great for full-text search — they're full of base64 attachments, MIME boundaries, and encoded headers. A small Ruby script extracts the useful bits into plain text files, and [qmd](https://github.com/tobi/qmd) indexes them.

The script uses only Ruby stdlib and runs on macOS system Ruby (2.6+) — no gems needed. It handles multipart MIME, base64/quoted-printable encoding, RFC 2047 encoded headers, and HTML-to-text conversion.

### Converting MIME to plain text

`~/.local/bin/maildir-to-text`:

```ruby
#!/usr/bin/ruby
# frozen_string_literal: true

# Convert Maildir messages to plain text files for search indexing.
#
# Walks ~/Mail/<account>/ directories, extracts headers + body from each
# message, and writes .txt files to ~/Mail/.index/<account>/<folder>/<uid>.txt.
#
# Skips Spam and Trash folders. Only processes new/changed messages
# (compares mtime). Safe to run repeatedly via cron or launchd.
#
# Ruby 2.6+ compatible (macOS system Ruby), stdlib only.

require 'base64'
require 'digest/md5'
require 'fileutils'

MAIL_ROOT = File.join(Dir.home, 'Mail')
INDEX_ROOT = File.join(MAIL_ROOT, '.index')
SKIP_FOLDERS = %w[Spam Trash [Gmail]/Spam [Gmail]/Trash].freeze

def strip_html(html)
  text = html.gsub(/<(script|style)\b[^>]*>.*?<\/\1>/mi, '')
  text.gsub!(/<\s*(br|p|div|tr|li|h[1-6])\b[^>]*\/?>/i, "\n")
  text.gsub!(/<[^>]+>/, '')
  text.gsub!('&amp;', '&')
  text.gsub!('&lt;', '<')
  text.gsub!('&gt;', '>')
  text.gsub!('&quot;', '"')
  text.gsub!('&#39;', "'")
  text.gsub!('&nbsp;', ' ')
  text.gsub!(/&#(\d+);/) { [$1.to_i].pack('U') }
  text.strip
end

def decode_header(value)
  return '' if value.nil?

  value.gsub(/=\?([^?]+)\?([BbQq])\?([^?]*)\?=/) do
    charset, encoding, encoded = $1, $2.upcase, $3
    decoded = if encoding == 'B'
                Base64.decode64(encoded)
              else
                encoded.gsub('_', ' ')
                       .gsub(/=([0-9A-Fa-f]{2})/) { [$1].pack('H*') }
              end
    decoded.force_encoding(charset).encode('UTF-8', invalid: :replace, undef: :replace)
  rescue StandardError
    value
  end
end

def decode_body(body, transfer_encoding, charset)
  decoded = case transfer_encoding.to_s.strip.downcase
            when 'base64'
              Base64.decode64(body)
            when 'quoted-printable'
              body.gsub(/=\r?\n/, '')
                  .gsub(/=([0-9A-Fa-f]{2})/) { [$1].pack('H*') }
            else
              body
            end
  charset = 'UTF-8' if charset.nil? || charset.empty?
  decoded.force_encoding(charset).encode('UTF-8', invalid: :replace, undef: :replace)
rescue Encoding::ConverterNotFoundError, ArgumentError
  decoded.force_encoding('ASCII-8BIT').encode('UTF-8', invalid: :replace, undef: :replace)
end

def parse_headers(raw)
  headers = {}
  current_key = nil
  raw.each_line do |line|
    if line =~ /\A(\S+?):\s*(.*)/
      current_key = $1
      headers[current_key] = (headers[current_key] || '') + $2.rstrip
    elsif current_key && line =~ /\A\s+(.*)/
      headers[current_key] << ' ' << $1.rstrip
    end
  end
  headers
end

def parse_content_type(headers)
  ct = headers['Content-Type'] || 'text/plain'
  type = ct.split(';').first.strip.downcase
  charset = ct[/charset="?([^";]+)"?/i, 1]
  boundary = ct[/boundary="?([^";]+)"?/i, 1]
  [type, charset, boundary]
end

def parse_parts(body, boundary)
  parts = []
  sections = body.split("--#{boundary}")
  sections[1..-1].each do |section|
    break if section.start_with?('--')

    section = section.sub(/\A\r?\n/, '')
    header_body = section.split(/\r?\n\r?\n/, 2)
    next unless header_body.length == 2

    headers = parse_headers(header_body[0])
    parts << { headers: headers, body: header_body[1] }
  end
  parts
end

def extract_text_body(parts)
  plain = nil
  html = nil
  parts.each do |part|
    type, charset, boundary = parse_content_type(part[:headers])
    encoding = part[:headers]['Content-Transfer-Encoding']

    if type == 'text/plain' && plain.nil?
      plain = decode_body(part[:body], encoding, charset)
    elsif type == 'text/html' && html.nil?
      html = decode_body(part[:body], encoding, charset)
    elsif type.start_with?('multipart/') && boundary
      sub_parts = parse_parts(part[:body], boundary)
      result = extract_text_body(sub_parts)
      plain ||= result[:plain]
      html ||= result[:html]
    end
  end
  { plain: plain, html: html }
end

def extract_text(msg_path)
  raw = File.read(msg_path, encoding: 'ASCII-8BIT')
  header_section, body = raw.split(/\r?\n\r?\n/, 2)
  return '' unless header_section && body

  headers = parse_headers(header_section)
  from = decode_header(headers['From'])
  to = decode_header(headers['To'])
  subject = decode_header(headers['Subject'])
  date = headers['Date'] || ''

  type, charset, boundary = parse_content_type(headers)
  encoding = headers['Content-Transfer-Encoding']

  text_body = if type.start_with?('multipart/') && boundary
                parts = parse_parts(body, boundary)
                result = extract_text_body(parts)
                result[:plain] || (result[:html] && strip_html(result[:html])) || ''
              elsif type == 'text/plain'
                decode_body(body, encoding, charset)
              elsif type == 'text/html'
                strip_html(decode_body(body, encoding, charset))
              else
                ''
              end

  "From: #{from}\nTo: #{to}\nDate: #{date}\nSubject: #{subject}\n\n#{text_body}"
end

def stable_filename(msg_path)
  Digest::MD5.hexdigest(File.basename(msg_path))[0, 12] + '.txt'
end

def skip_folder?(folder_name)
  SKIP_FOLDERS.any? { |skip| folder_name.include?(skip) }
end

def process_account(account_path)
  account_name = File.basename(account_path)
  processed = 0
  skipped = 0

  Dir.glob(File.join(account_path, '**', '{cur,new}')).sort.each do |dir|
    folder_path = File.dirname(dir)
    folder_name = if folder_path == account_path
                    '.'
                  else
                    folder_path.sub("#{account_path}/", '')
                  end

    next if skip_folder?(folder_name)

    out_dir = File.join(INDEX_ROOT, account_name, folder_name)
    FileUtils.mkdir_p(out_dir)

    Dir.foreach(dir) do |filename|
      next if filename.start_with?('.')

      msg_path = File.join(dir, filename)
      next unless File.file?(msg_path)

      out_path = File.join(out_dir, stable_filename(msg_path))

      if File.exist?(out_path) && File.mtime(out_path) >= File.mtime(msg_path)
        skipped += 1
        next
      end

      begin
        text = extract_text(msg_path)
        File.write(out_path, text, encoding: 'UTF-8')
        processed += 1
      rescue StandardError => e
        warn "  SKIP #{filename}: #{e.message}"
      end
    end
  end

  [processed, skipped]
end

accounts = Dir.children(MAIL_ROOT)
              .map { |name| File.join(MAIL_ROOT, name) }
              .select { |path| File.directory?(path) && File.basename(path) != '.index' }
              .sort

total_processed = 0
total_skipped = 0

accounts.each do |account|
  puts "Processing #{File.basename(account)}..."
  processed, skipped = process_account(account)
  total_processed += processed
  total_skipped += skipped
  puts "  #{processed} new, #{skipped} unchanged"
end

puts "\nDone: #{total_processed} processed, #{total_skipped} unchanged"
```

```bash
chmod +x ~/.local/bin/maildir-to-text
```

Each email becomes a clean text file with headers and body:

```
From: Jane Doe <jane@example.com>
To: you@fastmail.com
Date: Wed, 26 Feb 2026 10:30:00 -0600
Subject: Meeting tomorrow

Hey, are we still on for tomorrow at 2pm?
```

The script is incremental — it compares mtimes and skips already-converted files, so it runs fast after the initial conversion. HTML-only emails get stripped down to readable text. Spam and Trash are excluded.

### Creating the search index

With the text files in place, register them as a qmd collection:

```bash
qmd collection add ~/Mail/.index --name email --mask '**/*.txt'
qmd update -c email
```

The initial indexing takes a minute or two for 100K+ emails. After that, `qmd update` is called automatically by the `mail-sync` wrapper on every sync, so new emails are searchable within seconds of arriving.

### Searching email

```bash
# Keyword search (fast, BM25)
qmd search "quarterly report" -c email

# Semantic search with reranking (slower, more relevant)
qmd query "emails about the server migration timeline" -c email -n 5

# Search across everything — email, wiki, notes
qmd query "meeting with Alex about deployment"
```

This is where the whole setup pays off. 140K+ emails, fully searchable from the command line, updated in near-real-time via IMAP IDLE. No cloud service, no Electron app, no API — just files and a local index.

## Adding more accounts

The pattern is the same for any IMAP provider:

1. Store the app password in Keychain (`security add-generic-password`)
2. Add an IMAPAccount/IMAPStore/MaildirStore/Channel block to `~/.mbsyncrc`
3. Add an `[accounts.name]` section to himalaya's `config.toml`
4. Add `named-mailboxes` and a `folder-hook` to `neomuttrc`
5. Create a goimapnotify JSON config and launchd plist
6. Run `mbsync <name>` then `maildir-to-text` — new account is automatically picked up by qmd

Each account syncs to its own `~/Mail/<name>/` directory, keeps its own IDLE connection, auto-switches in neomutt when you navigate between folders, and is immediately searchable via qmd.

## The result

Four tools, each doing one thing well:

- **`himalaya envelope list`** for a quick inbox check from the terminal
- **`neomutt`** when I want to browse, compose, or archive in bulk
- **`mail-sync -a`** to sync on demand, plus push and polling in the background
- **`qmd search "..." -c email`** to search 140K+ emails instantly

All reading from local Maildir under `~/Mail/`. No lock-in, no daemon, no Electron app. Just files and a local search index.

[^1]: This is a [known macOS issue](https://sourceforge.net/p/isync/bugs/66/) with isync's SASL integration. Apple's system SASL library defines callback IDs that upstream cyrus-sasl doesn't, causing the cryptic error code. The `AuthMechs LOGIN` directive bypasses SASL negotiation entirely.
