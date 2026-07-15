import { useCallback, useState } from 'react'
import type { ModuleId } from '../types/modules'
import { MODULE_IDS } from '../types/modules'

const HEADER_OFFSET = 80

function scrollToModule(id: ModuleId) {
  // Use a small timeout to let the DOM update and the panel expand
  window.setTimeout(() => {
    const module = document.getElementById(`module-${id}`)
    if (module) {
      const top = module.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
    }
  }, 50)
}

export function useModuleToggle() {
  const [activeModule, setActiveModule] = useState<ModuleId | null>(null)

  const toggleModule = useCallback((id: ModuleId) => {
    setActiveModule((current) => {
      const next = current === id ? null : id

      if (next) {
        scrollToModule(next)
      }

      return next
    })
  }, [])

  const openModule = useCallback((id: ModuleId) => {
    setActiveModule(id)
    scrollToModule(id)
  }, [])

  const isExpanded = useCallback(
    (id: ModuleId) => activeModule === id,
    [activeModule],
  )

  return {
    activeModule,
    toggleModule,
    openModule,
    isExpanded,
    moduleIds: MODULE_IDS,
  }
}
