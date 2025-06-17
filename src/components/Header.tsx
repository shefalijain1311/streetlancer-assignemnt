
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AuthModal } from '@/components/auth/AuthModals';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-coral-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Streelancer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${
                isActivePath('/') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <Link 
                to="/marketplace" 
                className={`flex items-center transition-colors ${
                  isActivePath('/marketplace') 
                    ? 'text-purple-600 font-medium' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Find Work <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
                Find Talent <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <Link 
              to="/about" 
              className={`transition-colors ${
                isActivePath('/about') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Why Us
            </Link>
            <Link 
              to="/community" 
              className={`transition-colors ${
                isActivePath('/community') 
                  ? 'text-purple-600 font-medium' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Community
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <AuthModal type="signup">
              <Button variant="ghost" className="text-gray-700 hover:text-purple-600">
                Sign up
              </Button>
            </AuthModal>
            <AuthModal type="login">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Log in
              </Button>
            </AuthModal>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors ${
                  isActivePath('/') 
                    ? 'text-purple-600 font-medium' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/marketplace" 
                className={`transition-colors ${
                  isActivePath('/marketplace') 
                    ? 'text-purple-600 font-medium' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Find Work
              </Link>
              <a href="#" className="text-gray-700 hover:text-purple-600">Find Talent</a>
              <Link 
                to="/about" 
                className={`transition-colors ${
                  isActivePath('/about') 
                    ? 'text-purple-600 font-medium' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Why Us
              </Link>
              <Link 
                to="/community" 
                className={`transition-colors ${
                  isActivePath('/community') 
                    ? 'text-purple-600 font-medium' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <AuthModal type="signup">
                  <Button variant="outline">Sign up</Button>
                </AuthModal>
                <AuthModal type="login">
                  <Button className="bg-purple-600 hover:bg-purple-700">Log in</Button>
                </AuthModal>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
