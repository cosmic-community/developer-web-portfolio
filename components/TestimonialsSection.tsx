import { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Testimonials</h2>
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
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= numStars ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What my clients say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary-600 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-700 italic">
                  "{testimonial.metadata.testimonial}"
                </p>
              </div>

              {/* Rating */}
              {testimonial.metadata.rating && (
                <div className="mb-4">
                  {renderStars(testimonial.metadata.rating)}
                </div>
              )}

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                {testimonial.metadata.client_photo && (
                  <img
                    src={`${testimonial.metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata.client_name}
                    width="60"
                    height="60"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.metadata.client_name}
                  </h4>
                  {testimonial.metadata.client_title && (
                    <p className="text-sm text-gray-600">
                      {testimonial.metadata.client_title}
                    </p>
                  )}
                  {testimonial.metadata.company_name && (
                    <p className="text-sm text-primary-600">
                      {testimonial.metadata.company_name}
                    </p>
                  )}
                </div>
              </div>

              {/* Related Project */}
              {testimonial.metadata.related_project && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    Project:{' '}
                    <span className="font-medium text-gray-900">
                      {testimonial.metadata.related_project.metadata.project_name}
                    </span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}