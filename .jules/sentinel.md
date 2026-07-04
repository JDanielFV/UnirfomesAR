## 2024-07-04 - Tabnabbing Protection in External Links
**Vulnerability:** External links opened without `target="_blank"` missing `rel="noopener noreferrer"`.
**Learning:** External links with `target="_blank"` without `rel="noopener noreferrer"` can expose the site to reverse tabnabbing attacks, allowing the newly opened tab to manipulate the original page.
**Prevention:** Always use `rel="noopener noreferrer"` when setting `target="_blank"` on external links. Note: do not apply this to `tel:` and `mailto:` protocols as it forces an unnecessary blank tab.
