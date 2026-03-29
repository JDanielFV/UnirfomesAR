## 2026-03-29 - [Missing tabnabbing protection on window.open]
**Vulnerability:** Tabnabbing vulnerability due to missing 'noopener,noreferrer' in imperative window.open calls with target '_blank'.
**Learning:** The codebase has good awareness of tabnabbing protection in React 'a' tags (rel="noopener noreferrer" is correctly used), but developers are omitting it when making imperative window.open calls.
**Prevention:** Ensure 'noopener,noreferrer' is passed as the third parameter to all window.open calls with '_blank'.
