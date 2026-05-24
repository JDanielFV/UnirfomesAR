## 2024-05-24 - Tabnabbing in target="_blank" links
**Vulnerability:** External links in PromoApp.jsx, Contacto.jsx, and Footer.jsx were missing `rel="noopener noreferrer"`.
**Learning:** React 18+ does not automatically secure all `target="_blank"` anchor tags; manual protection is required, particularly for external links.
**Prevention:** Always include `rel="noopener noreferrer"` when using `target="_blank"` on `<a>` tags.
