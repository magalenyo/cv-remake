import { Link } from 'react-router-dom'
import { projects } from '../../data/modulesContent'

export function ProjectsModule() {
  return (
    <>
      <h2 className="mb-8 border-b border-primary-container pb-2 text-xl font-bold uppercase tracking-[0.2em] md:text-2xl md:tracking-[0.3em]">
        DATASET: ACTIVE_DEVELOPMENT
        <span aria-hidden="true" className="cursor-blink" />
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group space-y-4 outline-none"
            onClick={() => {
              window.scrollTo(0, 0)
              document.documentElement.scrollTop = 0
              document.body.scrollTop = 0
            }}
          >
            <div className="relative aspect-video overflow-hidden border border-primary-container/30 bg-surface-container transition-colors group-hover:border-primary-container group-focus:border-primary-container">
              {/* Cyber Target Lock Effect */}
              <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
                <div className="absolute inset-0 scale-125 transition-transform duration-500 ease-out group-hover:scale-100 group-focus:scale-100">
                  {/* Corners */}
                  <div className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-primary-container" />
                  <div className="absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-primary-container" />
                  <div className="absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-primary-container" />
                  <div className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-primary-container" />
                  
                  {/* Center Crosshair */}
                  <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 opacity-50">
                    <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-primary-container" />
                    <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-primary-container" />
                  </div>
                </div>
                
                {/* Red tint overlay */}
                <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay" />
              </div>

              {project.imageUrl.endsWith('.mp4') ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
                  src={project.imageUrl.startsWith('http') ? project.imageUrl : import.meta.env.BASE_URL + project.imageUrl}
                />
              ) : (
                <img
                  alt={project.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
                  loading="lazy"
                  src={project.imageUrl.startsWith('http') ? project.imageUrl : import.meta.env.BASE_URL + project.imageUrl}
                />
              )}
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-widest transition-colors group-hover:text-white group-focus:text-white">
                {project.title}
              </h3>
              <p className="mt-1 text-sm opacity-80">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
