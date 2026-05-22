## 2025-05-22 - Lazy Loading with Anchor Links

**Learning:** When using lazy loading wrappers (like `IntersectionObserver` wrappers) for sections targeted by anchor links, wrapping the outer element that has the `id` attribute removes the anchor from the DOM before it loads, breaking single-page navigation.

**Action:** Ensure the lazy wrapper (e.g., `<LazySection>`) is placed *inside* the structural element carrying the `id` attribute (e.g., `<section id='Productos'><LazySection>...</LazySection></section>`). Apply an estimated `minHeight` prop to the fallback container to minimize Cumulative Layout Shift (CLS).
