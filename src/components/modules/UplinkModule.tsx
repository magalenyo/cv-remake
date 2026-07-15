import { uplinkChannels } from '../../data/modulesContent'

function UplinkLink({
  href,
  icon,
  label,
  trailingIcon,
  multiline = false,
}: {
  href: string
  icon: string
  label: string
  trailingIcon: string
  multiline?: boolean
}) {
  return (
    <a
      className="group flex items-center justify-between border border-primary-container/30 p-4 transition-all hover:bg-primary-container hover:text-black md:p-6"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-2xl md:text-3xl">{icon}</span>
        <span className="text-left text-sm font-bold tracking-widest md:text-base">
          {multiline ? (
            <>
              FETCH
              <br className="hidden md:block" />
              CREDENTIALS
            </>
          ) : (
            label
          )}
        </span>
      </div>
      <span className="material-symbols-outlined opacity-0 transition-opacity group-hover:opacity-100">
        {trailingIcon}
      </span>
    </a>
  )
}

export function UplinkModule() {
  return (
    <>
      <h2 className="mb-8 border-b border-primary-container pb-2 text-xl font-bold uppercase tracking-[0.2em] md:text-2xl md:tracking-[0.3em]">
        COMMUNICATION_CHANNELS
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        {uplinkChannels.map((channel) => (
          <UplinkLink
            key={channel.label}
            href={channel.href ?? '#'}
            icon={channel.icon}
            label={channel.label}
            multiline={channel.multiline}
            trailingIcon={channel.trailingIcon}
          />
        ))}
      </div>
    </>
  )
}
