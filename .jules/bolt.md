## 2024-11-26 - [Lazy Loading Modal Images]
**Learning:** Adding native lazy loading to images inside modals, especially when they aren't rendered in the initial viewport or map to a large amount of items, prevents unnecessary and massive initial network payloads. Modal galleries only need to fetch their images when the user actively triggers the modal.
**Action:** Always implement `loading="lazy"` on image tags mapped out in galleries, specifically if they exist in hidden or conditionally rendered UI components like Modals.
