"use client";

import { useState } from 'react';
import { Menu, X, User, LogOut, LogIn, UserPlus, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('JohnDoe');

  const handleLogout = () => {
    setIsAuthenticated(false);
    console.log('Logging out...');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo/Brand */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center space-x-1 sm:space-x-2">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              <span className="text-lg sm:text-xl font-bold text-gray-900 truncate">BlogSite</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2 xl:space-x-4">
            <a href="/" className="text-gray-700 hover:text-blue-600 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </a>
            <a href="/blogs" className="text-gray-700 hover:text-blue-600 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors">
              All Blogs
            </a>

            {isAuthenticated ? (
              <>
                <a href="/create" className="text-gray-700 hover:text-blue-600 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Create Blog
                </a>
                <div className="flex items-center space-x-2 xl:space-x-3 ml-2 xl:ml-4 pl-2 xl:pl-4 border-l border-gray-300">
                  <div className="hidden xl:flex items-center space-x-2 text-gray-700">
                    <User className="h-4 w-4 xl:h-5 xl:w-5" />
                    <span className="text-sm font-medium max-w-20 truncate">{username}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white px-3 xl:px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2 xl:space-x-3 ml-2 xl:ml-4 pl-2 xl:pl-4 border-l border-gray-300">
                <a
                  href="/login"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <LogIn className="h-4 w-4" />
                  <span className="hidden sm:inline">Login</span>
                </a>
                <a
                  href="/register"
                  className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 xl:px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <UserPlus className="h-4 w-4" />
                  <span className="hidden sm:inline">Register</span>
                </a>
              </div>
            )}
          </div>

          {/* Tablet Navigation (md-lg) */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700 max-w-16 truncate">{username}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <a
                  href="/login"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                  className="flex items-center text-gray-700 hover:text-blue-600 px-2 py-2 rounded-md text-sm transition-colors"
                >
                  <LogIn className="h-4 w-4" />
                </a>
                <a
                  href="/register"
                  className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm transition-colors"
                >
                  <UserPlus className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-1.5 sm:p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="px-3 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
            <a
              href="/"
              className="block text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2.5 rounded-md text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/blogs"
              className="block text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2.5 rounded-md text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Blogs
            </a>

            {isAuthenticated ? (
              <>
                <a
                  href="/create"
                  className="block text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2.5 rounded-md text-base font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Create Blog
                </a>
                <div className="pt-3 pb-2 border-t border-gray-200 mt-2">
                  <div className="flex items-center px-3 py-2">
                    <User className="h-5 w-5 text-gray-700 mr-3 flex-shrink-0" />
                    <span className="text-base font-medium text-gray-700 truncate">{username}</span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="mt-2 w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2.5 rounded-md text-base font-medium transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="pt-3 pb-2 border-t border-gray-200 mt-2 space-y-2">
                <a
                  href="/login"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2.5 rounded-md text-base font-medium transition-colors border border-gray-300"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </div>
                </a>
                <a
                  href="/register"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2.5 rounded-md text-base font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <UserPlus className="h-4 w-4" />
                    <span>Register</span>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}