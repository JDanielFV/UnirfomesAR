
## 2025-02-04 - Lazy Loading Images in Scrollable Modals
**Learning:** For frontend performance optimizations involving image galleries or modals with many images (like ModalGallery), failing to lazy load images below the fold blocks the main thread on initial render and wastes bandwidth fetching resources the user hasn't seen yet. Also, using array indices as keys when mapping over images can lead to rendering bugs.
**Action:** When adding images to scrollable containers or modals, always append `loading="lazy"` to defer fetching off-screen images. When mapping over arrays to render elements, use composite keys (e.g., `${img}-${idx}`) rather than simple array indices.
