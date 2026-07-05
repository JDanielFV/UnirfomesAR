## 2024-07-05 - Custom Modal Accessibility and UX

**Learning:** Custom modals often lack native `<dialog>` accessibility features (like `role="dialog"`, `aria-modal="true"`) and expected UX interactions (Escape key to close, clicking outside to close). Also, icon-only close buttons frequently lack screen-reader labels.

**Action:** Always ensure custom modals implement `role="dialog"`, `aria-modal="true"`, 'Escape' key event listeners for dismissal, outside-click handlers (`e.target === e.currentTarget`), and that icon-only close buttons have an appropriate `aria-label` matching the component's primary language.
