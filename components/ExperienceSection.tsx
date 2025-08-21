import { WorkExperience } from '@/types'

interface ExperienceSectionProps {
  workExperience: WorkExperience[]
}

export default function ExperienceSection({ workExperience }: ExperienceSectionProps) {
  if (!workExperience || workExperience.length === 0) {
    return (
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="heading-lg text-gray-900 mb-6">Work Experience</h2>
            <p className="text-gray-600">No work experience found.</p>
          </div>
        </div>
      </section>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    })
  }

  const calculateDuration = (startDate: string, endDate: string | null) => {
    const start = new Date(startDate)
    const end = endDate ? new Date(endDate) : new Date()
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    
    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
    } else if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`
    } else {
      return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
    }
  }

  // Sort by start date (most recent first)
  const sortedExperience = [...workExperience].sort((a, b) => 
    new Date(b.metadata.start_date).getTime() - new Date(a.metadata.start_date).getTime()
  )

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg text-gray-900 mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey and the impactful contributions I've made 
            at various organizations throughout my career.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-primary-400 to-primary-200 transform -translate-x-0.5"></div>

          <div className="space-y-12">
            {sortedExperience.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 
                    ? 'md:flex-row-reverse md:text-right' 
                    : 'md:flex-row md:text-left'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10">
                  {experience.metadata.current && (
                    <div className="absolute inset-0 bg-primary-600 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                } ml-16 md:ml-0`}>
                  <div className="card p-8 shadow-medium hover-lift">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {experience.metadata.job_title}
                        </h3>
                        {experience.metadata.current && (
                          <span className="badge badge-success">Current</span>
                        )}
                      </div>
                      
                      <div className="text-primary-600 font-semibold mb-2">
                        {experience.metadata.company_website ? (
                          <a
                            href={experience.metadata.company_website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary-700 transition-colors duration-200 inline-flex items-center space-x-1"
                          >
                            <span>{experience.metadata.company_name}</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          experience.metadata.company_name
                        )}
                      </div>

                      <div className="text-sm text-gray-500 space-y-1">
                        <div>
                          {formatDate(experience.metadata.start_date)} - {' '}
                          {experience.metadata.end_date 
                            ? formatDate(experience.metadata.end_date)
                            : 'Present'
                          }
                        </div>
                        <div className="text-primary-600 font-medium">
                          {calculateDuration(experience.metadata.start_date, experience.metadata.end_date)}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {experience.metadata.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    {experience.metadata.achievements && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          <span>Key Achievements</span>
                        </h4>
                        <div className="text-sm text-gray-600 space-y-2">
                          {experience.metadata.achievements.split('\n').map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start space-x-2">
                              <svg className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{achievement.replace('•', '').trim()}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    {experience.metadata.technologies && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Technologies Used</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.metadata.technologies.split(',').map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="card p-8 shadow-medium max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Career Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {workExperience.length}
                </div>
                <div className="text-gray-600">Positions Held</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {workExperience.filter(exp => exp.metadata.current).length > 0 ? 'Active' : '5+'}
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {workExperience.filter(exp => exp.metadata.company_website).length}
                </div>
                <div className="text-gray-600">Companies Worked</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}