import { Project } from '@/types'
import Link from 'next/link'

interface HeroSectionProps {
  featuredProjects: Project[]
}

export default function HeroSection({ featuredProjects }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-primary-300 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary-400 rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="animate-slide-in-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available for new projects
              </span>
              <h1 className="heading-xl text-gray-900 mb-6 text-shadow">
                Hi, I'm a
                <span className="gradient-text"> Full-Stack Developer</span>
              </h1>
              <p className="body-lg text-gray-600 mb-8 max-w-xl">
                I create exceptional digital experiences through clean code, innovative design, 
                and cutting-edge technology. Let's build something amazing together.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary hover-lift"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary hover-lift"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Talk
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-gray-900 mb-1">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-gray-900 mb-1">99%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Featured Projects Preview */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Featured Projects</h3>
              
              <div className="space-y-4">
                {featuredProjects.slice(0, 3).map((project, index) => (
                  <div
                    key={project.id}
                    className="card p-4 card-hover animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      {project.metadata.project_image && (
                        <div className="flex-shrink-0">
                          <img
                            src={`${project.metadata.project_image.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                            alt={project.metadata.project_name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 truncate">
                          {project.metadata.project_name}
                        </h4>
                        <p className="text-sm text-gray-600 truncate">
                          {project.metadata.description}
                        </p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className={`badge ${
                            project.metadata.status.key === 'completed' 
                              ? 'badge-success' 
                              : project.metadata.status.key === 'in_progress'
                              ? 'badge-warning'
                              : 'badge-info'
                          }`}>
                            {project.metadata.status.value}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost mt-4 w-full justify-center"
              >
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
          aria-label="Scroll to projects"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}