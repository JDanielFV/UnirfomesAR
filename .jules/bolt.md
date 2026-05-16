## 2024-05-16 - Lazy Load Below-the-Fold Components in SPA
**Learning:** The application's single-page architecture was creating a monolithic bundle by synchronously loading all off-screen sections (Productos, Servicios, Contacto, Footer) at once, degrading initial Time to Interactive (TTI).
**Action:** Use `React.lazy()` and `<Suspense fallback={null}>` for below-the-fold components to defer loading and reduce the initial bundle size.
