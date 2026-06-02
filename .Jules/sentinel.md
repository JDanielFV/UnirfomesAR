## 2025-02-23 - [MEDIUM] Fix unencrypted data transmission and tabnabbing in Footer
**Vulnerability:** External links were transmitting data over unencrypted HTTP (http://wa.me/...) and lacked `target="_blank" rel="noopener noreferrer"` attributes.
**Learning:** External links in the footer, such as WhatsApp and Facebook, were vulnerable to data interception and tabnabbing due to missing security attributes and unencrypted protocols.
**Prevention:** Always enforce HTTPS for external links to prevent unencrypted data transmission and ensure that any link opening in a new tab (`target="_blank"`) includes `rel="noopener noreferrer"` to mitigate tabnabbing risks.
