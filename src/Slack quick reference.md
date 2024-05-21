---
title: Slack quick reference
published_on: 2023-04-09
updated_on: 2024-05-15
---
- Slack setup
    - Use Slack for Desktop to use Slack windowing features.
    - Use Grammarly Desktop so that it works with the Slack Desktop app. It needs to be downloaded from Grammarly's website.
    - Slack Settings
        - Advanced
            - When writing a message, press `Enter` to…
                - Start a new line (use `command + Enter` to send) (checked)
            - Download location
                - Choose location for each download (checked)
        - Mark as read
            - Under "When I view a channel"
                - Start me at the newest message, but leave unseen messages unread (checked)
        - Messages & media
            - Theme -> Compact
            - Names -> Just display names
        - Additional options
            - Display information about who is currently typing a message (checked)
            - Show times with 24-hour clock (checked)
            - Display color swatches next to hexadecimal values (checked)
        - Emoji
            - Convert my typed emoticons to emoji
            - Show one-click reactions on messages
                - Custom
        - Themes
            - System (selected)
- [[Tips for writing communication]]
- `-` negates during search. Example to search the term `<TERM>` **not** in the channel `<CHANNEL-NAME>`:
    ```
    <TERM> -in:#<CHANNEL-NAME>
    ```
- Search messages that have a link.
    ```
    has:link
    ```
- Search DM's by person `<ALIAS>`.
    ```
    in:@<ALIAS>
    ```
- Set the `<USER-ALIAS>` color to the color `<HTML-COLOR-CODE>`.
    ```
    /color <USER-ALIAS> <HTML-COLOR-CODE>
    ```
    - Example: `/color @espinoco #639FB6`
- Open the "Unreads" view.
    ```
    command + shift + A
    ```
- Expand/collapse sidebar.
    ```
    command + shift + D
    ```

