export function IdentityModule() {
  return (
    <div className="flex flex-col items-start gap-8 md:flex-row">
        <div className="w-full flex-1 space-y-6">
          <h2 className="border-b border-primary-container pb-2 text-xl font-bold uppercase tracking-[0.2em] md:text-2xl md:tracking-[0.3em]">
            BIOMETRIC_PROFILE: 2122-A
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-primary-container bg-primary-container/10 p-4 space-y-4">
              <div className="float-right ml-4 mb-2 h-24 w-24 overflow-hidden border-2 border-primary-container/50 md:h-32 md:w-32">
                <img
                  src="images/profile-picture.jpg"
                  alt="Miguel Ángel Bueno Rivera"
                  className="h-full w-full object-cover grayscale contrast-125 sepia-[.5] hue-rotate-[320deg] saturate-[2]"
                />
              </div>
              <p className="text-sm leading-relaxed md:text-base">
                Greetings! My name is Miguel, a 29-year-old Computer Engineer specialized in Software Development. My lifelong passion for video games inspired me to earn a Master's Degree in Advanced Programming for AAA Video Games from Universitat Politècnica de Catalunya (UPC).
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                I currently work as a Full Stack Developer at Next Digital, collaborating with Iberia Airlines. With over six years of professional experience, I’ve built a strong background in developing scalable, high-quality, and well-tested web applications using technologies such as Angular, React, Java Spring Boot, NestJS, and Python.
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                My work emphasizes clean architecture, performance, and maintainability across both frontend and backend systems. My relentless curiosity and drive to explore emerging technologies have made me a highly adaptable, detail-oriented, and proactive developer.
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                Beyond my professional pursuits, I’m deeply passionate about video game development, 3D rendering and modeling, app development, and even the culinary arts — always seeking creativity and challenge in everything I do.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 font-label-caps text-xs sm:grid-cols-2 md:text-sm pt-4">
              <div className="space-y-1">
                <span className="opacity-50">LOCATION:</span>
                <div>BARCELONA, SPAIN</div>
              </div>
              <div className="space-y-1">
                <span className="opacity-50">ROLE:</span>
                <div>FULL STACK DEVELOPER</div>
              </div>
              <div className="space-y-1">
                <span className="opacity-50">EXPERIENCE:</span>
                <div>6+ YEARS</div>
              </div>
              <div className="space-y-1">
                <span className="opacity-50">SPECIALTY:</span>
                <div>WEB & GAME DEV</div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="mb-4 border-b border-primary-container/30 pb-2 font-code text-lg font-bold uppercase tracking-widest text-primary-container">
                [EXPERIENCE_LOG]
              </h3>
              <div className="space-y-6">
                <article className="border-l border-primary-container/30 pl-4">
                  <div className="mb-1 font-label-caps text-[10px] uppercase opacity-50 md:text-xs">
                    August 2022 - Present
                  </div>
                  <h4 className="font-bold text-primary-container uppercase tracking-widest">Next Digital</h4>
                  <div className="mb-2 font-label-caps text-xs uppercase opacity-80">Senior Full Stack Developer</div>
                  <p className="text-xs leading-relaxed opacity-90 md:text-sm">
                    Working for Iberia Airlines in the Innovation Team as a Full Stack Developer, leading and contributing to rapid proof-of-concept projects across multiple domains. Most applications have been developed with Java / Kotlin and Angular / React, while also designing and implementing web services using Python and Node.js (NestJS), leveraging both RESTful and GraphQL APIs.
                  </p>
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
              </div>
            </div>

            <div className="pt-8">
              <h3 className="mb-4 border-b border-primary-container/30 pb-2 font-code text-lg font-bold uppercase tracking-widest text-primary-container">
                [EDUCATION_LOG]
              </h3>
              <div className="space-y-6">
                <article className="border-l border-primary-container/30 pl-4">
                  <div className="mb-1 font-label-caps text-[10px] uppercase opacity-50 md:text-xs">
                    2020 - 2021
                  </div>
                  <h4 className="font-bold text-primary-container uppercase tracking-widest">Master's Degree in Advanced Programming for AAA Video Games</h4>
                  <div className="mb-2 font-label-caps text-xs uppercase opacity-80">Universitat Politècnica de Catalunya (UPC), Barcelona</div>
                  <p className="text-xs leading-relaxed opacity-90 md:text-sm">
                    Learned how to build a 3D Game Engine from scratch in C++, OpenGL and GLSL. Organized as a real company with Art students to build our own Engine and Videogame as a final project.
                  </p>
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
              </div>
            </div>
          </div>
        </div>

        <aside className="hidden w-full space-y-4 border border-primary-container/30 bg-black p-4 md:block md:w-64">
          <div className="flex h-32 items-center justify-center border border-dashed border-primary-container/50">
            <span className="material-symbols-outlined text-5xl opacity-30 md:text-6xl">
              fingerprint
            </span>
          </div>
          <div className="space-y-1 font-mono text-[10px] uppercase opacity-60">
            <div>SCANNING RETINA... OK</div>
            <div>THUMBPRINT SYNC... OK</div>
            <div>DNA MATCH... 99.98%</div>
          </div>
        </aside>
    </div>
  )
}
