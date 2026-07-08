
## 2024-05-24 - Missing Tabnabbing Protections on External Links
**Vulnerability:** External links (`href="http..."`) missing `target="_blank" rel="noopener noreferrer"`.
**Learning:** External links opening in the same tab or in a new tab without `noopener noreferrer` expose users to reverse tabnabbing (phishing) and performance issues. Additionally, an external `http://wa.me` link was found, exposing user data on the wire.
**Prevention:** Always include `target="_blank" rel="noopener noreferrer"` on external links and ensure HTTPS is used for external endpoints.
