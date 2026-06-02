## 2024-05-07 - Modal Image Burst Loading
**Learning:** In React, conditionally rendered components containing large lists of images (like modal galleries) will trigger simultaneous network requests for all images as soon as the component mounts. This causes a sudden burst of network activity and UI freezing.
**Action:** Always use native lazy loading (`loading="lazy"`) for image-heavy components that might be conditionally rendered to ensure images only load when they enter the viewport within the modal's scrolling context, reducing the initial payload spike.
