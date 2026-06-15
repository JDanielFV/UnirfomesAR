
## 2025-05-10 - Optimizing Render Performance in React Modals and Lists
**Learning:** In this codebase, inline styles (e.g., `style={{...}}`) and the use of array indexes as `key` props cause unnecessary re-allocations and re-renders, especially when updating state or toggling components like `ModalGallery`. Furthermore, large galleries embedded in modals create heavy initial network requests unless explicitly deferred.
**Action:** Extract inline styles to `styled-components` outside component scopes to prevent object re-allocation, use established unique identifiers (like `product.text` or image URLs) as `key` props instead of indexes, and always apply native lazy loading (`loading="lazy"`) to images hidden within modals.
