## Palette's Journal

## 2025-02-12 - Replacing div buttons with semantic button elements for toggles
**Learning:** Found a common pattern where a mobile menu toggle (`<MenuIcon>`) was implemented as a `styled.div` instead of a `styled.button`. While `cursor: pointer` handles mouse users, this approach completely breaks keyboard accessibility since `div`s are not focusable by default and screen readers cannot identify them as interactive controls.
**Action:** When creating toggle icons (like hamburger menus), always use semantic `styled.button` components with appropriate ARIA attributes (`aria-label`, `aria-expanded`, `aria-controls`) and apply CSS resets (`background: none; border: none; padding: 0; outline: none;`) to achieve the desired visual style without sacrificing accessibility.

## 2025-02-12 - Accessible custom modals
**Learning:** Found a custom modal implementation without essential keyboard and screen reader accessibility features, such as Escape key support, overlay click-to-close behavior, and necessary ARIA attributes. Such omissions severely limit usability for disabled users and create frustrating dead-ends in UI interaction.
**Action:** When implementing custom modals, always ensure they include critical UX and accessibility features: an Escape key listener (`useEffect` watching 'keydown'), an overlay click-to-close handler checking `e.target === e.currentTarget`, appropriate ARIA attributes on the modal content container (`role="dialog"`, `aria-modal="true"`, `aria-label`), and clear `:focus-visible` styles for the close button to aid keyboard navigation.
