# Instant Google Results in Alfred

I've been searching for a solution to allow me to instantly search Google from anywhere on my Mac. My goal is to access the result I want as fast as possible.

My previous solution was to use the default fallback search in Alfred. I hit `Option-Space` typed my search and pressed `Enter`. This was pretty good. It would open Safari with my query's Google results. The page would take two seconds to load and then I'd have to figure out how to select the result I wanted.

Ideally, I'd just press 1, 2, 3, etc on my keyboard to launch the corresponding result. But the closest I could find was a vim-like browser plugin (such as [Vimari](https://github.com/televator-apps/vimari)) which gives all links a letter combination to type to navigate to it. Or [Shortcat](https://shortcatapp.com), which I use for navigating all macOS UI.[^1]

This solution wasn't fast enough for me though. I wanted a more modal experience where I hop into an ephemeral search session.

<!-- truncate -->

## Enter googler

In my search for instantly navigating Google results, I came across [googler](https://github.com/jarun/googler) which displays google results on the command line. You can type a number followed by `Enter` and it opens your default browser to that result. Getting closer.

After looking for an existing solution and turning up empty, I decided to make my own via Alfred Workflows.

I really liked `googler` and essentially wanted to interface with it through Alfred. So I picked up my favorite programming language, and started writing. The end result is [Alfred googler](https://github.com/ericboehs/alfred-googler). Here's a demo:

![demo gif](https://github.com/ericboehs/alfred-googler/raw/master/demo.gif)

Check out the [README](https://github.com/ericboehs/alfred-googler#readme) for info on installation and features.

[^1]: There's an alternative to Shortcat called [Vimac](https://vimacapp.com/) but I still prefer Shortcat even though it's not maintained.
