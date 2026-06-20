## 2025-02-18 - Prevent Tabnabbing on External Links
**Vulnerability:** External links (`target="_blank"`) in `PromoApp.jsx`, `Footer.jsx`, and `Contacto.jsx` were missing `rel="noopener noreferrer"`.
**Learning:** React 18 mitigates this automatically for JSX elements, but explicitly adding the `rel` attribute remains a critical defense-in-depth practice, especially when using `window.open()` directly as seen in `Contacto.jsx` for social media links.
**Prevention:** Always pair `target="_blank"` with `rel="noopener noreferrer"`, and for dynamic links opened via JS (e.g., `window.open`), include `'noopener,noreferrer'` in the features parameter.
