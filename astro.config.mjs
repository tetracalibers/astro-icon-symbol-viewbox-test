import { defineConfig } from 'astro/config'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],

  // for deploy
  site: 'https://tetracalibers.github.io',
  base: '/astro-icon-symbol-viewbox-test',
})
