## 2025-02-23 - [Prevent Tabnabbing on External Links]
**Vulnerability:** External links (`target="_blank"`) in contact lists did not include `rel="noopener noreferrer"`.
**Learning:** External links opening in a new tab without protections can allow the new page to access the original page's `window.opener` object, leading to potential phishing attacks (tabnabbing). Note: this protection should specifically not be added to `tel:` and `mailto:` links, which are handled by OS defaults.
**Prevention:** Always add `rel="noopener noreferrer"` whenever `target="_blank"` is used on external HTTP/HTTPS links.
