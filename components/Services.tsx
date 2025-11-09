'use client';

import { Search, TrendingUp, Bot, Megaphone, Target, Zap, BarChart3, Mail, Share2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Dominate search rankings with data-driven SEO strategies that drive organic traffic and boost visibility.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Comprehensive marketing campaigns that convert. From strategy to execution, we handle it all.',
      features: ['PPC Campaigns', 'Social Media', 'Content Marketing', 'Brand Strategy'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Leverage cutting-edge AI to automate workflows, personalize experiences, and scale your operations.',
      features: ['Workflow Automation', 'Chatbots', 'Lead Scoring', 'Predictive Analytics'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Target,
      title: 'Lead Generation',
      description: 'Turn prospects into customers with high-converting funnels and targeted campaigns.',
      features: ['Landing Pages', 'Email Funnels', 'Conversion Rate Optimization', 'A/B Testing'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with comprehensive analytics and actionable business intelligence.',
      features: ['Performance Tracking', 'Custom Dashboards', 'ROI Analysis', 'Reporting'],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Build and engage your community across all platforms with strategic social media management.',
      features: ['Content Creation', 'Community Management', 'Influencer Marketing', 'Social Ads'],
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Zap className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center group"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
