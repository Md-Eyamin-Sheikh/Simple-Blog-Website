"use client";

import { useState } from 'react';
import { Menu, X, User, LogOut, LogIn, UserPlus, BookOpen, ArrowRight, Zap, Shield, TrendingUp, Clock, Heart, MessageCircle, Eye } from 'lucide-react';



// Hero Section
function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 animate-fade-in">
            Share Your Stories with
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              The World
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create, discover, and engage with amazing content. Join our community of writers and readers passionate about sharing knowledge and stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/register" className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/blogs" className="bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
              Explore Blogs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast & Easy",
      description: "Create and publish your blogs in minutes with our intuitive editor",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Platform",
      description: "Your data is protected with industry-standard security measures",
      color: "from-green-400 to-cyan-500"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Grow Audience",
      description: "Reach readers worldwide and build your following organically",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose BlogSite?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, share, and grow your content
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
              <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Blog Preview Section
function BlogPreview() {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt: "Learn the fundamentals of Next.js and build modern web applications with the latest features...",
      author: "Sarah Johnson",
      date: "Nov 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
      likes: 234,
      comments: 45,
      views: 1200
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies that will shape how we build websites in 2025...",
      author: "Michael Chen",
      date: "Nov 14, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
      likes: 189,
      comments: 32,
      views: 980
    },
    {
      id: 3,
      title: "Mastering React Hooks",
      excerpt: "Deep dive into React Hooks and learn how to write cleaner, more efficient components...",
      author: "Emily Davis",
      date: "Nov 13, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
      likes: 312,
      comments: 67,
      views: 1540
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover insightful articles from our community
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-indigo-600">
                  {blog.readTime}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <span className="font-medium text-gray-700">{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-gray-500 text-sm">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{blog.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{blog.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{blog.views}</span>
                    </div>
                  </div>
                </div>
                <a href={`/blog/${blog.id}`} className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/blogs" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
            View All Blogs
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Author Section
function Author() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-16">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Become a Featured Author
              </h2>
              <p className="text-lg text-indigo-100 mb-6 leading-relaxed">
                Join thousands of writers sharing their expertise and passion. Build your audience, share your knowledge, and make an impact with your words.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-indigo-100">Unlimited blog posts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-indigo-100">Advanced analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-indigo-100">Community support</span>
                </li>
              </ul>
              <a href="/register" className="inline-flex items-center bg-white text-indigo-600 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
                Start Writing Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-full">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-bold">10,000+</h3>
                    <p className="text-indigo-200">Active Writers</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <p className="text-2xl font-bold">50M+</p>
                    <p className="text-sm text-indigo-200">Monthly Readers</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <p className="text-2xl font-bold">1M+</p>
                    <p className="text-sm text-indigo-200">Published Articles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



// Main Homepage Component
export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      
      <Hero />
      <Features />
      <BlogPreview />
      <Author />
     
    </div>
  );
}