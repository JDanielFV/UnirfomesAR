## 2024-05-18 - Unencrypted External Links
**Vulnerability:** External WhatsApp link using unencrypted HTTP protocol (`http://wa.me/`).
**Learning:** Frequent use of external communication links without verifying transport encryption can expose user metadata and communication endpoints over plaintext.
**Prevention:** Always use `https://` for external links and apply `target="_blank" rel="noopener noreferrer"` to prevent tabnabbing.
