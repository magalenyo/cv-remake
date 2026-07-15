import type { ReactNode } from 'react'
import type { ModuleId } from '../../types/modules'

type ModulePanelProps = {
  id: ModuleId
  expanded: boolean
  children: ReactNode
}

export function ModulePanel({ id, expanded, children }: ModulePanelProps) {
  return (
    <div
      id={`module-${id}`}
      className={`module-content border border-primary-container bg-black/40 p-6 md:p-8 ${
        expanded ? 'expanded' : ''
      }`}
    >
      {children}
    </div>
  )
}
