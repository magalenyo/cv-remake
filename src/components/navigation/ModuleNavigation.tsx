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
    id: 'LINK_MANIFEST',
    icon: 'link',
    label: 'LINK_MANIFEST',
    descriptionLines: ['GITHUB · LINKEDIN · CV', 'CONTACT ENDPOINTS'],
  },
]

type ModuleNavigationProps = {
  activeModule: ModuleId | null
  onToggleModule: (id: ModuleId) => void
}

export function ModuleNavigation({ activeModule, onToggleModule }: ModuleNavigationProps) {
  return (
    <div className="mb-12 grid w-full grid-cols-3 items-stretch gap-2 sm:gap-4 md:gap-6">
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
