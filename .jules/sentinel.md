
## 2024-06-28 - Mixed Content Prevention
**Vulnerability:** External URLs (e.g., WhatsApp links in Footer) were hardcoded with the `http://` protocol, which can lead to mixed content warnings, unencrypted transmissions, and potential MITM attacks when embedded in an `https://` site.
**Learning:** Even simple social media or contact links can pose security risks if they rely on insecure HTTP connections.
**Prevention:** Hardcoded URLs should always default to `https://`. In addition, adding a Content-Security-Policy meta tag with `upgrade-insecure-requests` acts as a defense-in-depth measure by automatically forcing browsers to upgrade all insecure HTTP requests to HTTPS, thereby preventing mixed-content vulnerabilities.
