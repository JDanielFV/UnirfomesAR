## 2024-05-16 - Prevent Modal Unnecessary Re-Renders
**Learning:** In `Productos.jsx`, whenever the `openGallery` state toggles to show/hide the `ModalGallery`, the entire `Productos` component re-renders. This caused the static array of `productData` to be unnecessarily mapped over and rendered into `<Cards>` every time the modal opened or closed.
**Action:** Wrap the mapping of static arrays in `useMemo` when they are inside a component that has its own local state (like toggles) to prevent them from recalculating and re-rendering with every state change.

## 2024-05-16 - Lazy Load Modal Gallery Images
**Learning:** `ModalGallery.jsx` renders a grid of ~31 images. By default, the browser attempts to fetch all of these images over the network immediately when the modal opens, which wastes bandwidth and memory if the user never scrolls down.
**Action:** Always add `loading="lazy"` to `<img>` elements within long scrollable lists or modals to defer off-screen image loading until the user scrolls them into view, significantly improving initial load performance.
