'use client';

import { Rocket, Clock, Users, Shield, LineChart, Lightbulb, Headphones, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Rocket,
      title: 'Rapid Growth',
      description: 'Accelerate your business growth with proven strategies and cutting-edge technology.',
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automate repetitive tasks and focus on what matters most - growing your business.',
    },
    {
      icon: LineChart,
      title: 'Data-Driven Results',
      description: 'Every decision backed by analytics and insights for maximum ROI.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for peace of mind.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with industry veterans who have delivered results for Fortune 500 companies.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Stay ahead of the curve with the latest AI and marketing technologies.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your campaigns run smoothly.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Award-winning campaigns with measurable results and client satisfaction.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Why Choose <span className="gradient-text">ClickAutomate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise, technology, and creativity to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that trust ClickAutomate for their digital growth
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Get Free Consultation
            </a>
            <a href="#services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
