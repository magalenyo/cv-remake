import { useState, type ReactNode } from 'react'

function CollapsibleSection({ title, children }: { title: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="pt-8">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between border-b border-primary-container/30 pb-2 text-left font-code text-lg font-bold uppercase tracking-widest text-primary-container transition-colors hover:bg-primary-container/10"
      >
        <span>[{title}]</span>
        <span className="material-symbols-outlined transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          expand_more
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-6 space-y-6">{children}</div>
        </div>
      </div>
    </div>
  )
}

export function IdentityModule() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="border-b border-primary-container pb-2 text-xl font-bold uppercase tracking-[0.2em] md:text-2xl md:tracking-[0.3em]">
        BIOMETRIC_PROFILE: 2122-A
        <span aria-hidden="true" className="cursor-blink" />
      </h2>

      <div className="flex flex-col items-start gap-8 md:flex-row">
        <div className="w-full flex-1 space-y-6">
          <div className="space-y-4">
            <div className="border-l-4 border-primary-container bg-primary-container/10 p-4 space-y-4">
              <p className="text-sm leading-relaxed md:text-base">
                I'm Miguel, a Computer Engineer based in Barcelona with 7+ years of experience building web applications. A Master's in AAA Game Programming from UPC still influences how I approach systems, performance, and craft.
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                I currently work as a Senior Full Stack Developer at Next Digital for Iberia Airlines, building POCs across AI, e-commerce, and cloud-based solutions. Throughout my career, I've been part of innovation and R&D teams, researching cutting-edge technologies, rapidly adapting to new tools, and helping integrate them across the wider team. I place a strong focus on quality, testability, and maintaining the highest engineering standards.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 font-label-caps text-xs sm:grid-cols-2 md:text-sm pt-4">
              <div className="space-y-1">
                <span className="opacity-50">LOCATION:</span>
                <div>BARCELONA, SPAIN</div>
              </div>
              <div className="space-y-1">
                <span className="opacity-50">ROLE:</span>
                <div>SENIOR FULL STACK DEVELOPER</div>
              </div>
              <div className="space-y-1">
                <span className="opacity-50">EXPERIENCE:</span>
                <div>7+ YEARS</div>
              </div>
              <div className="space-y-1">
                <span className="opacity-50">SPECIALTY:</span>
                <div>WEB & GAME DEV</div>
              </div>
            </div>

            <CollapsibleSection title="EXPERIENCE_LOG">
              <article className="border-l border-primary-container/30 pl-4">
                <div className="mb-1 font-label-caps text-[10px] uppercase opacity-50 md:text-xs">
                  September 2022 - Present
                </div>
                <h4 className="font-bold text-primary-container uppercase tracking-widest">Next Digital</h4>
                <div className="mb-2 font-label-caps text-xs uppercase opacity-80">Senior Full Stack Developer</div>
                <div className="mb-4 font-label-caps text-[10px] uppercase opacity-60 md:text-xs">
                  Next Digital Hub, Madrid (Remote)
                </div>
                <div className="space-y-4 text-xs leading-relaxed opacity-90 md:text-sm">
                  <p>
                    Working within Iberia Airlines' Innovation Team, leading and contributing to greenfield proof-of-concept projects across AI, e-commerce and cloud solutions. Own the full delivery lifecycle, from requirements and technology selection to architecture, development, testing, deployment and monitoring, using Java, Kotlin, React and Angular, as well as Python and NestJS services with REST, GraphQL and Model Context Protocol (MCP) integrations.
                  </p>
                  <ul className="space-y-1 border-l border-primary-container/30 pl-4">
                    <li>ChatGPT / Claude Apps (MCP servers)</li>
                    <li>AI-powered chatbots</li>
                    <li>E-commerce solutions</li>
                    <li>Event-driven AWS-based applications</li>
                    <li>Serverless AWS architectures</li>
                    <li>Dashboard creation and application monitoring</li>
                    <li>CMD applications with GO</li>
                    <li>Infrastructure creation with Terraform (IaC)</li>
                    <li>Mentor and onboard new team members, promoting clean code, testing best practices and engineering quality standards.</li>
                  </ul>
                  <p>
                    Focused on developing high-quality, thoroughly tested applications with clean and scalable architectures. Extensive experience across AWS cloud services — covering infrastructure, storage, and security aspects. Skilled in working with PostgreSQL and other relational databases, and experienced in CI/CD automation to ensure efficient, reliable, and maintainable delivery pipelines.
                  </p>
                </div>
              </article>

              <article className="border-l border-primary-container/30 pl-4">
                <div className="mb-1 font-label-caps text-[10px] uppercase opacity-50 md:text-xs">
                  September 2019 - July 2022
                </div>
                <h4 className="font-bold text-primary-container uppercase tracking-widest">NTT Data Europe & Latam</h4>
                <div className="mb-2 font-label-caps text-xs uppercase opacity-80">Full Stack Developer Analyst</div>
                <p className="text-xs leading-relaxed opacity-90 md:text-sm">
                  Contributed to multiple enterprise projects for major insurance clients, focusing on delivering robust, maintainable, and user-centric applications. Gained hands-on experience in full stack development, technical documentation, and small-scale project management.
                </p>
              </article>

              <article className="border-l border-primary-container/30 pl-4">
                <div className="mb-1 font-label-caps text-[10px] uppercase opacity-50 md:text-xs">
                  February 2019 - June 2019
                </div>
                <h4 className="font-bold text-primary-container uppercase tracking-widest">EUTI Software</h4>
                <div className="mb-2 font-label-caps text-xs uppercase opacity-80">Software Developer</div>
                <p className="text-xs leading-relaxed opacity-90 md:text-sm">
                  Development of a multi-platform application made in Xamarin.Forms (C#), published for Android and iOS Smartphones. Maintenance of a server made in Visual Basic .Net.
                </p>
              </article>
            </CollapsibleSection>

            <CollapsibleSection title="EDUCATION_LOG">
              <article className="border-l border-primary-container/30 pl-4">
                <div className="mb-1 font-label-caps text-[10px] uppercase opacity-50 md:text-xs">
                  October 2020 - November 2021
                </div>
                <h4 className="font-bold text-primary-container uppercase tracking-widest">Master's Degree in Advanced Programming for AAA Video Games</h4>
                <div className="mb-2 font-label-caps text-xs uppercase opacity-80">Universitat Politècnica de Catalunya (UPC), Barcelona</div>
                <div className="space-y-4 text-xs leading-relaxed opacity-90 md:text-sm">
                  <p>Grade with distinction — 10/10.</p>
                  <p>
                    Learned how to build a 3D game engine from scratch in C++, OpenGL, and GLSL. The program covered video game engine foundations and the full creation process from start to finish, organized as a real company with Art students to build our own engine and video game as a final project.
                  </p>
                  <ul className="space-y-1 border-l border-primary-container/30 pl-4">
                    <li>Development of a 3D game engine in C++ and OpenGL (Tesseract Engine)</li>
                    <li>Graphics: UI shaders, Dissolve shader (Simplex Noise Map), chromatic aberration, MSAA integration</li>
                    <li>UI components for scenes: 2D Transform, Text, Image, and others</li>
                    <li>Navigation module: Recast & Detour integration for NavMesh, NavAgent, and NavObstacle</li>
                    <li>Development of Shutdown, a 3D top-down shooter in C++ — game trailer and full gameplay release</li>
                    <li>Scene creation and management across main menu, levels, boss level, pause, and death screens</li>
                    <li>Final boss bullet-hell system, UI scripts, animations, and simple behavior scripts</li>
                    <li>Gameplay team lead in final sprints: team organization, developer management, and bug fixing</li>
                  </ul>
                </div>
              </article>

              <article className="border-l border-primary-container/30 pl-4">
                <div className="mb-1 font-label-caps text-[10px] uppercase opacity-50 md:text-xs">
                  2014 - 2019
                </div>
                <h4 className="font-bold text-primary-container uppercase tracking-widest">Bachelor's Degree in Computer Engineering</h4>
                <div className="mb-2 font-label-caps text-xs uppercase opacity-80">Universitat de Girona (UDG), Girona</div>
                <p className="text-xs leading-relaxed opacity-90 md:text-sm">
                  Specialized in Software Engineering, studying and applying software patterns.
                </p>
              </article>
            </CollapsibleSection>
          </div>
        </div>

        <aside className="hidden w-full shrink-0 space-y-4 border border-primary-container/30 bg-black p-4 md:block md:w-64 md:self-start">
          <div className="flex aspect-square w-full items-center justify-center overflow-hidden border border-dashed border-primary-container/50 p-1">
            <img
              src="images/profile-picture.jpg"
              alt="Miguel Ángel Bueno Rivera"
              className="h-full w-full object-cover grayscale contrast-125 sepia-[.5] hue-rotate-[320deg] saturate-[2]"
            />
          </div>
          <div className="space-y-1 font-mono text-[10px] uppercase opacity-60">
            <div>SCANNING RETINA... OK</div>
            <div>THUMBPRINT SYNC... OK</div>
            <div>DNA MATCH... 99.98%</div>
          </div>
        </aside>
      </div>
    </div>
  )
}
