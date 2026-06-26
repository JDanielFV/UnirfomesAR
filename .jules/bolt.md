
## 2024-06-26 - Native Image Lazy Loading in Modal Galleries
**Learning:** The `ModalGallery` loads a large number of images eagerly upon rendering. Although the modal itself is hidden initially, rendering `<img>` elements without native lazy loading fetches all images immediately when the modal is opened, blocking the main thread and slowing down perceived rendering. Also, using array indices as keys in React mapping (`key={idx}`) can lead to subtle rendering bugs, especially if the array mutates.
**Action:** Implemented native lazy loading (`loading="lazy"`) on gallery images to defer fetching off-screen images until they are about to scroll into view, and updated the mapping function to use a composite key (`key={\`${img}-${idx}\`}`) to ensure unique identification of elements.
