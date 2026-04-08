## 2025-04-08 - Modal Keyboard/Screen Reader UX Constraints

**Learning:** When adding keyboard navigation (`Escape` key to close) and screen reader support (`role="dialog"`, `aria-label`) to custom `styled-components` modals, care must be taken to stop event propagation on the modal content container when utilizing overlay click-to-close behavior, as custom DOM elements lack native dialog semantics.

**Action:** Always implement `e.stopPropagation()` on the main modal container `onClick` handler whenever the background overlay has a close handler to prevent internal clicks from dismissing the dialog unintentionally.
