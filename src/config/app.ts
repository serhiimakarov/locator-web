import { ModuleProviderInterface } from '@/providers/ModuleProviderInterface'
import { AuthModuleProvider } from '../modules/Auth/AuthModuleProvider'

export const moduleProviders: ModuleProviderInterface[] = [
  new AuthModuleProvider,
]
