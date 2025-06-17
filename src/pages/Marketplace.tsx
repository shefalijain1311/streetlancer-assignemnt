import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Filter, MapPin, Clock, DollarSign, Star, Briefcase, Users, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState('freelance');

  const freelanceJobs = [
    {
      id: 1,
      title: 'Social Media Content Creator',
      company: 'TechStart Inc.',
      type: 'Freelance',
      budget: '₹15,000 - ₹25,000',
      duration: '2-3 months',
      location: 'Remote',
      skills: ['Content Creation', 'Social Media', 'Canva', 'Instagram'],
      description: 'Looking for a creative content creator to manage our social media presence and create engaging posts.',
      posted: '2 days ago',
      proposals: 12,
      verified: true
    },
    {
      id: 2,
      title: 'Virtual Assistant - Administrative Support',
      company: 'Global Consulting',
      type: 'Freelance',
      budget: '₹20,000 - ₹30,000',
      duration: 'Ongoing',
      location: 'Remote',
      skills: ['Admin Support', 'Email Management', 'Scheduling', 'Communication'],
      description: 'Seeking an organized VA to handle administrative tasks, email management, and client coordination.',
      posted: '1 day ago',
      proposals: 8,
      verified: true
    },
    {
      id: 3,
      title: 'UX/UI Designer for Mobile App',
      company: 'FinTech Solutions',
      type: 'Freelance',
      budget: '₹40,000 - ₹60,000',
      duration: '3-4 months',
      location: 'Remote',
      skills: ['UI/UX Design', 'Figma', 'Mobile Design', 'User Research'],
      description: 'Design intuitive user interfaces for our mobile banking application.',
      posted: '3 days ago',
      proposals: 15,
      verified: true
    },
    {
      id: 4,
      title: 'Content Writer - Tech Blog',
      company: 'Digital Marketing Agency',
      type: 'Freelance',
      budget: '₹500 - ₹800',
      duration: 'Per article',
      location: 'Remote',
      skills: ['Content Writing', 'SEO', 'Tech Writing', 'Research'],
      description: 'Write engaging tech articles and blog posts for our clients in the technology sector.',
      posted: '1 day ago',
      proposals: 20,
      verified: false
    }
  ];

  const fullTimeJobs = [
    {
      id: 1,
      title: 'Senior Marketing Manager',
      company: 'SaaS Startup',
      type: 'Full-time',
      salary: '₹8,00,000 - ₹12,00,000',
      experience: '5+ years',
      location: 'Remote / Bangalore',
      skills: ['Digital Marketing', 'Growth Hacking', 'Analytics', 'Team Management'],
      description: 'Lead our marketing team and drive user acquisition for our SaaS platform.',
      posted: '5 days ago',
      applicants: 45,
      verified: true
    },
    {
      id: 2,
      title: 'Product Designer',
      company: 'E-commerce Platform',
      type: 'Full-time',
      salary: '₹6,00,000 - ₹10,00,000',
      experience: '3+ years',
      location: 'Remote',
      skills: ['Product Design', 'User Research', 'Prototyping', 'Design Systems'],
      description: 'Shape the future of our e-commerce platform through thoughtful design.',
      posted: '1 week ago',
      applicants: 32,
      verified: true
    },
    {
      id: 3,
      title: 'Customer Success Manager',
      company: 'HR Tech Company',
      type: 'Full-time',
      salary: '₹5,00,000 - ₹8,00,000',
      experience: '2+ years',
      location: 'Remote / Mumbai',
      skills: ['Customer Success', 'Account Management', 'Communication', 'Analytics'],
      description: 'Ensure customer satisfaction and drive retention for our HR software platform.',
      posted: '3 days ago',
      applicants: 28,
      verified: true
    }
  ];

  const categories = [
    { name: 'Design & Creative', count: 245, icon: '🎨' },
    { name: 'Writing & Content', count: 189, icon: '✍️' },
    { name: 'Marketing & Sales', count: 156, icon: '📈' },
    { name: 'Admin & Virtual Assistant', count: 298, icon: '💼' },
    { name: 'Tech & Development', count: 134, icon: '💻' },
    { name: 'Customer Support', count: 167, icon: '🎧' }
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
                Find Your Perfect <span className="text-purple-600">Opportunity</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover freelance gigs and full-time remote positions from DEI-focused companies 
                that value diverse talent and flexible work arrangements.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 p-2 bg-white rounded-2xl shadow-lg">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input 
                    placeholder="Search for jobs, skills, or companies..." 
                    className="pl-10 h-12 border-0 text-lg"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input 
                    placeholder="Location" 
                    className="pl-10 h-12 border-0 md:w-48"
                  />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 h-12 px-8 text-lg">
                  Search Jobs
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1,200+</div>
                <div className="text-gray-600">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-500">500+</div>
                <div className="text-gray-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-500">10K+</div>
                <div className="text-gray-600">Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">95%</div>
                <div className="text-gray-600">Remote Work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Browse by <span className="text-purple-600">Category</span>
            </h2>
            <p className="text-lg text-gray-600">
              Find opportunities in your field of expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{category.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900">{category.name}</h3>
                      <p className="text-gray-600">{category.count} jobs available</p>
                    </div>
                  </div>
                  <div className="text-purple-600">→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('freelance')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'freelance'
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Freelance & Gigs
              </button>
              <button
                onClick={() => setActiveTab('fulltime')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'fulltime'
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Full-time Jobs
              </button>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {(activeTab === 'freelance' ? freelanceJobs : fullTimeJobs).map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                          {job.verified && (
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <p className="text-purple-600 font-medium">{job.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full">
                        {job.type}
                      </span>
                    </div>

                    <p className="text-gray-600">{job.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{activeTab === 'freelance' ? job.budget : job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{activeTab === 'freelance' ? job.duration : `${job.experience} exp`}</span>
                      </div>
                      {activeTab === 'freelance' ? (
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{job.proposals} proposals</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{job.applicants} applicants</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-4">
                    <div className="text-right text-sm text-gray-500">
                      Posted {job.posted}
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Load More Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-coral-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Find Your Dream Job?
          </h2>
          <p className="text-xl opacity-90">
            Join thousands of professionals who have found meaningful work through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Create Profile
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              Post a Job
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;
