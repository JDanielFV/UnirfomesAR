## 2026-06-30 - Lazy Loading in Scrollable Modals
**Learning:** Loading large sets of images inside hidden modals blocks the main thread during initial render and consumes unnecessary bandwidth.
**Action:** Add `loading="lazy"` to `<img>` elements within scrollable containers or modals to defer fetching off-screen images, improving initial load time and preventing main thread blocking.
