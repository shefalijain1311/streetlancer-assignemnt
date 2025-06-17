import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Users, Star, Award, Laptop } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Academy = () => {
  const courses = [
    {
      id: 1,
      title: 'Digital Marketing Mastery',
      description: 'Learn social media marketing, SEO, content strategy, and analytics for career success.',
      duration: '8 weeks',
      level: 'Beginner',
      students: 2400,
      rating: 4.8,
      price: '₹12,999',
      image: '/placeholder.svg',
      skills: ['Social Media', 'SEO', 'Analytics', 'Content Strategy']
    },
    {
      id: 2,
      title: 'UX/UI Design Fundamentals',
      description: 'Master design thinking, prototyping, and user research to create amazing user experiences.',
      duration: '10 weeks',
      level: 'Beginner',
      students: 1800,
      rating: 4.9,
      price: '₹15,999',
      image: '/placeholder.svg',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems']
    },
    {
      id: 3,
      title: 'Virtual Assistant Excellence',
      description: 'Comprehensive training for VAs covering admin tasks, client management, and remote work skills.',
      duration: '6 weeks',
      level: 'Beginner',
      students: 3200,
      rating: 4.7,
      price: '₹8,999',
      image: '/placeholder.svg',
      skills: ['Admin Skills', 'Client Management', 'Time Management', 'Communication']
    },
    {
      id: 4,
      title: 'Data Analytics for Business',
      description: 'Learn Excel, Power BI, and data visualization to make data-driven business decisions.',
      duration: '12 weeks',
      level: 'Intermediate',
      students: 1500,
      rating: 4.8,
      price: '₹18,999',
      image: '/placeholder.svg',
      skills: ['Excel', 'Power BI', 'Data Visualization', 'Business Intelligence']
    },
    {
      id: 5,
      title: 'Content Writing & Copywriting',
      description: 'Master the art of persuasive writing for blogs, websites, and marketing campaigns.',
      duration: '8 weeks',
      level: 'Beginner',
      students: 2800,
      rating: 4.6,
      price: '₹11,999',
      image: '/placeholder.svg',
      skills: ['Content Writing', 'Copywriting', 'SEO Writing', 'Brand Voice']
    },
    {
      id: 6,
      title: 'Project Management Professional',
      description: 'Learn Agile, Scrum, and project management tools to lead teams effectively.',
      duration: '10 weeks',
      level: 'Intermediate',
      students: 1200,
      rating: 4.9,
      price: '₹22,999',
      image: '/placeholder.svg',
      skills: ['Agile', 'Scrum', 'Leadership', 'Project Planning']
    }
  ];

  const mentors = [
    {
      name: 'Priya Sharma',
      role: 'Digital Marketing Director',
      company: 'Google',
      experience: '12+ years',
      specialty: 'Digital Marketing & Strategy',
      image: '/placeholder.svg'
    },
    {
      name: 'Anita Desai',
      role: 'Senior UX Designer',
      company: 'Adobe',
      experience: '10+ years',
      specialty: 'UX/UI Design & Research',
      image: '/placeholder.svg'
    },
    {
      name: 'Meera Patel',
      role: 'Data Science Manager',
      company: 'Microsoft',
      experience: '15+ years',
      specialty: 'Data Analytics & Business Intelligence',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-coral-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Streelancer <span className="text-purple-600">Academy</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-relevant courses with live mentorship, designed specifically for women, 
                returnees, and diverse professionals ready to upskill and advance their careers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                Browse Courses
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg">
                Talk to Mentor
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">15K+</div>
                <div className="text-gray-600">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-500">50+</div>
                <div className="text-gray-600">Expert Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-500">95%</div>
                <div className="text-gray-600">Job Placement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">4.8</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular <span className="text-purple-600">Courses</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully curated courses designed to get you job-ready in high-demand fields.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-coral-100 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-purple-600 opacity-50" />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full">
                      {course.level}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                  <p className="text-gray-600 text-sm">{course.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {course.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-purple-600">{course.price}</div>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Learn from Industry <span className="text-purple-600">Experts</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get mentored by successful women leaders from top companies who understand your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-400 to-coral-400 rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                  <p className="text-purple-600 font-medium">{mentor.role}</p>
                  <p className="text-gray-600">{mentor.company}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">{mentor.experience}</span>
                  </div>
                  <p className="text-sm text-gray-600">{mentor.specialty}</p>
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
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl opacity-90">
            Join thousands of women who have successfully transitioned to high-paying remote careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Start Learning Today
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academy;
