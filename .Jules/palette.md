## Palette's Journal

## 2025-02-12 - Replacing div buttons with semantic button elements for toggles
**Learning:** Found a common pattern where a mobile menu toggle (`<MenuIcon>`) was implemented as a `styled.div` instead of a `styled.button`. While `cursor: pointer` handles mouse users, this approach completely breaks keyboard accessibility since `div`s are not focusable by default and screen readers cannot identify them as interactive controls.
**Action:** When creating toggle icons (like hamburger menus), always use semantic `styled.button` components with appropriate ARIA attributes (`aria-label`, `aria-expanded`, `aria-controls`) and apply CSS resets (`background: none; border: none; padding: 0; outline: none;`) to achieve the desired visual style without sacrificing accessibility.

## 2025-04-03 - Custom Modal Accessibility & UX Patterns
**Learning:** Encountered a custom modal (`ModalGallery.jsx`) lacking essential keyboard and screen reader accessibility features. Relying solely on a close button ignores power users and accessibility needs. Modals need to support the Escape key for quick exit, overlay clicks for intuitive closing, and require specific ARIA attributes (`role="dialog"`, `aria-modal="true"`) to properly trap screen reader focus. Icon-only close buttons also strictly need an `aria-label` and visible focus states (`:focus-visible`) for keyboard navigation.
**Action:** Whenever implementing a custom modal, ensure it has: 1) Escape key listener (`keydown`), 2) Overlay click-to-close behavior (checking `e.target === e.currentTarget`), 3) `role="dialog"` and `aria-modal="true"`, and 4) Accessible and focusable controls (ARIA labels and focus rings for close buttons).
