## 2026-04-23 - Lazy loading in Modals
**Learning:** Native browser lazy loading is optimal for image-heavy components hidden within interactive elements like modals to prevent massive unnecessary network requests until they are opened and scrolled.
**Action:** Always use `loading="lazy"` for gallery images inside modals to improve initial load time and network efficiency.
