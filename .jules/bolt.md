## 2024-06-18 - Prevent CLS in IntersectionObserver Lazy Loading
**Learning:** Removing `minHeight` dynamically before the Suspense network fetch finishes collapses the container and causes severe CLS.
**Action:** Maintain the `minHeight` permanently or until the child component is fully rendered.
