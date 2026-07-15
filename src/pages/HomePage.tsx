import { useEffect, type ComponentType } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BootSequence } from '../components/boot/BootSequence'
import { IdentityHeader } from '../components/boot/IdentityHeader'
import { WelcomeMessage } from '../components/boot/WelcomeMessage'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { DiagnosticFeed } from '../components/modules/DiagnosticFeed'
import { IdentityModule } from '../components/modules/IdentityModule'
import { ModulePanel } from '../components/modules/ModulePanel'
import { ProjectsModule } from '../components/modules/ProjectsModule'
import { UplinkModule } from '../components/modules/UplinkModule'
import { ModuleNavigation } from '../components/navigation/ModuleNavigation'
import { useBootSequence } from '../hooks/useBootSequence'
import { useModuleToggle } from '../hooks/useModuleToggle'
import type { ModuleId } from '../types/modules'

const moduleViews: Record<ModuleId, ComponentType> = {
  ROOT_PROJECTS: ProjectsModule,
  IDENT_MANIFEST: IdentityModule,
  CORE_UPLINK: UplinkModule,
}

export function HomePage() {
  const location = useLocation()
  const navigate = useNavigate()
  const boot = useBootSequence()
  const { activeModule, toggleModule, openModule } = useModuleToggle()

  useEffect(() => {
    const module = (location.state as { openModule?: ModuleId } | null)?.openModule
    if (!module || !boot.showInterface) return

    openModule(module)
    navigate(location.pathname, { replace: true, state: null })
  }, [location.state, boot.showInterface, openModule, navigate, location.pathname])

  const ActiveModuleView = activeModule ? moduleViews[activeModule] : null

  return (
    <>
      <SiteHeader visible={boot.showChrome} onToggleModule={toggleModule} />

      <main
        className="relative z-20 flex min-h-screen w-full flex-col items-center px-4 py-20 md:px-8 lg:px-12 transition-all duration-[1200ms]"
      >
        <div className="my-auto flex w-full flex-col items-center">
          <div className="flex w-full flex-col items-center justify-center transition-all duration-700">
            <IdentityHeader
              visible={boot.showIdentity}
              reveal={boot.identityReveal}
              name={boot.name}
              subtitle={boot.subtitle}
              showNameCursor={boot.showNameCursor}
            />

            {!boot.isComplete && (
              <>
                <BootSequence lines={boot.bootLines} visible={boot.bootVisible} />
                <WelcomeMessage visible={boot.welcomeVisible} />
              </>
            )}
          </div>

        <div
          className={`mt-0 flex w-full max-w-6xl flex-col items-center transition-opacity duration-1000 ${
            boot.showInterface ? 'opacity-100' : 'pointer-events-none hidden opacity-0'
          }`}
        >
            <ModuleNavigation activeModule={activeModule} onToggleModule={toggleModule} />

            <div className="w-full">
              {activeModule && ActiveModuleView ? (
                <ModulePanel id={activeModule}>
                  <ActiveModuleView />
                </ModulePanel>
              ) : null}
            </div>

            <DiagnosticFeed />
          </div>
        </div>
      </main>

      <SiteFooter visible={boot.showChrome} />
    </>
  )
}
