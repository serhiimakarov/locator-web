// Common locales
const en: DefineLocaleMessage = require('./en.json')
const uk: DefineLocaleMessage = require('./uk.json')

import { LocaleProvider } from '@/providers/LocaleProvider'
import { DefineLocaleMessage } from 'vue-i18n'
import { LocaleMessages } from 'vuetify/lib/framework.mjs'

// Locale messages
let localeMessages: DefineLocaleMessage = {
  'en': en,
  'uk': uk
}

LocaleProvider.registerLocaleMessages(localeMessages)

export default LocaleProvider.localeMessages
