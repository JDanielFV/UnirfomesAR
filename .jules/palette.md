## 2024-05-17 - Enhance Custom Modals
**Learning:** Custom modal overlays need explicit accessibility semantics (`role="dialog"`, `aria-modal="true"`) and keyboard support (closing via the Escape key). Users also expect modals to close when clicking outside the content area.
**Action:** When implementing custom modals, always attach a global `keydown` event listener for 'Escape' in a `useEffect` and handle `onClick` outside the modal using `stopPropagation()`.
