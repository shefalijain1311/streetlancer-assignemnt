
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, MessageCircle, Heart } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-100 via-coral-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Join <span className="text-purple-600">Streelancer Community</span> !
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A safe space to learn, share, and grow — built for women, queer talent, and second-career professionals.
              </p>
            </div>

            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg"
              size="lg"
            >
              Join Community
            </Button>

            {/* Community Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="inline-flex p-3 bg-purple-100 rounded-full mb-2">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="font-bold text-2xl text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Members</div>
              </div>
              <div className="text-center">
                <div className="inline-flex p-3 bg-coral-100 rounded-full mb-2">
                  <MessageCircle className="w-6 h-6 text-coral-500" />
                </div>
                <div className="font-bold text-2xl text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Daily Discussions</div>
              </div>
              <div className="text-center">
                <div className="inline-flex p-3 bg-teal-100 rounded-full mb-2">
                  <Heart className="w-6 h-6 text-teal-600" />
                </div>
                <div className="font-bold text-2xl text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl p-8 relative overflow-hidden">
              <div className="bg-white/10 rounded-2xl p-6 h-64 flex items-center justify-center overflow-hidden">
      <img 
        src="/img2.jpg" 
        alt="Community Illustration" 
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
