## YYYY-MM-DD - [Title]
**Learning:** Found an opportunity to improve image loading performance by adding lazy loading to off-screen images within the scrollable `ModalGallery` component. I also updated the array mapping key from simple array indices to composite string keys to prevent potential React rendering bugs.
**Action:** Whenever mapping over an array of images to display in galleries or modals, add `loading="lazy"` attribute, and always ensure array mapping keys use a composite structure instead of simple indices.
