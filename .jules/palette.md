## 2024-06-24 - Custom Modal Overlay Accessibility and UX

**Learning:** For custom modal overlays, ensure proper accessibility and UX by attaching a global `keydown` event listener for 'Escape' in a `useEffect` (with appropriate cleanup), handling outside clicks by checking `if (e.target === e.currentTarget) onClose();` on the overlay container (avoid using `e.stopPropagation()` as it is an anti-pattern), and applying semantic attributes (`role="dialog"`, `aria-modal="true"`, and `aria-label` for close buttons). Also, when mapping over arrays to render elements in React (such as images in a gallery), use composite keys (e.g., `${img}-${idx}`) rather than simple array indices to prevent potential rendering bugs with duplicate items.

**Action:** Consistently verify custom modal implementations across the application to verify 'Escape' key functionality, reliable outside-click closures, explicit ARIA roles/labels, and valid React list keys are present.
