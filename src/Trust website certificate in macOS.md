---
title: Trust website certificate in macOS
published_on: 2024-05-17
---
Valid use cases I came across for doing this:
1. Enabling HTTPS for router's LAN web access.

Steps:
- Go to the website in Safari.
- There will be a prompt alert about the website's certificate.
- Click on "Show certificate".
- Drag and drop the certificate icon and place it somewhere on your computer.
- Double-click the certificate to add it to the System's Keychain.
- Search for the certificate in the "Keychain Access" app.
- Expand the Trust section and mark everything as "Always Trust".