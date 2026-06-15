## 2024-05-24 - Enforce HTTPS for WhatsApp links
**Vulnerability:** Found `http://wa.me/...` being used in the Footer component. Unencrypted HTTP links expose user communication to Man-in-the-Middle (MitM) attacks, allowing attackers to intercept or modify the request before it reaches WhatsApp's servers.
**Learning:** External links should always use secure protocols (HTTPS) to ensure user data remains encrypted in transit.
**Prevention:** Regularly scan for `http://` patterns in the codebase, especially for known domains that support HTTPS like `wa.me`, and enforce HTTPS usage.
