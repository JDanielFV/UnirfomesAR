## 2026-04-14 - Upgrade to HTTPS for security
**Vulnerability:** Unencrypted data transmission in the footer's WhatsApp link.
**Learning:** Hardcoded `http://` URLs were used instead of `https://` leading to potential interception of the communications.
**Prevention:** Always verify external URLs use `https://` to ensure secure, encrypted communication, and avoid copying outdated link formats.
