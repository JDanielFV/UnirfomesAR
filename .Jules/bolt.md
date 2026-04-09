## 2025-04-09 - Styled Components dynamic background images inline styles
**Learning:** For `styled-components` in this codebase (which makes heavy use of image backgrounds per card/container), injecting a dynamic background image URL into the template string like `` background-image: url(${props => props.bckgrnd}); `` generates a new CSS class for every single distinct image.
**Action:** Use `.attrs(props => ({ style: { backgroundImage: \`url(${props.bckgrnd})\` } }))` instead, which applies it as an inline style and avoids massive CSS bloat, stylesheet recalculations, and memory usage.
