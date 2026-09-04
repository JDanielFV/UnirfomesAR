## 2024-05-18 - Missing loading="lazy" and duplicated array indices
**Learning:** Found mapped images in `ModalGallery.jsx` missing `loading="lazy"`. They also use array `idx` as React key which can cause re-rendering issues, so composite keys like `${img}-${idx}` are needed.
**Action:** Always add `loading="lazy"` to off-screen or large groups of mapped images, and use composite keys.
