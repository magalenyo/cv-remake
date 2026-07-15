import { Link } from 'react-router-dom'
import { projects } from '../../data/modulesContent'

export function ProjectsModule() {
  return (
    <>
      <h2 className="mb-8 border-b border-primary-container pb-2 text-xl font-bold uppercase tracking-[0.2em] md:text-2xl md:tracking-[0.3em]">
        DATASET: ACTIVE_DEVELOPMENT
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="group space-y-4 outline-none"
          >
            <div className="aspect-video overflow-hidden border border-primary-container/30 bg-surface-container transition-colors group-hover:border-primary-container group-focus:border-primary-container">
              {project.imageUrl.endsWith('.mp4') ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-100 group-focus:opacity-100"
                  src={project.imageUrl.startsWith('http') ? project.imageUrl : import.meta.env.BASE_URL + project.imageUrl}
                />
              ) : (
                <img
                  alt={project.imageAlt}
                  className="h-full w-full object-cover opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-focus:opacity-100 group-focus:grayscale-0"
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
