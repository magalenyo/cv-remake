import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

function scrollToTop() {
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export function ScrollToTop() {
  const location = useLocation()

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual'
    
    // Only auto-scroll to top if we are NOT navigating to the home page with a specific module to open
    // The home page handles its own scrolling when opening a module
    const state = location.state as { openModule?: string } | null
    if (location.pathname === '/' && state?.openModule) {
      return
    }

    scrollToTop()

    // Mobile browsers often delay scroll restoration or layout calculations
    const t1 = setTimeout(scrollToTop, 10)
    const t2 = setTimeout(scrollToTop, 50)
    const t3 = setTimeout(scrollToTop, 100)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [location.pathname, location.key, location.state])

  return null
}
