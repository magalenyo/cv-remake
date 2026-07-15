import type { ModuleId } from '../../types/modules'

type NavigationBlockProps = {
  id: ModuleId
  icon: string
  label: string
  descriptionLines: [string, string]
  active: boolean
  onToggle: (id: ModuleId) => void
}

export function NavigationBlock({
  id,
  icon,
  label,
  descriptionLines,
  active,
  onToggle,
}: NavigationBlockProps) {
  return (
    <button
      type="button"
      id={`btn-${id}`}
      className={`navigation-block group w-full ${active ? 'active' : ''}`}
      onClick={() => onToggle(id)}
    >
      <div className="flex flex-col items-center gap-4 py-4">
        <span className="material-symbols-outlined text-3xl md:text-4xl">{icon}</span>
        <span className="text-base font-bold tracking-widest md:text-lg">[{label}]</span>
        <p className="text-center text-[10px] leading-tight opacity-60">
          {descriptionLines[0]}
          <br />
          {descriptionLines[1]}
        </p>
      </div>
    </button>
  )
}
