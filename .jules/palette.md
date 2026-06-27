## 2024-11-20 - Missing ARIA Labels on Icon-only Buttons
**Learning:** Icon-only buttons without inner text, like the Bajar down-arrow button, are completely invisible to screen readers unless given explicit accessible names.
**Action:** Always add an `aria-label` attribute (in the primary UI language) to buttons that lack text content, and mark their decorative nested images with `alt=""`.
