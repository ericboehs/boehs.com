# Make Claude Code Fix Its Own Lint Errors

Claude Code has a hooks system that lets you run scripts after every file edit. The killer use case: run your linter automatically and force Claude to fix issues before moving on. No more "can you run rubocop" after every change — it just happens.

The catch? Getting Claude to actually *act* on hook output requires a specific JSON format that isn't obvious from the docs. Here's what works.

<!-- truncate -->

## The problem

Out of the box, Claude Code ignores hook output. You can pipe all the lint errors you want to stdout — Claude won't see them. I spent an embarrassing amount of time thinking my hook was broken before finding [this GitHub issue](https://github.com/anthropics/claude-code/issues/3983) where an Anthropic engineer confirmed the fix.

## The fix: `"decision": "block"`

Your hook script must output this JSON on stdout:

```json
{
  "decision": "block",
  "reason": "Your lint output here"
}
```

Without `"decision": "block"`, the `reason` field is silently discarded. Claude never sees it. That's it — that's the whole secret.

## Full setup

### 1. Create the hook script

Save this as `.claude/hooks/lint-ruby.sh` in your project:

```bash
#!/bin/bash
input=$(cat)
file_path=$(echo "$input" | jq -r '.tool_input.file_path // empty')

# Only lint Ruby files
if [[ ! "$file_path" =~ \.rb$ ]]; then
  exit 0
fi

# Only lint if file exists (wasn't deleted)
if [[ ! -f "$file_path" ]]; then
  exit 0
fi

output=""

# Run rubocop
rubocop_out=$(bundle exec rubocop --format simple "$file_path" 2>&1)
if [[ $? -ne 0 ]]; then
  output+="RuboCop issues:\n$rubocop_out\n\n"
fi

# Run reek
reek_out=$(bundle exec reek "$file_path" 2>&1)
if [[ $? -ne 0 ]]; then
  output+="Reek issues:\n$reek_out\n\n"
fi

if [[ -n "$output" ]]; then
  jq -n --arg reason "$output" '{"decision": "block", "reason": $reason}'
  exit 0
fi
```

Make it executable:

```bash
chmod +x .claude/hooks/lint-ruby.sh
```

### 2. Configure the hook

Add this to `.claude/settings.json` (project-level) or `~/.claude/settings.json` (global):

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "bash .claude/hooks/lint-ruby.sh",
            "timeout": 30
          }
        ]
      }
    ]
  }
}
```

The `matcher` field is a regex against tool names — `Write|Edit` catches both file creation and modification.

### 3. That's it

Next time Claude edits a Ruby file, the hook runs RuboCop and Reek automatically. If either finds issues, Claude sees them immediately and fixes them before continuing. No prompting needed.

## Adapting for other languages

The pattern works for any linter. Swap the file extension check and linter commands:

**ESLint (JavaScript/TypeScript):**
```bash
if [[ ! "$file_path" =~ \.(js|ts|jsx|tsx)$ ]]; then exit 0; fi
lint_out=$(npx eslint "$file_path" 2>&1)
```

**Ruff (Python):**
```bash
if [[ ! "$file_path" =~ \.py$ ]]; then exit 0; fi
lint_out=$(ruff check "$file_path" 2>&1)
```

**Go:**
```bash
if [[ ! "$file_path" =~ \.go$ ]]; then exit 0; fi
lint_out=$(golangci-lint run "$file_path" 2>&1)
```

The structure is always the same: filter by extension, run your linter, and wrap any output in `{"decision": "block", "reason": "..."}`.

## Gotchas

- **`jq` is required** — the hook uses it to parse input and build JSON output. Install with `brew install jq` or your package manager.
- **`$BASH_ENV` can break hooks** — the hook runs as a non-interactive, non-login bash script, so `~/.bashrc` and `~/.zshrc` are *not* loaded. But if `$BASH_ENV` is set to a file that prints to stdout, it'll corrupt the JSON output. This is rare but worth checking if your hook silently fails.
- **The edit already happened** — PostToolUse hooks run *after* the file is written. The `"block"` decision doesn't prevent the edit; it tells Claude "something's wrong, fix it." Claude will then make another edit to address the lint errors, which triggers the hook again — the loop continues until lint passes.
- **Timeout matters** — set a reasonable timeout (30s works for most linters). If your linter is slow on first run (loading gems, compiling), you may need to bump it.
- **Exit code 0 always** — the hook communicates via JSON, not exit codes. Exit 0 whether lint passes or fails.

---

*This post was generated with [EARL](https://github.com/ericboehs/earl) (via Opus 4.6), but reviewed by me.*
