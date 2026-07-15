export function DiagnosticFeed() {
  return (
    <div className="mb-24 w-full border-t border-primary-container pt-6 md:mb-20">
      <div className="flex flex-wrap justify-between gap-4 px-2 font-label-caps text-[9px] uppercase tracking-tighter opacity-50 md:text-[10px]">
        <span>STATUS: ALL SYSTEMS NOMINAL</span>
        <span>TEMP: 22.4°C</span>
        <span>MEMORY: 4096 TB</span>
        <span>TIME: 14:32:01.002</span>
        <span className="hidden sm:inline">LOCATION: 10.0.0.1 (EXTERNAL_UPLINK)</span>
      </div>
    </div>
  )
}
