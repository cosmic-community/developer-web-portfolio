'use client'

import { useState } from 'react'
import { Project } from '@/types'

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<string>('all')

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
            <p className="text-gray-600">No projects found.</p>
          </div>
        </div>
      </section>
    )
  }

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.metadata.status.key === filter)

  const statusOptions = [
    { key: 'all', label: 'All Projects' },
    { key: 'completed', label: 'Completed' },
    { key: 'in_progress', label: 'In Progress' },
    { key: 'planned', label: 'Planned' },
  ]

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing different technologies and approaches.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {statusOptions.map((status) => (
            <button
              key={status.key}
              onClick={() => setFilter(status.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                filter === status.key
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {status.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.metadata.project_name}
                  </h3>
                  {project.metadata.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {project.metadata.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Technologies:</p>
                  <p className="text-sm text-gray-700">
                    {project.metadata.technologies}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.metadata.status.key === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : project.metadata.status.key === 'in_progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {project.metadata.status.value}
                  </span>
                  
                  <div className="flex gap-3">
                    {project.metadata.github_url && (
                      <a
                        href={project.metadata.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary-600 text-sm"
                      >
                        GitHub
                      </a>
                    )}
                    {project.metadata.live_url && (
                      <a
                        href={project.metadata.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}