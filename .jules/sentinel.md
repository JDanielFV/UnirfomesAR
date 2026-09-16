## 2024-05-18 - Upgrade unencrypted links
**Vulnerability:** Unencrypted `http://` links (e.g. `http://wa.me/...`) were found.
**Learning:** Hardcoded, unencrypted `http://` links to external services are vulnerable to Man-in-the-Middle (MITM) attacks.
**Prevention:** Always use secure `https://` for external links to mitigate MITM risks.
