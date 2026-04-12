## 2025-05-24 - [Enforce HTTPS and Prevent Tabnabbing]
**Vulnerability:** External links were opening insecurely, with one using HTTP instead of HTTPS, and others lacking `rel="noopener noreferrer"` when using `target="_blank"`.
**Learning:** Found an external link to WhatsApp using `http://`, which risks unencrypted data transmission. Also, external links using `target="_blank"` without `rel="noopener noreferrer"` are vulnerable to reverse tabnabbing, where the newly opened page can exploit the `window.opener` API to redirect the original page to a malicious site.
**Prevention:** Always use `https://` for external links and include `rel="noopener noreferrer"` alongside `target="_blank"`.
