type BootSequenceProps = {
  lines: string[]
  visible: boolean
}

export function BootSequence({ lines, visible }: BootSequenceProps) {
  if (!visible && lines.length === 0) {
    return null
  }

  return (
    <div
      className={`max-w-xl w-full space-y-1 px-4 text-primary-container transition-opacity duration-600 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {lines.map((line, index) => (
        <p key={`${index}-${line.slice(0, 12)}`} className="terminal-line">
          {line}
        </p>
      ))}
    </div>
  )
}
