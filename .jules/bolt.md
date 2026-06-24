## 2024-06-24 - CLS with React Suspense and IntersectionObserver

**Learning:** When implementing lazy loading wrappers (like `LazySection`) with `IntersectionObserver` and `React.lazy`, dynamically changing the wrapper's `minHeight` to 'auto' immediately upon intersection causes a severe Cumulative Layout Shift (CLS) regression. The network fetch triggered by `Suspense` takes time, and removing the minimum height prematurely collapses the container to 0px while waiting for the component to load.

**Action:** Maintain the `minHeight` on the container permanently or until the child component has fully rendered to prevent layout shifts during the network request.
