## 2024-05-24 - Missing `rel="noopener noreferrer"` on external links
**Vulnerability:** External links (`href` to domains outside the app) opened with `target="_blank"` without `rel="noopener noreferrer"` expose the application to tabnabbing attacks, where the newly opened tab can manipulate the original tab's `window.opener` object. Also, some external URLs used `http` instead of `https`.
**Learning:** It's important to consistently apply `target="_blank" rel="noopener noreferrer"` to all external links in React/styled-components applications to prevent cross-site window context manipulation.
**Prevention:** Enforce a linting rule (like `react/jsx-no-target-blank`) and always review external links to ensure `noopener noreferrer` is present and `https` is used.
