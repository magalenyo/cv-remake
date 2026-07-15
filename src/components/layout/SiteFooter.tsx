type SiteFooterProps = {
  visible: boolean
}

export function SiteFooter({ visible }: SiteFooterProps) {
  return (
    <footer
      className={`fixed bottom-0 left-0 z-40 flex w-full flex-col items-center justify-between border-t border-primary-container bg-black/90 px-4 py-4 backdrop-blur-sm transition-opacity duration-1000 md:px-margin-desktop md:py-6 lg:flex-row ${
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="mb-4 text-center font-label-caps text-[10px] text-primary-container md:mb-0 md:text-label-caps lg:mb-0">
        © 2122 WEYLAND-YUTANI CORP // BUILDING BETTER WORLDS
      </div>

      <div className="flex gap-4 font-code text-[10px] md:gap-6 md:text-code">
        <a className="uppercase text-outline transition-colors hover:text-primary-container" href="#">
          SYSTEM_STATUS
        </a>
        <a className="uppercase text-outline transition-colors hover:text-primary-container" href="#">
          ENCRYPTION_LOG
        </a>
        <a className="uppercase text-outline transition-colors hover:text-primary-container" href="#">
          LOGOUT
        </a>
      </div>
    </footer>
  )
}
