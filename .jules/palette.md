## YYYY-MM-DD - [Title]
**Learning:** Custom modal overlays need explicit keyboard support (Escape key to dismiss) and focus management to be accessible, as well as proper ARIA roles (`role="dialog"`, `aria-modal="true"`) to inform screen readers of the modal state.
**Action:** Always attach a global 'keydown' event listener for 'Escape' key dismissal, add 'role="dialog"' and 'aria-modal="true"' attributes to the modal container, and implement an outside-click handler by verifying 'e.target === e.currentTarget' on the overlay wrapper.
