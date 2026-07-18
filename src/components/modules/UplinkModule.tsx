import { uplinkChannels } from '../../data/modulesContent'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 34"
      aria-hidden="true"
      role="img"
      className={className}
    >
      <path
        fill="#0a66c2"
        d="M34 2.5v29a2.5 2.5 0 0 1-2.5 2.5h-29A2.5 2.5 0 0 1 0 31.5v-29A2.5 2.5 0 0 1 2.5 0h29A2.5 2.5 0 0 1 34 2.5M10 13H5v16h5zm.45-5.5a2.88 2.88 0 0 0-2.86-2.9H7.5a2.9 2.9 0 0 0 0 5.8 2.88 2.88 0 0 0 2.95-2.81zM29 19.28c0-4.81-3.06-6.68-6.1-6.68a5.7 5.7 0 0 0-5.06 2.58h-.14V13H13v16h5v-8.51a3.32 3.32 0 0 1 3-3.58h.19c1.59 0 2.77 1 2.77 3.52V29h5z"
      />
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
