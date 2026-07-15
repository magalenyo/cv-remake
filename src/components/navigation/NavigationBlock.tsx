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
  const [labelStart, labelEnd] = splitModuleLabel(label)

  return (
    <button
      type="button"
      id={`btn-${id}`}
      className={`navigation-block group flex h-full w-full min-w-0 ${active ? 'active' : ''}`}
      onClick={() => onToggle(id)}
    >
      <div className="flex w-full flex-col items-center justify-center gap-2 py-3 sm:gap-4 sm:py-4">
        <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl">{icon}</span>
        <span className="w-full px-1 text-center text-[9px] font-bold leading-tight tracking-[0.08em] sm:text-base sm:tracking-widest md:text-lg">
          <span className="block sm:inline">[{labelStart}</span>
          <span className="block sm:inline">{labelEnd}]</span>
        </span>
        <p className="hidden text-center text-[10px] leading-tight opacity-60 sm:block">
          {descriptionLines[0]}
          <br />
          {descriptionLines[1]}
        </p>
      </div>
    </button>
  )
}

function splitModuleLabel(label: string): [string, string] {
  const splitIndex = label.indexOf('_')
  if (splitIndex === -1) return [label, '']

  return [label.slice(0, splitIndex + 1), label.slice(splitIndex + 1)]
}
