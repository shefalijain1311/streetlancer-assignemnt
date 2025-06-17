
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Briefcase, Users, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Academy',
      subtitle: 'Learn & Upskill',
      description: 'Industry-relevant courses for women, queer professionals, returnees, and live career mentorship.',
      points: [
        'Mentoring, live classes, internship, real work experience and skill assessment.',
      ],
      color: 'from-purple-600 to-purple-700',
      icon: BookOpen,
      buttonText: 'Learn More'
    },
    {
      title: 'Marketplace',
      subtitle: 'Find Freelance & Remote Work',
      description: 'Match with freelance gigs or get dream-jobs based on your skills and goals.',
      points: [
        'Writer, Designer, Virtual Assistant (VA), SDR & more.'
      ],
      color: 'from-orange-500 to-red-500',
      icon: Briefcase,
      buttonText: 'Learn More'
    },
    {
      title: 'Smart Registration',
      subtitle: 'Guided Onboarding',
      description: 'Personalized journey based on your career goals and experience.',
      points: [
        'AI-powered skill assessment, industry recommendations, and career path mapping.'
      ],
      color: 'from-orange-600 to-orange-700',
      icon: TrendingUp,
      buttonText: 'Learn More'
    },
    {
      title: 'Employers',
      subtitle: 'Hire Remote DEI Women Talent',
      description: 'Access pre-vetted, diverse ready women across industries.',
      points: [
        'Fast delivery, flexible formats, data-first cost.'
      ],
      color: 'from-purple-700 to-purple-800',
      icon: Users,
      buttonText: 'Learn More'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services, <span className="text-purple-600">Your Growth</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get industry-ready with the right courses, gigs, and career tools — all in one place.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title} —
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">
                      {service.subtitle}
                    </h4>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                <Link to={service.title === 'Academy' ? '/academy' : service.title === 'Marketplace' ? '/marketplace' : '/about'}>
                  <Button 
                    variant="outline" 
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 group-hover:border-purple-500 group-hover:text-purple-600 transition-colors w-full"
                  >
                    {service.buttonText}
                  </Button>
                </Link>
              </div>

              {/* Background placeholder for image */}
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-gray-100 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
