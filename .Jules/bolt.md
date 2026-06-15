## 2024-05-18 - Native Lazy Loading for Gallery Modals
**Learning:** Adding `loading="lazy"` to images mapped inside a conditional modal (like `ModalGallery.jsx`) significantly reduces initial network payload and prevents unnecessary immediate fetching of large gallery images.
**Action:** Always consider `loading="lazy"` for lists of images, especially those that are hidden by default inside interactive or conditionally rendered components.
