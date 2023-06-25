---
title: Kill a process running on a specific port on macOS
published_on: 2023-06-22
---

1. `lsof -i tcp:<port>` - to get the PID by `<port>`.
2. `kill -9 <PID>` - to kill by `<PID>`.