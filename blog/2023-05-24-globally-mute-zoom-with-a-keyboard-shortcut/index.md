# Globally Mute Zoom with a Keyboard Shortcut

I have a global keyboard shortcut (`` ⌥` ``) to mute my microphone on Zoom. I've done this several ways in the past but right now my solution is to send the mute keyboard shortcut (`⌘⇧A`) to the Zoom app via Keyboard Maestro.

![Screenshot of Keyboard Maestro](./macro.png)

[Download Macro](https://gist.githubusercontent.com/ericboehs/01acc48ddf426a12bd9c1f8e01b6d58a/raw/255254a987ecb401383aa4e7650cf60100f5ff70/Mute%2520Zoom.kmmacros)

## Mute status in macOS Menubar

Using [SwiftBar](https://swiftbar.app), I have a script which checks the mute status and displays it in my menubar.
![Screenshot of Swiftbar Zoom mute state icon](./swiftbar.png)
[Download Script](https://gist.githubusercontent.com/ericboehs/01acc48ddf426a12bd9c1f8e01b6d58a/raw/255254a987ecb401383aa4e7650cf60100f5ff70/zoomMuteState.1s.scpt)
