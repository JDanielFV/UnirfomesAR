## YYYY-MM-DD - [Title]
**Learning:** React mapping over elements requires distinct keys for efficiency; also images inside modals or lists out of the viewport block main thread if not lazy-loaded.
**Action:** Always add loading="lazy" for off-screen image galleries and composite keys (e.g. `${img}-${idx}`) for rendering mapped items to avoid duplicate keys warning and render bugs.
