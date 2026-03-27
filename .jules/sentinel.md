## 2024-05-18 - [Tabnabbing via window.open]
**Vulnerability:** window.open calls to external sites without 'noopener,noreferrer'
**Learning:** Found instances of window.open opening new tabs without clearing the window.opener reference, which can expose the application to reverse tabnabbing attacks.
**Prevention:** Always include 'noopener,noreferrer' as the third argument to window.open when opening external links.
