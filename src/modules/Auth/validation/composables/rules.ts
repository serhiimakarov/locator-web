import { useLocale } from 'vuetify'

export function useRules () {
  // Get a translation function
  const { t } = useLocale()

  const rules = {
    email: [
      (v: string) => !!v || t('Auth.validation.email.required'),
      (v: string) => /.+@.+\..+/.test(v) || t('Auth.validation.email.invalid'),
    ],

    password: [
      (v: string) => !!v || t('Auth.validation.password.required'),
    ]
  }

  return {
    rules
  }
}
