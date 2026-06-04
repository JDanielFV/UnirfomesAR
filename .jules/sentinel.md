## 2026-04-18 - [Insecure WhatsApp Links]
**Vulnerability:** Found unencrypted HTTP transmission for WhatsApp communication links.
**Learning:** The application heavily relies on WhatsApp links for communication, which can lead to unencrypted HTTP links being used.
**Prevention:** Ensure all external communication links, specifically 'wa.me' URLs, use HTTPS.
