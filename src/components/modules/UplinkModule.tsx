import { uplinkChannels } from '../../data/modulesContent'

function resolveMediaUrl(url: string) {
  return url.startsWith('http') ? url : import.meta.env.BASE_URL + url
}

function UplinkLink({
  href,
  icon,
  iconSrc,
  label,
  trailingIcon,
  multiline = false,
  download = false,
}: {
  href: string
  icon?: string
  iconSrc?: string
  label: string
  trailingIcon: string
  multiline?: boolean
  download?: boolean
}) {
  return (
    <a
      className="group flex items-center justify-between border border-primary-container/30 p-4 transition-all hover:bg-primary-container hover:text-black md:p-6"
      href={href}
      rel="noreferrer"
      target="_blank"
      download={download ? '' : undefined}
    >
      <div className="flex items-center gap-4">
        {iconSrc ? (
          <img
            src={resolveMediaUrl(iconSrc)}
            alt=""
            aria-hidden="true"
            className="h-7 w-7 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 md:h-8 md:w-8"
          />
        ) : (
          <span className="material-symbols-outlined text-2xl md:text-3xl">{icon}</span>
        )}
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
        LINK_MANIFEST
        <span aria-hidden="true" className="cursor-blink" />
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {uplinkChannels.map((channel) => (
          <UplinkLink
            key={channel.label}
            href={channel.href ?? '#'}
            icon={channel.icon}
            iconSrc={channel.iconSrc}
            label={channel.label}
            multiline={channel.multiline}
            trailingIcon={channel.trailingIcon}
            download={channel.download}
          />
        ))}
      </div>
    </>
  )
}
