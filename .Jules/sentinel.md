
## 2024-05-18 - [Security Enhancement] Enforce HTTPS for external links
**Vulnerability:** Found an external link using `http://` instead of `https://` in `src/assets/components/Footer.jsx`.
**Learning:** Unencrypted HTTP connections can expose data to man-in-the-middle (MitM) attacks.
**Prevention:** Always enforce HTTPS for all external links to prevent unencrypted data transmission, and use `target="_blank" rel="noopener noreferrer"` for external links.
