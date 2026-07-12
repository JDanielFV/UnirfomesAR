## 2024-07-12 - [Title]
**Vulnerability:** External links (e.g., `href="https://maps.app.goo.gl/QoeqGcHGB2z7rXL77"` and `href="https://wa.me/+525621288935"`) opened via standard `<a>` tags lack `target="_blank"` and `rel="noopener noreferrer"`.
**Learning:** When adding `target="_blank"` to open external links in a new tab, `rel="noopener noreferrer"` must also be included to prevent reverse tabnabbing vulnerabilities.
**Prevention:** Always include `target="_blank" rel="noopener noreferrer"` on `<a>` tags linking to external domains when opening them in a new tab.
