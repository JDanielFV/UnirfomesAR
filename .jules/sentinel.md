## 2025-02-14 - Upgrading Insecure Protocols to HTTPS
**Vulnerability:** The application used unencrypted `http://` links (specifically for `http://wa.me/...`) in the footer component, exposing users to Man-in-the-Middle (MITM) risks during redirection or communication.
**Learning:** Even for external redirectors like WhatsApp (`wa.me`), it is critical to always enforce secure `https://` protocols to protect user data and ensure communication integrity.
**Prevention:** Regularly scan the codebase for `http://` usages and enforce strict policies to only use `https://` for external links to mitigate unauthorized interception.
