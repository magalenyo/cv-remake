import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

console.warn(
  '%c[MU/TH/UR 6000] WARNING',
  'color: #ff8f00; font-weight: bold; font-size: 13px;',
  'Unexpected user detected attempting to peek behind the terminal.',
  '\nBiometric trace logged. If you’re hiring — say hi. Otherwise, carry on. 👀',
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
