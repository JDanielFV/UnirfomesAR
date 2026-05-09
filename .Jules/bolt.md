
## 2026-05-09 - Lazy Loading Modal Gallery Images
**Learning:** Native browser lazy loading (`loading="lazy"`) is crucial for optimizing hidden interactive components like modals containing large galleries. The initial network request shouldn't eagerly fetch dozens of images that aren't yet visible to the user.
**Action:** Always add `loading="lazy"` to images inside conditionally rendered components or modals when there are numerous media assets, delaying loading until they enter the viewport to reduce initial payload and save bandwidth.
