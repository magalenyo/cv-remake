import { useState } from 'react'

type MediaCarouselProps = {
  media: { type: 'image' | 'video'; url: string; alt?: string }[]
}

export function MediaCarousel({ media }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (media.length === 0) return null

  const currentMedia = media[currentIndex]

  return (
    <div className="space-y-4">
      {/* Main Display */}
      <div className="aspect-video w-full border border-primary-container/30 bg-surface-container p-1">
        {currentMedia.type === 'video' ? (
          currentMedia.url.includes('youtube.com') ? (
            <iframe
              className="h-full w-full"
              src={currentMedia.url}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              src={currentMedia.url.startsWith('http') ? currentMedia.url : import.meta.env.BASE_URL + currentMedia.url}
            />
          )
        ) : (
          <img
            src={currentMedia.url.startsWith('http') ? currentMedia.url : import.meta.env.BASE_URL + currentMedia.url}
            alt={currentMedia.alt || 'Project media'}
            className="h-full w-full object-contain"
          />
        )}
      </div>

      {/* Thumbnail Strip */}
      {media.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {media.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden border p-0.5 transition-all hover:border-primary-container ${
                idx === currentIndex
                  ? 'border-primary-container opacity-100'
                  : 'border-primary-container/30 opacity-50'
              }`}
            >
              {item.type === 'video' ? (
                <div className="flex h-full w-full items-center justify-center bg-black">
                  <span className="material-symbols-outlined text-xl text-primary-container">play_circle</span>
                </div>
              ) : (
                <img
                  src={item.url.startsWith('http') ? item.url : import.meta.env.BASE_URL + item.url}
                  alt={item.alt || `Thumbnail ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
