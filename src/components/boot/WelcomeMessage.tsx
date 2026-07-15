type WelcomeMessageProps = {
  visible: boolean
}

export function WelcomeMessage({ visible }: WelcomeMessageProps) {
  return (
    <div
      className={`mt-8 font-bold uppercase tracking-[0.3em] text-primary-container transition-opacity duration-500 md:tracking-[0.5em] ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      &gt; WELCOME, OFFICER.
    </div>
  )
}
