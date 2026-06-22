## 2026-06-22 - Lazy Loading Cumulative Layout Shift Risk
**Learning:** When implementing lazy loading wrappers (like `LazySection`) with `IntersectionObserver` and `React.lazy`, dynamically changing the wrapper's `minHeight` to 'auto' immediately upon intersection causes a severe Cumulative Layout Shift (CLS) regression because the network fetch triggered by `Suspense` takes time, collapsing the container to 0px.
**Action:** Maintain the `minHeight` permanently or until the child component has fully rendered, ensuring the fallback placeholder occupies the correct space.
