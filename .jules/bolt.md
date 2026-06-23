## 2025-02-12 - Prevent CLS in lazy loading wrappers

**Learning:** When creating intersection observer wrappers (like `LazySection`) for component chunking to defer rendering off-screen sections, failing to provide a persistent or adequately sized placeholder fallback triggers a layout shift when components are ultimately hydrated via React Suspense and rendered out of order. Furthermore, we must not place an intersection observer wrapper immediately around sections having `id` tags without keeping the `id` mounted; otherwise, direct anchor links to that section fail because the anchor isn't available in the DOM when navigating.

**Action:** Whenever introducing lazy chunking with IntersectionObserver in a long scrolling layout, implement a robust fallback by supplying estimated `minHeight` values, and crucially ensure the target wrapper lives INSIDE the structural container possessing the anchor id (e.g., `<section id="Productos"><LazySection>...</LazySection></section>`).
