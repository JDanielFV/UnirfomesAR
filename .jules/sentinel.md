
## 2025-02-18 - Tabnabbing Vulnerability in External Links
**Vulnerability:** External links (`<a>` tags) were using `target="_blank"` without the corresponding `rel="noopener noreferrer"` attributes, opening the application to reverse tabnabbing attacks. In reverse tabnabbing, the newly opened malicious page can use `window.opener.location` to navigate the original trusted tab to a phishing site.
**Learning:** React/Vite applications often don't inherently prevent tabnabbing unless a specific linter rule (like `react/jsx-no-target-blank`) is enforced or developers are vigilant.
**Prevention:** Always add `rel="noopener noreferrer"` to any link that includes `target="_blank"`. This breaks the connection between the current page and the newly opened tab, setting `window.opener` to null.
