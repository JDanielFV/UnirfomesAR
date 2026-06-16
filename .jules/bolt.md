
## 2025-02-12 - Deferring Code-Splitting Fetches with IntersectionObserver
**Learning:** While `React.lazy` and `Suspense` can split bundles for below-the-fold components, unconditional rendering triggers immediate network fetches, blocking critical resources and reducing the benefit of code splitting.
**Action:** When splitting below-the-fold components, conditionally render them using an `IntersectionObserver` wrapper (like `LazySection`) inside individual `<Suspense>` boundaries. Ensure the wrapper has a `minHeight` applied to avoid Cumulative Layout Shift (CLS) when the component eventually loads.
