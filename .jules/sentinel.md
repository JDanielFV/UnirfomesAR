## 2024-11-26 - [Title]
**Vulnerability:** Tabnabbing vulnerability due to missing `target="_blank"` and `rel="noopener noreferrer"` attributes on external links.
**Learning:** External links with `target="_blank"` without `rel="noopener noreferrer"` expose the site to a reverse tabnabbing attack where the new tab can navigate the original tab to a malicious page. Also learned that tel: and mailto: links should not have these attributes as it's a UX anti-pattern.
**Prevention:** Always ensure `target="_blank"` is accompanied by `rel="noopener noreferrer"` on external links, except for specific protocols like tel: and mailto:.
