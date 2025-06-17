
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Star, Users, Zap, Shield } from 'lucide-react';
import { AuthModal } from '@/components/auth/AuthModals';

const UserCategoriesSection = () => {
  const categories = [
    {
      title: 'Career Returnees',
      subtitle: '"You took a break. Now take the lead."',
      description: 'Getting back into your career? Whether it\'s been 2 years or 10, we match your existing skills with flexible freelance projects so you can ease back into the workforce.',
      color: 'from-coral-400 to-coral-500',
      icon: Heart,
      bgColor: 'bg-coral-50'
    },
    {
      title: 'Silver Generation',
      subtitle: 'Experience never expires.',
      description: 'Our experience is your power. We help you explore remote roles that value wisdom, patience, and professionalism—no steep tech curve, just meaningful work.',
      color: 'from-slate-500 to-slate-600',
      icon: Star,
      bgColor: 'bg-slate-50'
    },
    {
      title: 'LGBTQIA+ Talent',
      subtitle: 'Pride in every project.',
      description: 'Find projects in inclusive, safe spaces. We partner with diversity-first employers and offer creative, technical, and client-facing roles with full respect for identity.',
      color: 'from-teal-500 to-teal-600',
      icon: Users,
      bgColor: 'bg-teal-50'
    },
    {
      title: 'Fresh Freelancers & Students',
      subtitle: 'Start smart. Earn early.',
      description: 'Whether you\'re navigating the gig economy, Gen Z experience, earn and flex scheduling. Quickly professional portfolio through online freelance real-world projects.',
      color: 'from-yellow-400 to-yellow-500',
      icon: Zap,
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Persons with Disabilities (PwD)',
      subtitle: 'Skills matter, not limitations.',
      description: 'Access remote projects that focus on what you can do, not what you can\'t. Work comfortably from home with supportive clients who understand accessibility needs.',
      color: 'from-teal-600 to-teal-700',
      icon: Shield,
      bgColor: 'bg-teal-50'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-700 italic">
                    {category.subtitle}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <AuthModal type="signup">
                  <Button 
                    className={`bg-gradient-to-r ${category.color} text-white hover:opacity-90 transition-opacity w-full`}
                  >
                    Register Now
                  </Button>
                </AuthModal>
              </div>

              {/* Image Placeholder */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className={`${category.bgColor} rounded-2xl p-8 h-64 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-center text-gray-500">
                    <category.icon className="w-16 h-16 mx-auto mb-4 opacity-30" />
                    <p className="text-sm">Image placeholder for {category.title}</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r ${category.color} rounded-full opacity-20`}></div>
                  <div className={`absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r ${category.color} rounded-full opacity-30`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserCategoriesSection;
