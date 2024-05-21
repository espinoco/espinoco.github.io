---
title: Kill a process running on a specific port on macOS
published_on: 2024-05-14
---
1. Get the PID by `<PORT>`
    ```
    lsof -i tcp:<PORT>
    ```
2. Kill by the `<PID>`
    ```
    kill -9 <PID>
    ```