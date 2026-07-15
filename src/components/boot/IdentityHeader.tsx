type IdentityHeaderProps = {
  visible: boolean
  reveal: boolean
  name: string
  subtitle: string
  showNameCursor: boolean
}

export function IdentityHeader({
  visible,
  reveal,
  name,
  subtitle,
  showNameCursor,
}: IdentityHeaderProps) {
  return (
    <div
      className={`mb-8 space-y-4 text-center transition-all duration-1000 ease-in-out md:mb-12 ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${reveal ? `identity-reveal ${visible ? 'flicker' : ''}` : ''}`}
    >
      <h1 className="font-headline-lg text-2xl uppercase tracking-[0.1em] text-primary-container md:text-headline-lg md:tracking-[0.2em]">
        {name}
        {showNameCursor ? <span aria-hidden="true" className="cursor-blink" /> : null}
      </h1>
      <p className="mx-auto max-w-xs font-label-caps text-[10px] uppercase leading-relaxed tracking-[0.2em] text-primary-container opacity-80 md:max-w-none md:text-label-caps md:tracking-[0.4em]">
        {subtitle}
      </p>
    </div>
  )
}
