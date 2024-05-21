---
title: Password generation quick reference
published_on: 2023-04-09
updated_on: 2024-05-14
---
- Generates multiple passwords with length `<LEN>`. Grab a single one then erase the terminal's output (`⌘ + K` on macOS).
    ```
    pwgen <LEN> -n -c -y -s
    ```
- Generates multiple _memorable_ passwords with length `<LEN>`. Grab a single one then erase the terminal's output (`⌘ + K` on macOS).
    ```
    pwgen <LEN>
    ```