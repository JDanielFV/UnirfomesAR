
## 2024-11-20 - Lazy Loading in Scrollable Modals
**Learning:** Loading dozens of high-resolution images synchronously in a hidden modal gallery blocks the main thread on initial render and wastes bandwidth, as off-screen images are fetched before they are needed.
**Action:** Always add `loading="lazy"` to `<img>` elements within scrollable containers or modals (like image galleries) to defer fetching until the user scrolls them into view, improving initial load performance.
