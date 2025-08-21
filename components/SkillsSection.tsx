import { Skill } from '@/types'

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills || skills.length === 0) {
    return (
      <section id="skills" className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
            <p className="text-gray-600">No skills found.</p>
          </div>
        </div>
      </section>
    )
  }

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.metadata.category.value
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {category}
              </h3>
              
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      {skill.metadata.icon && (
                        <img
                          src={`${skill.metadata.icon.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                          alt={skill.metadata.skill_name}
                          width="40"
                          height="40"
                          className="w-10 h-10 rounded object-cover"
                        />
                      )}
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {skill.metadata.skill_name}
                        </h4>
                        {skill.metadata.years_experience && (
                          <p className="text-sm text-gray-600">
                            {skill.metadata.years_experience} years experience
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <span className={`skill-badge ${
                      skill.metadata.proficiency.key === 'beginner' 
                        ? 'skill-beginner'
                        : skill.metadata.proficiency.key === 'intermediate'
                        ? 'skill-intermediate' 
                        : skill.metadata.proficiency.key === 'advanced'
                        ? 'skill-advanced'
                        : 'skill-expert'
                    }`}>
                      {skill.metadata.proficiency.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}