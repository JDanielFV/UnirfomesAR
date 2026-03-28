## 2025-03-28 - Tabnabbing in window.open
**Vulnerability:** Reverse Tabnabbing via `window.open`
**Learning:** React elements with `target="_blank"` correctly use `rel="noopener noreferrer"`, but calls to `window.open` using `_blank` in this codebase were missing the equivalent `noopener,noreferrer` as the third parameter. This allows the opened page to potentially access `window.opener` and redirect the original page.
**Prevention:** Ensure that anytime `window.open` is used with `_blank`, the third parameter includes `'noopener,noreferrer'` to explicitly disable the opener context.
