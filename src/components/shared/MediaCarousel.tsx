import { useEffect, useRef, useState } from 'react'

type CarouselMedia = {
  type: 'image' | 'video'
  url: string
  alt?: string
}

type MediaCarouselProps = {
  media: CarouselMedia[]
}

function resolveMediaUrl(url: string) {
  return url.startsWith('http') ? url : import.meta.env.BASE_URL + url
}

export function MediaCarousel({ media }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const stripRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCurrentIndex(0)
  }, [media])

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return

      event.preventDefault()
      strip.scrollLeft += event.deltaY
    }

    strip.addEventListener('wheel', onWheel, { passive: false })
    return () => strip.removeEventListener('wheel', onWheel)
  }, [media.length])

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return

    const activeThumb = strip.children[currentIndex] as HTMLElement | undefined
    activeThumb?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [currentIndex])

  if (media.length === 0) return null

  const currentMedia = media[currentIndex]
  const hasMultiple = media.length > 1

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-video w-full border border-primary-container/30 bg-surface-container p-1">
        <img
          src={resolveMediaUrl(currentMedia.url)}
          alt={currentMedia.alt || 'Project media'}
          className="h-full w-full object-contain"
        />

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center border border-primary-container/50 bg-black/80 text-primary-container transition-colors hover:border-primary-container hover:bg-primary-container hover:text-black"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center border border-primary-container/50 bg-black/80 text-primary-container transition-colors hover:border-primary-container hover:bg-primary-container hover:text-black"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>

            <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 font-label-caps text-[10px] uppercase tracking-widest text-primary-container">
              {currentIndex + 1} / {media.length}
            </div>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="w-full min-w-0">
          <div
            ref={stripRef}
            className="flex w-full flex-nowrap gap-2 overflow-x-auto overscroll-x-contain pb-2"
          >
            {media.map((item, idx) => (
              <button
                key={item.url}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden border p-0.5 transition-all hover:border-primary-container ${
                  idx === currentIndex
                    ? 'border-primary-container opacity-100'
                    : 'border-primary-container/30 opacity-50'
                }`}
              >
                <img
                  src={resolveMediaUrl(item.url)}
                  alt={item.alt || `Thumbnail ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function MediaFrame({ media }: { media: CarouselMedia }) {
  if (media.type === 'video') {
    if (media.url.includes('youtube.com')) {
      return (
        <iframe
          className="h-full w-full"
          src={media.url}
          title="Video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )
    }

    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
        src={resolveMediaUrl(media.url)}
      />
    )
  }

  return (
    <img
      src={resolveMediaUrl(media.url)}
      alt={media.alt || 'Project media'}
      className="h-full w-full object-contain"
    />
  )
}
