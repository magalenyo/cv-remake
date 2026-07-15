import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import { SiteHeader } from '../components/layout/SiteHeader'
import { SiteFooter } from '../components/layout/SiteFooter'
import { MediaCarousel, MediaFrame } from '../components/shared/MediaCarousel'
import { getTechBadgeClass } from '../utils/techBadgeStyles'

export function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const project = id ? projectsData[id] : null
  const [isLoading, setIsLoading] = useState(true)
  const [loadingText, setLoadingText] = useState('ESTABLISHING CONNECTION...')

  useEffect(() => {
    // Force scroll to top immediately on mount
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Quick thematic loading sequence
    setIsLoading(true)
    setLoadingText('ESTABLISHING CONNECTION...')
    
    const t1 = setTimeout(() => setLoadingText('DECRYPTING DATASET...'), 150)
    const t2 = setTimeout(() => setLoadingText('MOUNTING ASSETS...'), 300)
    const t3 = setTimeout(() => {
      setIsLoading(false)
      // Use a small timeout to let React render the new DOM before scrolling
      // This is especially important for mobile browsers
      setTimeout(() => {
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }, 50)
    }, 450)
    
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [id])

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-primary-container">
        <div className="text-center">
          <h1 className="font-headline-lg text-4xl uppercase tracking-widest text-error">
            ERR_NOT_FOUND
          </h1>
          <p className="mt-4 font-code opacity-80">PROJECT DATA CORRUPTED OR MISSING.</p>
          <Link
            to="/"
            state={{ openModule: 'ROOT_PROJECTS' }}
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
            className="mt-8 inline-block border border-primary-container px-6 py-2 font-label-caps uppercase tracking-widest transition-colors hover:bg-primary-container hover:text-black"
          >
            RETURN TO ROOT
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <SiteHeader visible={true} />

      <main className="relative z-20 flex min-h-screen flex-col items-center px-4 py-24 md:px-8 md:py-32 lg:px-12">
        {isLoading ? (
          <div className="flex h-[50vh] w-full flex-col items-center justify-center space-y-4 font-code text-primary-container">
            <div className="h-8 w-8 animate-spin border-2 border-primary-container border-t-transparent" />
            <div className="animate-pulse text-sm tracking-widest opacity-80">[{loadingText}]</div>
          </div>
        ) : (
          <div className="w-full max-w-6xl animate-fade-in space-y-12">
          <div className="space-y-4 border-b-2 border-primary-container pb-8">
            <Link
              to="/"
              state={{ openModule: 'ROOT_PROJECTS' }}
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
              className="group mb-8 inline-flex items-center gap-2 font-label-caps text-xs uppercase tracking-widest opacity-80 transition-opacity hover:opacity-100"
            >
              <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">
                arrow_back
              </span>
              [RETURN_TO_ROOT]
            </Link>
            <div className="font-code text-xs opacity-50">&gt; EXECUTE: PROJECT_{project.id.toUpperCase()}</div>
            <h1 className="font-headline-lg text-3xl uppercase tracking-[0.1em] text-primary-container md:text-5xl md:tracking-[0.2em]">
              {project.title}
              <span aria-hidden="true" className="cursor-blink" />
            </h1>
            <p className="font-label-caps text-xs uppercase tracking-[0.2em] opacity-80 md:text-sm">
              {project.subtitle}
            </p>
            
            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className={getTechBadgeClass(tech)}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-primary-container/50 bg-primary-container/5 px-4 py-2 font-label-caps text-[10px] uppercase tracking-widest transition-colors hover:bg-primary-container hover:text-black md:text-xs"
                >
                  <span className="material-symbols-outlined text-sm">link</span>
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <div className="space-y-12">
            {project.sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="border-b border-primary-container/30 pb-2 font-code text-lg font-bold uppercase tracking-widest text-primary-container">
                  [{section.title}]
                </h2>
                <div className="space-y-4 font-code text-sm leading-relaxed opacity-90 md:text-base">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul
                      className={
                        section.grid
                          ? 'mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'
                          : 'mt-4 space-y-4 border-l border-primary-container/30 pl-4'
                      }
                    >
                      {section.list.map((item, idx) => (
                        <li
                          key={idx}
                          className={
                            section.grid
                              ? 'border border-primary-container/30 bg-primary-container/5 p-4'
                              : ''
                          }
                        >
                          {item.label && (
                            <span
                              className={`font-bold text-primary-container ${
                                section.grid ? 'mb-2 block border-b border-primary-container/30 pb-2' : ''
                              }`}
                            >
                              {item.label}{section.grid ? '' : ': '}
                            </span>
                          )}
                          <span className="opacity-80">{item.description}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          {project.media.length > 0 && (() => {
            const videos = project.media.filter((item) => item.type === 'video')
            const images = project.media.filter((item) => item.type === 'image')
            const isGridLayout =
              project.id === 'unreal-engine-materials' || project.id === 'motion-graphics'

            return (
              <section className="space-y-8 pt-8">
                <h2 className="border-b border-primary-container/30 pb-2 font-code text-lg font-bold uppercase tracking-widest text-primary-container">
                  [MEDIA_ARCHIVE]
                </h2>

                {isGridLayout ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {project.media.map((media, idx) => (
                      <div
                        key={`${media.url}-${idx}`}
                        className="aspect-square w-full border border-primary-container/30 bg-surface-container p-1"
                      >
                        <MediaFrame media={media} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    {videos.length > 0 && (
                      <div className="space-y-4">
                        <h3 className="font-code text-sm font-bold uppercase tracking-widest text-primary-container/80">
                          [VIDEO_FEED]
                        </h3>
                        <div className="space-y-8">
                          {videos.map((media, idx) => (
                            <div
                              key={`${media.url}-${idx}`}
                              className="aspect-video w-full border border-primary-container/30 bg-surface-container p-1"
                            >
                              <MediaFrame media={media} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {images.length > 0 && (
                      <div className="space-y-4">
                        {videos.length > 0 && (
                          <h3 className="font-code text-sm font-bold uppercase tracking-widest text-primary-container/80">
                            [IMAGE_ARCHIVE]
                          </h3>
                        )}
                        <MediaCarousel media={images} />
                      </div>
                    )}
                  </>
                )}
              </section>
            )
          })()}
        </div>
        )}
      </main>

      <SiteFooter visible={true} />
    </>
  )
}
