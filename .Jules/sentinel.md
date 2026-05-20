## 2024-05-24 - [Unencrypted External Links]
**Vulnerability:** Found an external link using HTTP (`http://wa.me/...`).
**Learning:** Hardcoded HTTP links for external services expose the initial request to interception before any potential server-side redirects to HTTPS occur.
**Prevention:** Always enforce HTTPS on all external links to ensure encrypted data transmission.
