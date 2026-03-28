## 2024-05-15 - Interactive Elements Semantics
**Learning:** Mobile menu icons mapped to standard HTML `div` tags lack keyboard focusability and default ARIA semantic meaning, causing screen readers and keyboard users to miss critical navigation landmarks.
**Action:** When implementing mobile menus or interactive UI widgets, ensure the triggers are mapped to native `button` elements and leverage `aria-label`, `aria-expanded`, and `aria-controls` to properly announce their state and functionality.
