## 2024-05-15 - Lazy Loading Images in Modals
**Learning:** Conditionally rendered components like modals, when they contain numerous images (e.g., `<img src="..." />` within a `.map()` loop), will trigger simultaneous network requests for *all* those images as soon as the modal is opened and the component mounts, even if most of them are off-screen.
**Action:** Always add `loading="lazy"` to images inside large list renderings or scrollable modals to defer the network payload until the images are scrolled into view.
