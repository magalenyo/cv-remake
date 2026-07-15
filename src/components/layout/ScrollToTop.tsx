import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export function ScrollToTop() {
  const location = useLocation()

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
    scrollToTop()

    const frame = window.requestAnimationFrame(() => {
      scrollToTop()
    })

    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname, location.key])

  return null
}
