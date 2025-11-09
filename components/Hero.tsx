'use client';

import { ArrowRight, Sparkles, TrendingUp, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-accent-600" />
            <span className="text-sm font-semibold text-gray-700">AI-Powered Marketing Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in-up">
            <span className="block text-gray-900 mb-2">Transform Your</span>
            <span className="gradient-text block">Digital Presence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Supercharge your business growth with cutting-edge digital marketing, SEO optimization, and AI automation services
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="btn-primary group">
              Start Your Journey
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">300%</div>
              <div className="text-gray-600 font-medium">Average ROI Increase</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex justify-center mb-3">
                <Bot className="w-8 h-8 text-accent-600" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-600 font-medium">AI Automations Built</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex justify-center mb-3">
                <Sparkles className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
