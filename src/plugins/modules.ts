import { ModuleProviderInterface } from '@/providers/ModuleProviderInterface'
import { moduleProviders } from '../config/app'

export function bootModules () {
  moduleProviders.forEach((moduleProvider: ModuleProviderInterface) => {
    moduleProvider.boot()
  })
}
