# Disable Mattermost's "Show More" with a 30-Line Plugin

Mattermost truncates any post taller than 600 pixels, hiding the rest behind a "Show More" button with a gradient fade. There's no setting to turn this off — it's hardcoded in the webapp. If you're self-hosting and your posts are routinely long (AI bot responses, log dumps, code blocks), this gets old fast.

The fix is a tiny webapp-only plugin that injects CSS to remove the truncation.

<!-- truncate -->

## Why there's no config for this

The `ShowMore` React component checks rendered post height against a hardcoded `600px` constant. If it's taller, the post gets the `post-message--collapsed` class, a `max-height: 600px` on the text container, a gradient mask, and the "Show More" button. The server has no opinion about this — it's purely client-side.

There's no config toggle or feature request on the roadmap. So we'll do it ourselves.

## The plugin

Mattermost's plugin system supports webapp-only plugins — a JSON manifest and a JS bundle that runs in the browser. No server component needed. The plugin's `initialize` function appends a `<style>` tag to `<head>` that overrides the collapsed post styles: removes the `max-height: 600px` cap, kills the gradient fade mask, and hides the "Show More" button.

The source and a pre-built `.tar.gz` are in [this gist](https://gist.github.com/ericboehs/56efd2341689f76510980c2ef5bb1638) — download and install, no building required.

## Install

### Via System Console

1. Download `com.boehs.no-show-more.tar.gz` from [the gist](https://gist.github.com/ericboehs/56efd2341689f76510980c2ef5bb1638)
2. Go to **System Console > Plugin Management**
3. Upload the `.tar.gz` and click **Enable**

Plugin uploads must be enabled (`PluginSettings.EnableUploads: true` in `config.json`).

### Via mmctl (Docker)

```bash
docker cp com.boehs.no-show-more.tar.gz mattermost:/tmp/
docker exec mattermost mmctl --local plugin add /tmp/com.boehs.no-show-more.tar.gz
docker exec mattermost mmctl --local plugin enable com.boehs.no-show-more
```

This requires `ServiceSettings.EnableLocalMode: true` in `config.json`. Restart Mattermost after changing config.

## Notes

- **Hard-refresh** the browser (Cmd+Shift+R) or restart the desktop app after installing — the CSS loads at page init.
- **Survives updates** — plugins installed via the API are persisted in Mattermost's filestore. They survive container restarts and image upgrades.
- **Tested on Mattermost 11.3.0.** The CSS class names have been stable for years, but if a future version changes them, inspect the page and update the selectors in `main.js`.
