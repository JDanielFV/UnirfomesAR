## 2024-07-03 - Lazy Loading Images in Modals
**Learning:** Images inside modals or carousels that are initially hidden or off-screen will still be fetched by the browser simultaneously with critical assets, blocking the main thread and slowing down initial page load, unless explicitly deferred.
**Action:** Always add `loading="lazy"` to `<img>` tags inside modals, carousels, and long lists to prevent them from competing for bandwidth during the initial render phase.
