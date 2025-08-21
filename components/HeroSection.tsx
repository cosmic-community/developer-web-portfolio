import Link from 'next/link'
import { Project } from '@/types'

interface HeroSectionProps {
  featuredProjects: Project[]
}

export default function HeroSection({ featuredProjects }: HeroSectionProps) {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max section-padding">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional{' '}
            <span className="text-primary-600">Developer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-balance">
            Full-stack developer specializing in React, Node.js, and modern web technologies. 
            I build scalable applications that deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          {/* Featured Projects Preview */}
          {featuredProjects && featuredProjects.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.slice(0, 3).map((project) => (
                  <div
                    key={project.id}
                    className="card card-hover animate-slide-up"
                  >
                    {project.metadata.project_image && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={`${project.metadata.project_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                          alt={project.metadata.project_name}
                          width="300"
                          height="200"
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.metadata.project_name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {project.metadata.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                          {project.metadata.status.value}
                        </span>
                        {project.metadata.live_url && (
                          <a
                            href={project.metadata.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                          >
                            View Live →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}