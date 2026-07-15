import { useCallback, useState } from 'react'
import type { ModuleId } from '../types/modules'
import { MODULE_IDS } from '../types/modules'

export function useModuleToggle() {
  const [activeModule, setActiveModule] = useState<ModuleId | null>(null)

  const toggleModule = useCallback((id: ModuleId) => {
    setActiveModule((current) => {
      const next = current === id ? null : id

      if (next) {
        window.requestAnimationFrame(() => {
          document.getElementById(`module-${id}`)?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        })
      }

      return next
    })
  }, [])

  const isExpanded = useCallback(
    (id: ModuleId) => activeModule === id,
    [activeModule],
  )

  return {
    activeModule,
    toggleModule,
    isExpanded,
    moduleIds: MODULE_IDS,
  }
}
