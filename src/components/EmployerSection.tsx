
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, BarChart3, Shield } from 'lucide-react';

const EmployerSection = () => {
  const features = [
    {
      title: 'Diverse Talent Pool',
      description: 'Access CXOs, Virtual Assistants, SDRs, Designers, and more from varied backgrounds.',
      icon: Users
    },
    {
      title: 'Verified Profiles with DEI Tags',
      description: 'All candidates are pre-vetted with verified skills and clear diversity indicators to support your inclusion goals.',
      icon: Shield
    },
    {
      title: 'DEI Hiring Dashboard',
      description: 'Track and report on your diversity hiring metrics with our comprehensive analytics dashboard.',
      icon: BarChart3
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Find The Right Person For The Job
              </h2>
              <p className="text-lg text-gray-600">
                Pre-vetted, DEI-aligned remote talent
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Why Employers Choose <span className="text-purple-600">Streelancer</span> ?
              </h3>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    </div>
                    <p className="text-gray-600 ml-9 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - CTA Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-coral-400 to-coral-500 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold">
                  Be a part of Streelancer
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">24x7</div>
                      <div className="text-sm opacity-90">Support</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">Verified</div>
                      <div className="text-sm opacity-90">Talent</div>
                    </div>
                  </div>
                </div>

                <Button className="bg-white text-coral-500 hover:bg-gray-100 font-semibold">
                  Hire Now
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 translate-y-16"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerSection;
