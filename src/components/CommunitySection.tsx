
import React from 'react';
import { Link } from 'react-router-dom';
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

            <Link to="/community">
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg w-full"
                size="lg"
              >
                Join Community
              </Button>
            </Link>

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
  <div className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl p-8 relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 h-64 overflow-hidden shadow-lg border border-white/30 group">
      <img 
        src="/img2.avif" 
        alt="Community Illustration" 
        className="w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 filter contrast-105 saturate-110"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </div>
    
    {/* Enhanced Background Pattern */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
    
    {/* Enhanced Floating Elements */}
    <div className="absolute top-4 right-4 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/40 transition-all duration-300 hover:scale-110 border border-white/50">
      <Heart className="w-6 h-6 text-white drop-shadow-sm" />
    </div>
    <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/40 transition-all duration-300 hover:scale-110 border border-white/50">
      <MessageCircle className="w-5 h-5 text-white drop-shadow-sm" />
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
