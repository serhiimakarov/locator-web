import { LocaleMessages, LocaleProvider } from "./LocaleProvider";
import { ModuleProviderInterface } from "./ModuleProviderInterface";

export abstract class ModuleProvider implements ModuleProviderInterface
{
  protected abstract name: string
  protected abstract localeMessages: LocaleMessages

  public boot(): void
  {
    LocaleProvider.registerModuleLocaleMessages(this.name, this.localeMessages)
  }
}
