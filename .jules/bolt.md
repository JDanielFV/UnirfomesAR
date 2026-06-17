## 2025-02-12 - IntersectionObserver with React.lazy
**Learning:** Unconditional React.lazy in App.jsx triggers immediate network requests, blocking the main thread. We must conditionally render using IntersectionObserver and individual Suspense boundaries.
**Action:** Always conditionally render React.lazy components using an IntersectionObserver wrapper and apply an estimated minHeight prop to prevent Cumulative Layout Shift (CLS).
