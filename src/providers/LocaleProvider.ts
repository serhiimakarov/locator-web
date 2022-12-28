import { LocaleMessage } from "@intlify/core-base";
import { VueMessageType } from "vue-i18n";

export interface LocaleMessages { [x: string]: LocaleMessage<VueMessageType> }

export class LocaleProvider {
  public static localeMessages: LocaleMessages = {
    en: {},
    uk: {}
  }

  public static registerModuleLocaleMessages(module: string, moduleLocaleMessages: LocaleMessages): void {
    Object.keys(moduleLocaleMessages).forEach(moduleLocale => {
      this.localeMessages[moduleLocale] = Object.assign(
        this.localeMessages.hasOwnProperty(moduleLocale)
          ? this.localeMessages[moduleLocale]
          : {},
        {
          [module]: moduleLocaleMessages[moduleLocale]
        }
      )
    })
  }

  public static registerLocaleMessages(moduleLocaleMessages: LocaleMessages): void {
    Object.keys(moduleLocaleMessages).forEach(moduleLocale => {
      this.localeMessages[moduleLocale] = Object.assign(
        this.localeMessages.hasOwnProperty(moduleLocale)
          ? this.localeMessages[moduleLocale]
          : {},
        moduleLocaleMessages[moduleLocale]
      )
    })
  }
}
