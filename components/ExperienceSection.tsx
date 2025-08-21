import { WorkExperience } from '@/types'

interface ExperienceSectionProps {
  workExperience: WorkExperience[]
}

export default function ExperienceSection({ workExperience }: ExperienceSectionProps) {
  if (!workExperience || workExperience.length === 0) {
    return (
      <section id="experience" className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
            <p className="text-gray-600">No work experience found.</p>
          </div>
        </div>
      </section>
    )
  }

  // Sort by start date (most recent first)
  const sortedExperience = [...workExperience].sort((a, b) => {
    return new Date(b.metadata.start_date).getTime() - new Date(a.metadata.start_date).getTime()
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  }

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and key accomplishments in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

            <div className="space-y-8">
              {sortedExperience.map((job, index) => (
                <div key={job.id} className="relative flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 flex justify-center">
                    <div className={`w-4 h-4 rounded-full border-4 ${
                      job.metadata.current 
                        ? 'bg-primary-600 border-primary-200'
                        : 'bg-white border-primary-200'
                    }`}></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {job.metadata.job_title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-primary-600 font-medium">
                            {job.metadata.company_name}
                          </span>
                          {job.metadata.current && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600 mt-2 sm:mt-0">
                        {formatDate(job.metadata.start_date)} -{' '}
                        {job.metadata.current ? 'Present' : 
                         job.metadata.end_date ? formatDate(job.metadata.end_date) : 'Present'}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">
                      {job.metadata.description}
                    </p>

                    {job.metadata.achievements && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                        <div className="text-gray-700 text-sm whitespace-pre-line">
                          {job.metadata.achievements}
                        </div>
                      </div>
                    )}

                    {job.metadata.technologies && (
                      <div className="border-t border-gray-100 pt-4">
                        <h4 className="font-medium text-gray-900 mb-2 text-sm">Technologies Used:</h4>
                        <p className="text-sm text-gray-600">
                          {job.metadata.technologies}
                        </p>
                      </div>
                    )}

                    {job.metadata.company_website && (
                      <div className="mt-4">
                        <a
                          href={job.metadata.company_website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                        >
                          Visit Company Website →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}