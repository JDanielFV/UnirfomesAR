## 2024-05-18 - Lazy Loading Off-Screen Images
**Learning:** Loading all images in a modal gallery eagerly blocks the main thread on initial render and consumes bandwidth for assets the user hasn't scrolled to see yet.
**Action:** Use `loading="lazy"` on image elements inside hidden or scrollable containers (like modals) to defer loading off-screen images. Also, use composite keys (`${img}-${idx}`) for mapped images to prevent potential rendering bugs.
