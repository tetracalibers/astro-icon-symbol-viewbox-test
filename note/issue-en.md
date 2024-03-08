## Rendering Issue with Adjusted viewBox SVGs in astro-icon v1.1.0

### Issue Summary

SVG icons adjusted with tools like [SVG Crop](https://svgcrop.com/) are partially missing when rendered using astro-icon v1.1.0. 

- [demo: sample site](https://tetracalibers.github.io/astro-icon-symbol-viewbox-test)
- [demo: GitHub](https://github.com/tetracalibers/astro-icon-symbol-viewbox-test)

### Proposed Solution

Removing the `viewBox` from `svg` elements and assigning it to the `symbol` element resolves the issue:

```html
<!-- Removed viewBox from svg element -->
<svg width="100" height="100" data-icon="astro-cropped">
  <!-- Instead, a viewBox is specified for the symbol element -->
  <symbol id="ai:local:astro-cropped" viewBox="4.93 2 22.15 28">
    <!-- ... -->
  </symbol>
  <use xlink:href="#ai:local:astro-cropped"></use>
</svg>

<!-- Removed viewBox from svg element -->
<svg width="100" height="100" data-icon="astro-cropped">
  <use xlink:href="#ai:local:astro-cropped"></use>
</svg>
```

### Temporary workarounds

- **Inline Icon Component**: Adding `is:inline` to the Icon component.
  - [demo: sample site](https://tetracalibers.github.io/astro-icon-symbol-viewbox-test/is-inline)
  - [demo: source code](https://tetracalibers.github.io/astro-icon-symbol-viewbox-test/is-inline/src/pages/is-inline.astro)

- **CSS Fix**: Adding `overflow: visible` to the symbol tag. 
  - [demo: sample site](https://tetracalibers.github.io/astro-icon-symbol-viewbox-test/symbol-overflow-visible)
  - [demo: source code](https://tetracalibers.github.io/astro-icon-symbol-viewbox-test/is-inline/src/pages/symbol-overflow-visible.astro)
