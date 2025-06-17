
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Laptop, Settings, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-600 rounded-full opacity-10"></div>
      <div className="absolute top-40 right-40 w-24 h-24 bg-coral-500 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-teal-500 rounded-full opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Restart. Rise. <span className="text-purple-600">Thrive.</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                India's largest women-first platform for inclusive career building.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg"
                size="lg"
              >
                Register Now
              </Button>
              <Button 
                variant="outline" 
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold rounded-lg"
                size="lg"
              >
                Join Academy
              </Button>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Smart onboarding that routes you to the right path</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Access verified, DEI-aligned professionals instantly</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Industry-vetted programs with mentorship</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image Area */}
          <div className="relative">
            {/* Placeholder for woman with laptop image */}
            <div className="relative z-10 bg-gradient-to-br from-coral-400 to-coral-500 rounded-3xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                <div className="flex items-center justify-center h-64 bg-gray-100 rounded-xl">
                  <img 
          src="/img1.jpg" 
          alt="Professional Woman with Laptop" 
          className="w-full h-full object-cover rounded-xl"
        />
                </div>
              </div>
            </div>
            
            {/* Floating Icons */}
            <div className="absolute top-10 -left-4 bg-white p-3 rounded-full shadow-lg animate-bounce">
              <Settings className="w-6 h-6 text-purple-600" />
            </div>
            <div className="absolute bottom-10 -right-4 bg-white p-3 rounded-full shadow-lg animate-pulse">
              <Users className="w-6 h-6 text-coral-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
