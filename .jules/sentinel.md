## 2024-11-20 - Unencrypted Data Transmission via HTTP WhatsApp Link
**Vulnerability:** Found an external WhatsApp link (`http://wa.me/`) in the `Footer.jsx` component using the unencrypted HTTP protocol, allowing potential interception of user data if an explicit redirect does not occur or is circumvented.
**Learning:** Hardcoded external action links (like messaging or sharing) often default to HTTP if copied from older sources. In this codebase, the external WhatsApp link pattern requires strict usage of HTTPS to ensure the connection is secure.
**Prevention:** Always enforce `https://` for all external links, especially for platforms like WhatsApp that handle sensitive user interactions, to prevent unencrypted data transmission.
