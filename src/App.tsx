import { CrtOverlay } from './components/layout/CrtOverlay'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen font-code text-primary-container selection:bg-primary-container selection:text-black">
      <CrtOverlay />
      <HomePage />
    </div>
  )
}

export default App
