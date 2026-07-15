export function IdentityModule() {
  return (
    <div className="flex flex-col items-start gap-8 md:flex-row">
        <div className="w-full flex-1 space-y-6">
          <h2 className="border-b border-primary-container pb-2 text-xl font-bold uppercase tracking-[0.2em] md:text-2xl md:tracking-[0.3em]">
            BIOMETRIC_PROFILE: 2122-A
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-primary-container bg-primary-container/10 p-4">
              <p className="text-base leading-relaxed md:text-lg">
                Lead Systems Architect specializing in low-level engine optimization and
                cyber-physical interface design.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 font-label-caps text-xs sm:grid-cols-2 md:text-sm">
              <div className="space-y-1">
                <span className="opacity-50">LOCATION:</span>
                <div>SECTOR 4 // NOSTROMO</div>
              </div>
              <div className="space-y-1">
                <span className="opacity-50">STATUS:</span>
                <div>AUTHORIZED PERSONNEL</div>
              </div>
              <div className="space-y-1">
                <span className="opacity-50">CLEARANCE:</span>
                <div>LEVEL 7 (CRITICAL)</div>
              </div>
              <div className="space-y-1">
                <span className="opacity-50">UPLINK:</span>
                <div>SECURE_ENCRYPTED</div>
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
