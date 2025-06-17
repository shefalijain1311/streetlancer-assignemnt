import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Users, Heart, Calendar, Bookmark, ThumbsUp, Share, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Community = () => {
  const discussionTopics = [
    {
      id: 1,
      title: 'How to negotiate salary as a returning professional?',
      author: 'Priya S.',
      avatar: 'PS',
      category: 'Career Advice',
      replies: 24,
      likes: 45,
      timeAgo: '2 hours ago',
      isHot: true,
      excerpt: 'After a 3-year career break, I\'m struggling with salary negotiations. Any tips from those who\'ve been through this?'
    },
    {
      id: 2,
      title: 'Remote work setup for maximum productivity',
      author: 'Anita M.',
      avatar: 'AM',
      category: 'Work-Life Balance',
      replies: 18,
      likes: 32,
      timeAgo: '5 hours ago',
      isHot: false,
      excerpt: 'Sharing my home office setup that has doubled my productivity while working remotely.'
    },
    {
      id: 3,
      title: 'Breaking into UX design as a career changer',
      author: 'Meera K.',
      avatar: 'MK',
      category: 'Career Transition',
      replies: 31,
      likes: 67,
      timeAgo: '1 day ago',
      isHot: true,
      excerpt: 'My journey from marketing to UX design - resources, challenges, and key learnings.'
    },
    {
      id: 4,
      title: 'Freelancing vs Full-time: Making the decision',
      author: 'Swati R.',
      avatar: 'SR',
      category: 'Freelancing',
      replies: 42,
      likes: 89,
      timeAgo: '2 days ago',
      isHot: true,
      excerpt: 'Comparing the pros and cons of freelancing vs full-time employment for working mothers.'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Women in Tech Networking Event',
      date: 'Dec 15, 2024',
      time: '6:00 PM IST',
      type: 'Virtual',
      attendees: 145,
      host: 'Streelancer Community',
      description: 'Connect with fellow women in technology, share experiences, and build meaningful professional relationships.'
    },
    {
      id: 2,
      title: 'Resume Review Workshop',
      date: 'Dec 18, 2024',
      time: '7:00 PM IST',
      type: 'Virtual',
      attendees: 89,
      host: 'Career Experts',
      description: 'Get your resume reviewed by industry experts and learn how to make it stand out.'
    },
    {
      id: 3,
      title: 'Freelancer Success Stories',
      date: 'Dec 22, 2024',
      time: '5:00 PM IST',
      type: 'Virtual',
      attendees: 67,
      host: 'Success Stories',
      description: 'Hear from successful freelancers about their journey, challenges, and tips for success.'
    }
  ];

  const mentors = [
    {
      name: 'Dr. Ritu Sharma',
      role: 'VP of Engineering',
      company: 'Google',
      expertise: 'Tech Leadership, Career Growth',
      rating: 4.9,
      sessions: 150,
      image: 'RS'
    },
    {
      name: 'Kavya Patel',
      role: 'Creative Director',
      company: 'Ogilvy',
      expertise: 'Design, Creative Strategy',
      rating: 4.8,
      sessions: 120,
      image: 'KP'
    },
    {
      name: 'Neha Gupta',
      role: 'Startup Founder',
      company: 'FinTech Innovations',
      expertise: 'Entrepreneurship, Business',
      rating: 4.9,
      sessions: 95,
      image: 'NG'
    }
  ];

  const categories = [
    { name: 'Career Advice', count: 1240, color: 'bg-purple-100 text-purple-600' },
    { name: 'Freelancing', count: 856, color: 'bg-coral-100 text-coral-600' },
    { name: 'Work-Life Balance', count: 642, color: 'bg-teal-100 text-teal-600' },
    { name: 'Skill Development', count: 789, color: 'bg-orange-100 text-orange-600' },
    { name: 'Networking', count: 523, color: 'bg-pink-100 text-pink-600' },
    { name: 'Success Stories', count: 345, color: 'bg-green-100 text-green-600' }
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
                Streelancer <span className="text-purple-600">Community</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A safe space to learn, share, and grow — built for women, queer talent, 
                and second-career professionals. Connect, collaborate, and thrive together.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                Join Community
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg">
                Start Discussion
              </Button>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">12K+</div>
                <div className="text-gray-600">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-500">2.5K</div>
                <div className="text-gray-600">Discussions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-500">150+</div>
                <div className="text-gray-600">Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">50+</div>
                <div className="text-gray-600">Mentors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Discussions</h2>
                <div className="space-y-6">
                  {discussionTopics.map((topic) => (
                    <div key={topic.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                      <div className="flex space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-coral-400 rounded-full flex items-center justify-center text-white font-bold">
                          {topic.avatar}
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className="font-bold text-gray-900 hover:text-purple-600 cursor-pointer">
                                  {topic.title}
                                </h3>
                                {topic.isHot && (
                                  <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">🔥 Hot</span>
                                )}
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                                <span>by {topic.author}</span>
                                <span>•</span>
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                  categories.find(c => c.name === topic.category)?.color || 'bg-gray-100 text-gray-600'
                                }`}>
                                  {topic.category}
                                </span>
                                <span>•</span>
                                <span>{topic.timeAgo}</span>
                              </div>
                              <p className="text-gray-600 text-sm">{topic.excerpt}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <button className="flex items-center space-x-1 hover:text-purple-600">
                              <ThumbsUp className="w-4 h-4" />
                              <span>{topic.likes}</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-purple-600">
                              <MessageCircle className="w-4 h-4" />
                              <span>{topic.replies} replies</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-purple-600">
                              <Share className="w-4 h-4" />
                              <span>Share</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-purple-600">
                              <Bookmark className="w-4 h-4" />
                              <span>Save</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    View All Discussions
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">Popular Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${category.color}`}>
                          {category.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-gray-900 mb-2">{event.title}</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date} at {event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                      <Button className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-sm">
                        Join Event
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Mentors */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4">Featured Mentors</h3>
                <div className="space-y-4">
                  {mentors.map((mentor, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-coral-400 rounded-full flex items-center justify-center text-white font-bold">
                        {mentor.image}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm">{mentor.name}</h4>
                        <p className="text-xs text-gray-600">{mentor.role} at {mentor.company}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center space-x-1">
                            <Award className="w-3 h-3 text-yellow-500" />
                            <span className="text-xs text-gray-600">{mentor.rating}</span>
                          </div>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-600">{mentor.sessions} sessions</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-purple-600 text-purple-600 hover:bg-purple-50">
                  View All Mentors
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-coral-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Join Our Growing Community?
          </h2>
          <p className="text-xl opacity-90">
            Connect with like-minded professionals, get career advice, and grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Join Community
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              Browse Discussions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
