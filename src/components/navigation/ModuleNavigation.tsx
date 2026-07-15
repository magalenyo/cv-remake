import type { ModuleId } from '../../types/modules'
import { NavigationBlock } from './NavigationBlock'

const navigationItems: Array<{
  id: ModuleId
  icon: string
  label: ModuleId
  descriptionLines: [string, string]
}> = [
  {
    id: 'ROOT_PROJECTS',
    icon: 'folder_managed',
    label: 'ROOT_PROJECTS',
    descriptionLines: ['ARCHIVE ACCESS: 98%', 'ENCRYPTION: LEVEL 7'],
  },
  {
    id: 'IDENT_MANIFEST',
    icon: 'fingerprint',
    label: 'IDENT_MANIFEST',
    descriptionLines: ['BIOMETRIC LOGS', 'PERSONNEL FILE 2122-A'],
  },
  {
    id: 'CORE_UPLINK',
    icon: 'leak_add',
    label: 'CORE_UPLINK',
    descriptionLines: ['DATA STREAM: ACTIVE', 'SATELLITE SYNC: OK'],
  },
]

type ModuleNavigationProps = {
  activeModule: ModuleId | null
  onToggleModule: (id: ModuleId) => void
}

export function ModuleNavigation({ activeModule, onToggleModule }: ModuleNavigationProps) {
  return (
    <div className="mb-12 grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
      {navigationItems.map((item) => (
        <NavigationBlock
          key={item.id}
          id={item.id}
          icon={item.icon}
          label={item.label}
          descriptionLines={item.descriptionLines}
          active={activeModule === item.id}
          onToggle={onToggleModule}
        />
      ))}
    </div>
  )
}
