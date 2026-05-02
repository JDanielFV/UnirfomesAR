## 2024-05-02 - Native Lazy Loading in Hidden Modals
**Learning:** Even when a gallery component is hidden inside a conditionally rendered modal, explicitly defining `loading="lazy"` on the image elements ensures that the browser won't try to fetch them all simultaneously when the modal mounts. It's a critical native capability that should be utilized, especially for heavy image payload lists.
**Action:** Always add `loading="lazy"` attributes when rendering extensive image lists natively in React maps, regardless of whether the component's visibility is hidden or toggled on initially.
