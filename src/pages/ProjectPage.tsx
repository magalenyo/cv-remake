import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import { SiteHeader } from '../components/layout/SiteHeader'
import { SiteFooter } from '../components/layout/SiteFooter'

export function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const project = id ? projectsData[id] : null

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
      <SiteHeader visible={true} onToggleModule={() => {}} />

      <main className="relative z-20 flex min-h-screen flex-col items-center px-4 py-24 md:px-8 md:py-32 lg:px-12">
        <div className="w-full max-w-6xl space-y-12">
          {/* Header */}
          <div className="space-y-4 border-b-2 border-primary-container pb-8">
            <Link
              to="/"
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
          </div>

          {/* Links */}
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

          {/* Sections */}
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

          {/* Media */}
          {project.media.length > 0 && (
            <section className="space-y-4 pt-8">
              <h2 className="border-b border-primary-container/30 pb-2 font-code text-lg font-bold uppercase tracking-widest text-primary-container">
                [MEDIA_ARCHIVE]
              </h2>
              <div
                className={
                  project.id === 'unreal-engine-materials' || project.id === 'motion-graphics'
                    ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'
                    : 'space-y-8'
                }
              >
                {project.media.map((media, idx) => (
                  <div key={idx} className="aspect-video w-full border border-primary-container/30 bg-surface-container p-1">
                    {media.type === 'video' ? (
                      media.url.includes('youtube.com') ? (
                        <iframe
                          className="h-full w-full"
                          src={media.url}
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
                          controls
                          className="h-full w-full object-cover"
                          src={media.url.startsWith('http') ? media.url : import.meta.env.BASE_URL + media.url}
                        />
                      )
                    ) : (
                      <img
                        src={media.url.startsWith('http') ? media.url : import.meta.env.BASE_URL + media.url}
                        alt={media.alt || 'Project media'}
                        className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <SiteFooter visible={true} />
    </>
  )
}
