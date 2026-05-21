
## 2024-05-21 - Image Lazy Loading Optimization
**Learning:** In the Uniformesar codebase, image URLs passed into `ModalGallery.jsx` may not be strictly unique, making simple indices insufficient for list rendering keys. Additionally, failing to lazy-load these gallery images severely impacts initial modal load times and payload size.
**Action:** Always use composite keys (e.g., `${img}-${idx}`) for potentially duplicate list items in this codebase. Furthermore, apply `loading="lazy"` attributes to `<img />` tags for below-the-fold or conditionally rendered content like galleries, explicitly documenting the performance optimization.
