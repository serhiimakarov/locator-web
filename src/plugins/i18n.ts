import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
import { LocaleProvider } from '@/providers/LocaleProvider'

const messages = LocaleProvider.localeMessages

export const i18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'uk',
  fallbackLocale: 'en',
  messages,
})

export const locale = {
  adapter: createVueI18nAdapter({ i18n, useI18n })
}
