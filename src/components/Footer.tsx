
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const platformLinks = [
    { name: 'Academy', href: '/academy' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'CXO On Demand', href: '/marketplace' },
    { name: 'Community', href: '/community' },
    { name: 'Dei Benchmark', href: '/about' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/about' },
    { name: 'Blog', href: '/community' },
    { name: 'Press', href: '/about' },
    { name: 'Contact', href: '/about' }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-coral-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Streelancer</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              India's largest women-first platform for inclusive career building.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Instagram className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Twitter className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-900">Platform</h3>
            <ul className="space-y-3">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-900">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-900">Subscribe</h3>
            <p className="text-gray-600 text-sm">
              Get the latest updates and offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-500 text-sm">
            Made by Shefali Jain
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
