import { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="heading-lg text-gray-900 mb-6">Client Testimonials</h2>
            <p className="text-gray-600">No testimonials found.</p>
          </div>
        </div>
      </section>
    )
  }

  const renderStars = (rating?: { key: string; value: string }) => {
    if (!rating) return null
    
    const numStars = parseInt(rating.key)
    return (
      <div className="flex items-center space-x-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 transition-colors duration-200 ${
              star <= numStars ? 'text-yellow-400' : 'text-gray-200'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-500 ml-2">
          ({numStars}/5)
        </span>
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg text-gray-900 mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="body-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it - hear what my clients have to say 
            about our collaborations and the results we achieved together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="card p-8 hover-lift group animate-slide-up shadow-soft hover:shadow-strong"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg 
                  className="w-12 h-12 text-primary-200 group-hover:text-primary-300 transition-colors duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              {/* Rating */}
              {testimonial.metadata.rating && renderStars(testimonial.metadata.rating)}

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-8 group-hover:text-gray-800 transition-colors duration-300">
                "{testimonial.metadata.testimonial}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                {testimonial.metadata.client_photo ? (
                  <img
                    src={`${testimonial.metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata.client_name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg group-hover:ring-primary-100 transition-all duration-300"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center ring-4 ring-white shadow-lg">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
                
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {testimonial.metadata.client_name}
                  </h4>
                  {testimonial.metadata.client_title && (
                    <p className="text-sm text-gray-600 font-medium">
                      {testimonial.metadata.client_title}
                    </p>
                  )}
                  {testimonial.metadata.company_name && (
                    <p className="text-sm text-primary-600 font-semibold">
                      {testimonial.metadata.company_name}
                    </p>
                  )}
                </div>
              </div>

              {/* Related Project */}
              {testimonial.metadata.related_project && (
                <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                  <div className="flex items-center space-x-2 text-sm">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="text-gray-600">Project:</span>
                    <span className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {testimonial.metadata.related_project.metadata.project_name}
                    </span>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Testimonials Stats */}
        <div className="grid md:grid-cols-4 gap-6 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {testimonials.length}
            </div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {testimonials.filter(t => t.metadata.rating?.key === '5').length}
            </div>
            <div className="text-gray-600 font-medium">5-Star Reviews</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {((testimonials.filter(t => t.metadata.rating).reduce((sum, t) => sum + parseInt(t.metadata.rating!.key), 0) / testimonials.filter(t => t.metadata.rating).length) || 0).toFixed(1)}
            </div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              100%
            </div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="card p-8 shadow-medium max-w-2xl mx-auto gradient-bg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Join these satisfied clients and let's create something amazing together.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary hover-lift"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}