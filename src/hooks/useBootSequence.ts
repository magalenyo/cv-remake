import { useEffect, useState } from 'react'
import { bootSequence, identityData } from '../data/siteContent'

export type BootPhase =
  | 'idle'
  | 'identity'
  | 'boot'
  | 'welcome'
  | 'complete'

async function typeInto(
  text: string,
  onUpdate: (value: string) => void,
  speed: number,
) {
  let current = ''
  onUpdate('')

  for (const char of text) {
    current += char
    onUpdate(current)
    await new Promise((resolve) => window.setTimeout(resolve, speed))
  }
}

export function useBootSequence(autoStart = true) {
  // Check if we've already booted in this session
  const hasBooted = sessionStorage.getItem('muthur_booted') === 'true'

  const [phase, setPhase] = useState<BootPhase>(hasBooted ? 'complete' : 'idle')
  const [name, setName] = useState(hasBooted ? identityData.name : '')
  const [subtitle, setSubtitle] = useState(hasBooted ? identityData.subtitle : '')
  const [bootLines, setBootLines] = useState<string[]>([])
  const [bootVisible, setBootVisible] = useState(!hasBooted)
  const [welcomeVisible, setWelcomeVisible] = useState(false)
  const [showNameCursor, setShowNameCursor] = useState(!hasBooted)

  useEffect(() => {
    if (!autoStart || hasBooted) {
      return
    }

    let cancelled = false

    const run = async () => {
      setPhase('identity')
      await typeInto(identityData.name, setName, 40)

      if (cancelled) {
        return
      }

      setShowNameCursor(true)
      await new Promise((resolve) => window.setTimeout(resolve, 200))
      await typeInto(identityData.subtitle, setSubtitle, 20)

      if (cancelled) {
        return
      }

      await new Promise((resolve) => window.setTimeout(resolve, 400))
      setPhase('boot')

      for (const line of bootSequence) {
        if (cancelled) {
          return
        }

        let currentLine = ''
        setBootLines((lines) => [...lines, ''])

        const speed = Math.random() * 10 + 5
        for (const char of line) {
          if (cancelled) {
            return
          }

          currentLine += char
          const snapshot = currentLine
          setBootLines((lines) => {
            const next = [...lines]
            next[next.length - 1] = snapshot
            return next
          })
          await new Promise((resolve) => window.setTimeout(resolve, speed))
        }

        await new Promise((resolve) => window.setTimeout(resolve, 30))
      }

      if (cancelled) {
        return
      }

      await new Promise((resolve) => window.setTimeout(resolve, 800))
      setBootVisible(false)

      await new Promise((resolve) => window.setTimeout(resolve, 600))
      setPhase('welcome')
      setWelcomeVisible(true)

      await new Promise((resolve) => window.setTimeout(resolve, 1200))
      setWelcomeVisible(false)

      await new Promise((resolve) => window.setTimeout(resolve, 400))
      setPhase('complete')
      sessionStorage.setItem('muthur_booted', 'true')
    }

    const timer = window.setTimeout(() => {
      void run()
    }, 500)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [autoStart])

  return {
    phase,
    name,
    subtitle,
    bootLines,
    bootVisible,
    welcomeVisible,
    showNameCursor,
    isComplete: phase === 'complete',
    showIdentity: phase !== 'idle',
    identityReveal: phase === 'complete',
    showInterface: phase === 'complete',
    showChrome: phase === 'complete',
  }
}
