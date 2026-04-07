## 2026-04-07 - [Upgrade Hardcoded External Links to HTTPS]
**Vulnerability:** External link (WhatsApp integration) was hardcoded using the 'http://' protocol instead of 'https://'.
**Learning:** Hardcoded HTTP links in a React single-page app can expose users to Man-in-the-Middle (MitM) attacks by initiating unencrypted traffic, even if the destination eventually redirects to HTTPS.
**Prevention:** Always default to HTTPS for external links, particularly those related to communication or sharing, to enforce secure communication from the very first request.
