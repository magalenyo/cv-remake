import { Routes, Route } from 'react-router-dom'
import { CrtOverlay } from './components/layout/CrtOverlay'
import { ScrollToTop } from './components/layout/ScrollToTop'
// import { ThemeSwitcher } from './components/shared/ThemeSwitcher'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'

function App() {
  return (
    <div className="min-h-screen font-code text-primary-container selection:bg-primary-container selection:text-black">
      <ScrollToTop />
      <CrtOverlay />
      {/* <ThemeSwitcher /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </div>
  )
}

export default App
