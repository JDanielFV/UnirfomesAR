## YYYY-MM-DD - [Title]
**Learning:** React mapping over arrays (like images in a gallery) using only array index as key can cause re-rendering bugs, and `loading="lazy"` on image maps within a scrollable modal helps defer fetching and prevents blocking the main thread initially.
**Action:** Always use composite keys (e.g. `${img}-${idx}`) for mapped items in React, and add `loading="lazy"` to off-screen images within scrollable containers like modals.
