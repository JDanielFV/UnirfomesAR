## 2025-02-04 - Native Image Lazy Loading in Modals
**Learning:** In image-heavy components like galleries rendered inside scrollable modals (`overflow: auto`), rendering all images at once causes the browser to fetch all images concurrently when the modal opens. This spikes network activity and delays the rendering of visible images.
**Action:** Always apply `loading="lazy"` to `<img>` elements (or styled images) in scrollable modals to defer network requests for off-screen images until they approach the viewport, significantly improving the modal's initial load performance.

## 2025-02-04 - Native Image Lazy Loading in Modals II
**Learning:** Adding `loading="lazy"` to `<img>` tags in React modals specifically defers network requests for off-screen images until they are scrolled into view within the modal. Without it, a modal containing a large number of images will cause a massive spike in concurrent network requests as soon as the modal mounts, degrading the UI rendering performance.
**Action:** Consistently enforce the `loading="lazy"` attribute on `<img>` elements representing gallery or list items rendered within scrollable overlays or modals.
