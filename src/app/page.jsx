"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Shield, TrendingUp, BookOpen, User } from 'lucide-react';



// Hero Section
function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 animate-fade-in">
            Share Your Stories with
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              The World
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create, discover, and engage with amazing content. Join our community of writers and readers passionate about sharing knowledge and stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/register" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/blogs" className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
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
            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
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
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      if (data.success) {
        // Get only the first 3 blogs for homepage
        setBlogs(data.blogs.slice(0, 3));
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover insightful articles from our community
          </p>
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading latest posts...</p>
          </div>
        ) : blogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div key={blog._id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <span className="font-medium text-gray-700">{blog.author}</span>
                      <span>{isClient ? new Date(blog.createdAt).toLocaleDateString() : ''}</span>
                    </div>
                    <a href={`/blogs/${blog._id}`} className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/blogs" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
                View All Blogs
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">No blog posts yet</p>
            <a href="/blogs" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Create First Blog
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

// Author Section
function Author() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-16">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Become a Featured Author
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Join thousands of writers sharing their expertise and passion. Build your audience, share your knowledge, and make an impact with your words.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-blue-100">Unlimited blog posts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-blue-100">Advanced analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-blue-100">Community support</span>
                </li>
              </ul>
              <a href="/register" className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
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
                    <p className="text-blue-200">Active Writers</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <p className="text-2xl font-bold">50M+</p>
                    <p className="text-sm text-blue-200">Monthly Readers</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <p className="text-2xl font-bold">1M+</p>
                    <p className="text-sm text-blue-200">Published Articles</p>
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