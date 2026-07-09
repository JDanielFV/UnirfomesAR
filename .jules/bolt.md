## 2024-10-24 - [Lazy Loading Modals]
**Learning:** Adding lazy loading to images within modals defers off-screen fetching and saves bandwidth. Additionally, using composite keys (`${img}-${idx}`) for mapped items prevents potential rendering bugs with duplicate items.
**Action:** When rendering galleries or lists of images in React, specifically inside modals, always add `loading="lazy"` and use robust composite keys instead of plain array indices.
