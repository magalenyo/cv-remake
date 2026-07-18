import { uplinkChannels } from '../../data/modulesContent'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.762 2.239 5 5 5h14c2.761 0 5-2.238 5-5V5c0-2.761-2.239-5-5-5zm-11 19H3v-9h5v9zM5.5 8.5C4.121 8.5 3 7.379 3 6s1.121-2.5 2.5-2.5S8 4.621 8 6s-1.121 2.5-2.5 2.5zm13.5 10.5h-5v-4.5c0-1.21-.49-2.53-2.12-2.53-1.15 0-1.86.79-2.17 1.55-.11.27-.14.65-.14 1.03V19h-5V9h5v1.45c.66-1 1.84-2.21 4.24-2.21 3.1 0 5.45 2.02 5.45 5.36V19z" />
    </svg>
  )
}

const uplinkIconBoxClass =
  'inline-flex size-6 shrink-0 items-center justify-center md:size-[1.875rem]'

function UplinkLink({
  href,
  icon,
  brand,
  label,
  trailingIcon,
  multiline = false,
  download = false,
}: {
  href: string
  icon?: string
  brand?: 'linkedin'
  label: string
  trailingIcon: string
  multiline?: boolean
  download?: boolean
}) {
  return (
    <a
      className="group flex items-center justify-between border border-primary-container/30 p-4 text-primary-container transition-all hover:bg-primary-container hover:text-black md:p-6"
      href={href}
      rel="noreferrer"
      target="_blank"
      download={download ? '' : undefined}
    >
      <div className="flex items-center gap-4">
        <div className={uplinkIconBoxClass}>
          {brand === 'linkedin' ? (
            <LinkedInIcon className="h-full w-full" />
          ) : (
            <span className="material-symbols-outlined text-2xl leading-none md:text-3xl">{icon}</span>
          )}
        </div>
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
            brand={channel.brand}
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
