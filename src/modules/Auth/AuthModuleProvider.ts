import { ModuleProvider } from "@/providers/ModuleProvider";
import localeMessages from './locales/index'
import { LocaleMessages } from "@/providers/LocaleProvider";

export class AuthModuleProvider extends ModuleProvider
{
  /**
   * Module name
   * @property {string}
   */
  protected name: string = 'Auth'

  /**
   * Locale messges
   * @property {LocaleMessages}
   */
  protected localeMessages: LocaleMessages = localeMessages
}
