export function IdentityModule() {
  return (
    <div className="flex flex-col items-start gap-8 md:flex-row">
        <div className="w-full flex-1 space-y-6">
          <h2 className="border-b border-primary-container pb-2 text-xl font-bold uppercase tracking-[0.2em] md:text-2xl md:tracking-[0.3em]">
            BIOMETRIC_PROFILE: 2122-A
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-primary-container bg-primary-container/10 p-4 space-y-4">
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
          </div>
        </div>

        <aside className="w-full space-y-4 border border-primary-container/30 bg-black p-4 md:w-64">
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
