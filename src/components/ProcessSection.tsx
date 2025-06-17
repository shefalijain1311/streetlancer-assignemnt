
import React from 'react';
import { User, Route, BookOpen, Briefcase } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Complete your profile and take our career assessment quiz.',
      icon: User,
      color: 'from-orange-400 to-orange-500'
    },
    {
      number: '02',
      title: 'Smart Routing',
      description: 'Get personalized recommendations based on your skills and goals.',
      icon: Route,
      color: 'from-orange-400 to-orange-500'
    },
    {
      number: '03',
      title: 'Learn & Build Profile',
      description: 'Enhance your skills and create a standout professional profile.',
      icon: BookOpen,
      color: 'from-orange-400 to-orange-500'
    },
    {
      number: '04',
      title: 'Get Hired',
      description: 'Connect with employers and secure opportunities that match your profile.',
      icon: Briefcase,
      color: 'from-orange-400 to-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find Your Fit, <span className="text-purple-600">Your Way</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore curated freelance and job-ready roles by category—designed for every stage, story, and strength.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.number}
                </div>
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 opacity-30 transform translate-x-8"></div>
                )}
              </div>

              {/* Step Content */}
              <div className="space-y-4">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.color} text-white mb-4`}>
                  <step.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
