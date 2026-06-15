## 2024-05-03 - ModalGallery Lazy Loading Optimization
**Learning:** The application's ModalGallery renders multiple images simultaneously in a hidden scrollable container. Without lazy loading, opening the modal triggers a concurrent network request spike for all images, degrading performance.
**Action:** Apply loading="lazy" to gallery images to ensure they are only loaded when they enter the scrollable viewport.
