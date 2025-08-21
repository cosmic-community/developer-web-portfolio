import { Metadata } from 'next'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import { 
  getProjects, 
  getFeaturedProjects, 
  getSkills, 
  getWorkExperience, 
  getTestimonials 
} from '@/lib/cosmic'
import { Project, Skill, WorkExperience, Testimonial } from '@/types'

export const metadata: Metadata = {
  title: 'Professional Developer Portfolio | Full-Stack Developer',
  description: 'Professional full-stack developer specializing in React, Node.js, and modern web technologies. View my projects, skills, and client testimonials.',
}

export default async function HomePage() {
  try {
    // Fetch all data in parallel for better performance
    const [allProjects, featuredProjects, skills, workExperience, testimonials] = await Promise.all([
      getProjects(),
      getFeaturedProjects(),
      getSkills(),
      getWorkExperience(),
      getTestimonials()
    ])

    return (
      <main className="min-h-screen">
        <Header />
        <HeroSection featuredProjects={featuredProjects as Project[]} />
        <ProjectsSection projects={allProjects as Project[]} />
        <SkillsSection skills={skills as Skill[]} />
        <ExperienceSection workExperience={workExperience as WorkExperience[]} />
        <TestimonialsSection testimonials={testimonials as Testimonial[]} />
        <Footer />
      </main>
    )
  } catch (error) {
    console.error('Error fetching data:', error)
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Unable to load portfolio content
          </h1>
          <p className="text-gray-600">
            Please check your environment variables and try again.
          </p>
        </div>
      </main>
    )
  }
}