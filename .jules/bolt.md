## 2024-05-20 - Image Lazy Loading in Modals
**Learning:** Loading many images simultaneously within a hidden modal or gallery grid component blocks the main thread, wastes bandwidth on initial render, and delays the time-to-interactive for the main application view even when the modal is initially closed.
**Action:** Always add `loading="lazy"` to `<img>` elements within modals, hidden panels, or scrollable galleries to defer fetching of off-screen images until they are actually needed.
