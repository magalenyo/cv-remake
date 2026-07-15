import type { ModuleId } from '../../types/modules'

type SiteHeaderProps = {
  visible: boolean
  onToggleModule: (id: ModuleId) => void
}

export function SiteHeader({ visible, onToggleModule }: SiteHeaderProps) {
  return (
    <nav
      className={`fixed top-0 left-0 z-40 flex w-full items-center justify-between border-b border-primary-container bg-black/90 px-4 py-4 backdrop-blur-sm transition-opacity duration-1000 md:px-margin-desktop ${
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="font-headline-md text-xl font-bold uppercase tracking-tighter text-primary-container md:text-headline-md">
        MU/TH/UR 6000
      </div>

      <div className="hidden gap-8 lg:flex">
        {(['ROOT_PROJECTS', 'IDENT_MANIFEST', 'CORE_UPLINK'] as const).map((id) => (
          <button
            key={id}
            type="button"
            className="px-2 py-1 font-body-sm uppercase tracking-widest text-primary-container transition-colors hover:bg-primary-container hover:text-black"
            onClick={() => onToggleModule(id)}
          >
            [{id}]
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-primary-container">terminal</span>
        <span className="material-symbols-outlined hidden text-primary-container sm:inline">
          security
        </span>
      </div>
    </nav>
  )
}
