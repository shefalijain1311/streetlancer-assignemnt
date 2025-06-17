import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Heart, Target, Award, Globe, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Inclusivity First',
      description: 'We believe diversity drives innovation. Our platform is designed to create equal opportunities for all.',
      color: 'from-coral-400 to-coral-500'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building a supportive ecosystem where professionals can learn, grow, and succeed together.',
      color: 'from-purple-400 to-purple-500'
    },
    {
      icon: Target,
      title: 'Impact Focused',
      description: 'Every feature, every program is designed to create meaningful career outcomes for our users.',
      color: 'from-teal-400 to-teal-500'
    },
    {
      icon: Award,
      title: 'Excellence in Everything',
      description: 'We maintain the highest standards in education, mentorship, and job matching.',
      color: 'from-orange-400 to-orange-500'
    }
  ];

  const team = [
    {
      name: 'Shefali Jain',
      role: 'Founder & CEO',
      bio: 'Passionate about creating inclusive workplaces and empowering women in their career journeys.',
      image: 'SJ',
      linkedin: '#'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Community',
      bio: 'Building bridges between talent and opportunities with a focus on diversity and inclusion.',
      image: 'PS',
      linkedin: '#'
    },
    {
      name: 'Anita Desai',
      role: 'Head of Education',
      bio: 'Designing world-class curricula that prepare professionals for the future of work.',
      image: 'AD',
      linkedin: '#'
    },
    {
      name: 'Meera Patel',
      role: 'Head of Partnerships',
      bio: 'Connecting with DEI-focused companies to create more inclusive hiring practices.',
      image: 'MP',
      linkedin: '#'
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Foundation',
      description: 'Streelancer was founded with a vision to create India\'s first women-centric professional platform.'
    },
    {
      year: '2022',
      title: 'First 1K Users',
      description: 'Reached our first thousand users and launched the Academy program with industry mentors.'
    },
    {
      year: '2023',
      title: 'Marketplace Launch',
      description: 'Launched the job marketplace connecting diverse talent with progressive employers.'
    },
    {
      year: '2024',
      title: 'Community Growth',
      description: 'Built a thriving community of 10,000+ professionals supporting each other\'s growth.'
    }
  ];

  const stats = [
    { number: '15,000+', label: 'Professionals Empowered' },
    { number: '500+', label: 'Partner Companies' },
    { number: '95%', label: 'Job Placement Rate' },
    { number: '50+', label: 'Industry Mentors' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-coral-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                About <span className="text-purple-600">Streelancer</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're on a mission to create India's most inclusive professional platform, 
                where everyone has equal opportunities to learn, grow, and thrive in their careers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-purple-600">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Our <span className="text-purple-600">Mission</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To bridge the gap between diverse talent and progressive employers by creating 
                  an ecosystem that supports inclusive hiring, continuous learning, and meaningful 
                  career advancement for underrepresented groups in the workforce.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that diversity drives innovation, and every professional deserves 
                  access to opportunities that match their skills and aspirations, regardless 
                  of their background, career breaks, or personal circumstances.
                </p>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                Join Our Mission
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-400 to-coral-400 rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <Globe className="w-16 h-16" />
                  <h3 className="text-2xl font-bold">Creating Global Impact</h3>
                  <p className="opacity-90">
                    Building a world where talent is recognized and rewarded based on 
                    merit, not demographics, creating opportunities for sustainable 
                    career growth for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from product development to community building.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Journey</span>
            </h2>
            <p className="text-lg text-gray-600">
              From a small idea to a growing platform that's changing lives.
            </p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-coral-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-purple-600">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate individuals working together to create meaningful change in the workplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-coral-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {member.image}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-purple-600 font-medium">{member.role}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Connect
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-coral-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Be Part of the Change?
          </h2>
          <p className="text-xl opacity-90">
            Join thousands of professionals who are building more inclusive workplaces together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Join Our Community
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              Partner with Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
