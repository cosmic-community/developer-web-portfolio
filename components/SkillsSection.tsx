import { Skill } from '@/types'

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills || skills.length === 0) {
    return (
      <section id="skills" className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="heading-lg text-gray-900 mb-6">Skills & Technologies</h2>
            <p className="text-gray-600">No skills found.</p>
          </div>
        </div>
      </section>
    )
  }

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.metadata.category.value
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return 'bg-green-500'
      case 'advanced':
        return 'bg-blue-500'
      case 'intermediate':
        return 'bg-yellow-500'
      case 'beginner':
        return 'bg-gray-400'
      default:
        return 'bg-gray-400'
    }
  }

  const getProficiencyWidth = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return 'w-full'
      case 'advanced':
        return 'w-4/5'
      case 'intermediate':
        return 'w-3/5'
      case 'beginner':
        return 'w-2/5'
      default:
        return 'w-2/5'
    }
  }

  const categoryIcons: Record<string, string> = {
    'Frontend': '🎨',
    'Backend': '⚙️',
    'Database': '🗄️',
    'Tools & DevOps': '🛠️',
    'Other': '📚'
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg text-gray-900 mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency 
            across various technologies, frameworks, and tools.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <div
              key={category}
              className="animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-8">
                <span className="text-3xl">{categoryIcons[category] || '📚'}</span>
                <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {categorySkills.length} skills
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill, skillIndex) => (
                  <div
                    key={skill.id}
                    className="card p-6 hover-lift animate-slide-up"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    {/* Skill Header */}
                    <div className="flex items-center space-x-4 mb-4">
                      {skill.metadata.icon ? (
                        <img
                          src={`${skill.metadata.icon.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                          alt={skill.metadata.skill_name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {skill.metadata.skill_name}
                        </h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <span className="capitalize">{skill.metadata.proficiency.value}</span>
                          {skill.metadata.years_experience && (
                            <>
                              <span>•</span>
                              <span>{skill.metadata.years_experience} years</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-gray-700">Proficiency</span>
                        <span className="text-xs text-gray-500 capitalize">
                          {skill.metadata.proficiency.value}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProficiencyColor(skill.metadata.proficiency.key)} ${getProficiencyWidth(skill.metadata.proficiency.key)}`}
                          style={{ 
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Experience Badge */}
                    {skill.metadata.years_experience && (
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Experience</span>
                        <span className="badge badge-info">
                          {skill.metadata.years_experience} year{skill.metadata.years_experience > 1 ? 's' : ''}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {skills.length}
              </div>
              <div className="text-gray-600">Total Technologies</div>
            </div>
            <div className="card p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {skills.filter(skill => skill.metadata.proficiency.key === 'expert' || skill.metadata.proficiency.key === 'advanced').length}
              </div>
              <div className="text-gray-600">Advanced+ Skills</div>
            </div>
            <div className="card p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {Object.keys(groupedSkills).length}
              </div>
              <div className="text-gray-600">Skill Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}