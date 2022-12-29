/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from './pinia'
import { bootModules } from './modules'
import { i18n } from './i18n'
import router from '../router'

// Types
import type { App } from 'vue'
import { LocaleProvider } from '@/providers/LocaleProvider'

export function registerPlugins (app: App) {
  loadFonts()
  bootModules()

  app
    .use(vuetify)
    .use(i18n)
    .use(pinia)
    .use(router)
}
