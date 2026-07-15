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

export function HomePage() {
  const boot = useBootSequence()
  const { activeModule, toggleModule, isExpanded } = useModuleToggle()

  return (
    <>
      <SiteHeader visible={boot.showChrome} onToggleModule={toggleModule} />

      <main
        className={`relative z-20 flex min-h-screen flex-col items-center px-4 py-20 md:px-8 lg:px-12 transition-all duration-[1200ms] ${
          boot.isComplete ? 'justify-start' : 'justify-center'
        }`}
      >
        <div className="flex w-full flex-col items-center justify-center transition-all duration-700">
          <IdentityHeader
            visible={boot.showIdentity}
            reveal={boot.identityReveal}
            name={boot.name}
            subtitle={boot.subtitle}
            showNameCursor={boot.showNameCursor}
          />

          <BootSequence lines={boot.bootLines} visible={boot.bootVisible} />
          <WelcomeMessage visible={boot.welcomeVisible} />
        </div>

        <div
          className={`mt-0 flex w-full max-w-7xl flex-col items-center transition-opacity duration-1000 ${
            boot.showInterface ? 'opacity-100' : 'pointer-events-none hidden opacity-0'
          }`}
        >
          <ModuleNavigation activeModule={activeModule} onToggleModule={toggleModule} />

          <div className="w-full space-y-8">
            <ModulePanel id="ROOT_PROJECTS" expanded={isExpanded('ROOT_PROJECTS')}>
              <ProjectsModule />
            </ModulePanel>

            <ModulePanel id="IDENT_MANIFEST" expanded={isExpanded('IDENT_MANIFEST')}>
              <IdentityModule />
            </ModulePanel>

            <ModulePanel id="CORE_UPLINK" expanded={isExpanded('CORE_UPLINK')}>
              <UplinkModule />
            </ModulePanel>
          </div>

          <DiagnosticFeed />
        </div>
      </main>

      <SiteFooter visible={boot.showChrome} />
    </>
  )
}
