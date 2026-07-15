import { useEffect, useState } from 'react'

const THEMES = [
  { id: 'default', name: 'Amber (Default)', class: '' },
  { id: 'scarlet', name: 'Scarlet (Lighter Red)', class: 'theme-scarlet' },
  { id: 'crimson', name: 'Crimson (Dark Red)', class: 'theme-crimson' },
  { id: 'emerald', name: 'Emerald (Matrix)', class: 'theme-emerald' },
  { id: 'cyan', name: 'Cyan (Sci-Fi)', class: 'theme-cyan' },
  { id: 'cobalt', name: 'Cobalt (Deep Blue)', class: 'theme-cobalt' },
  { id: 'amethyst', name: 'Amethyst (Purple)', class: 'theme-amethyst' },
]

export function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState(THEMES[0])

  useEffect(() => {
    // Remove all theme classes
    THEMES.forEach((t) => {
      if (t.class) document.documentElement.classList.remove(t.class)
    })
    
    // Add the active theme class
    if (activeTheme.class) {
      document.documentElement.classList.add(activeTheme.class)
    }
  }, [activeTheme])

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 rounded border border-primary-container bg-black/90 p-4 backdrop-blur-sm">
      <h3 className="font-label-caps text-[10px] uppercase tracking-widest text-primary-container">
        [THEME_TEST_PANEL]
      </h3>
      <div className="flex flex-col gap-1">
        {THEMES.map((theme) => (
          <button
            key={theme.id}
            type="button"
            onClick={() => setActiveTheme(theme)}
            className={`text-left font-code text-xs transition-colors ${
              activeTheme.id === theme.id
                ? 'font-bold text-primary-container'
                : 'text-primary-container/50 hover:text-primary-container/80'
            }`}
          >
            {activeTheme.id === theme.id ? '> ' : '  '}
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  )
}
