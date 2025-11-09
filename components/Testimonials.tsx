'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      image: '👩‍💼',
      rating: 5,
      text: 'ClickAutomate transformed our digital presence completely. Our organic traffic increased by 400% in just 6 months, and our conversion rates doubled. The AI automation they implemented saved us countless hours.',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      image: '👨‍💻',
      rating: 5,
      text: 'The ROI we\'ve seen from their SEO and PPC campaigns is incredible. The team is professional, responsive, and truly understands modern digital marketing. Best investment we\'ve made this year.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, EcoShop',
      image: '👩‍🔬',
      rating: 5,
      text: 'Their AI-powered marketing automation is a game-changer. We\'ve scaled our business 3x while actually reducing our marketing team\'s workload. The results speak for themselves.',
    },
    {
      name: 'David Kim',
      role: 'VP of Sales, CloudServices',
      image: '👨‍💼',
      rating: 5,
      text: 'ClickAutomate doesn\'t just deliver services - they deliver results. Our lead generation increased by 250%, and the quality of leads improved dramatically. Highly recommend!',
    },
    {
      name: 'Lisa Anderson',
      role: 'CMO, FinanceHub',
      image: '👩‍💼',
      rating: 5,
      text: 'Working with ClickAutomate has been transformative. Their data-driven approach and cutting-edge AI tools gave us the competitive edge we needed in a crowded market.',
    },
    {
      name: 'James Taylor',
      role: 'Owner, RetailMax',
      image: '👨‍💼',
      rating: 5,
      text: 'From strategy to execution, ClickAutomate exceeded our expectations. Our online sales have tripled, and our brand visibility has never been stronger. Exceptional service!',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-gray-100 card-hover relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-200" />

              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">500+</div>
            <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">98%</div>
            <div className="text-sm text-gray-600 mt-1">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">15+</div>
            <div className="text-sm text-gray-600 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">50+</div>
            <div className="text-sm text-gray-600 mt-1">Industry Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
}
