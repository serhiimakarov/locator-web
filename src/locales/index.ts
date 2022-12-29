// Common locales
import en from './en.json' assert {type: 'json'}
import uk from './uk.json' assert {type: 'json'}

import { LocaleMessages, LocaleProvider } from '@/providers/LocaleProvider'

// Locale messages
let localeMessages: LocaleMessages = {
  'en': en,
  'uk': uk
}

LocaleProvider.registerLocaleMessages(localeMessages)

export default LocaleProvider.localeMessages
