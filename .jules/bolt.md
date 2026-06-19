
## 2025-02-05 - CLS Regression on Lazy Loaded Wrapper Containers
**Learning:** When using lazy loading placeholders or wrappers (like `LazySection`) with `IntersectionObserver` and `React.lazy`, providing an estimated `minHeight` prop to the fallback container is critical to prevent a severe Cumulative Layout Shift (CLS) regression when the element eventually enters the viewport. Removing this `minHeight` immediately upon intersection prematurely collapses the container to 0px while waiting for the network fetch triggered by `Suspense`, negatively affecting performance metrics.
**Action:** Always maintain the `minHeight` permanently or conditionally wait until the child component has fully rendered before removing it when implementing lazy loading wrappers.
