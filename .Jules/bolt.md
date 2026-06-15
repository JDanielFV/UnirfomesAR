## 2026-05-04 - Native lazy loading for conditionally rendered modal galleries

**Learning:** Native browser lazy loading (`loading="lazy"`) is a critical strategy for optimizing image-heavy components like galleries, especially when hidden within interactive or conditionally rendered components like modals. Without it, the browser might initiate network requests for all images as soon as the modal mounts or is parsed, leading to massive unnecessary network payload. Deferring the loading until the images are about to enter the viewport drastically improves responsiveness and saves bandwidth.

**Action:** Always implement `loading="lazy"` on images inside large galleries, modals, or below-the-fold content by default. When iterating over arrays of images (e.g., using `.map()`), ensure to use stable, unique identifiers (such as the image URL) as the `key` prop instead of array indices to improve rendering performance and stability.
