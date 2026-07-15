import { projects } from '../../data/modulesContent'

export function ProjectsModule() {
  return (
    <>
      <h2 className="mb-8 border-b border-primary-container pb-2 text-xl font-bold uppercase tracking-[0.2em] md:text-2xl md:tracking-[0.3em]">
        DATASET: ACTIVE_DEVELOPMENT
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="space-y-4">
            <div className="aspect-video overflow-hidden border border-primary-container/30 bg-surface-container">
              <img
                alt={project.imageAlt}
                className="h-full w-full object-cover opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                loading="lazy"
                src={project.imageUrl}
              />
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-widest">{project.title}</h3>
              <p className="mt-1 text-sm opacity-80">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
