## 2024-06-08 - Lazy Loading Cumulative Layout Shift (CLS) Prevention

**Learning:** When using an IntersectionObserver-based wrapper (like `LazySection`) alongside React `Suspense` for lazy-loaded components, dynamically changing the wrapper's `minHeight` to 'auto' or removing it immediately upon intersection causes a severe CLS regression. The network fetch triggered by `Suspense` is not instantaneous; without the minimum height, the container briefly collapses to 0px while the lazy component loads, shifting the entire page content.

**Action:** Always maintain the placeholder `minHeight` permanently (or until the child component signals it has fully rendered) on the wrapper element to preserve the vertical space required by the deferred component.
