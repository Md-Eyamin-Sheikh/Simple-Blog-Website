"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Calendar, User, Clock, ArrowLeft, Heart, MessageCircle, Share2 } from 'lucide-react';

export default function BlogDetails() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock blog data - replace with actual API call
    const mockBlog = {
      id: params.id,
      title: "Getting Started with Next.js 14",
      content: `
        <h2>Introduction</h2>
        <p>Next.js 14 brings exciting new features and improvements that make building React applications even more powerful and efficient. In this comprehensive guide, we'll explore the key features and learn how to get started.</p>
        
        <h2>Key Features</h2>
        <p>Next.js 14 introduces several groundbreaking features:</p>
        <ul>
          <li><strong>Turbopack:</strong> The new Rust-based bundler that's significantly faster than Webpack</li>
          <li><strong>Server Actions:</strong> Simplified server-side data mutations</li>
          <li><strong>Partial Prerendering:</strong> Combine static and dynamic content seamlessly</li>
          <li><strong>Enhanced App Router:</strong> More stable and feature-rich routing system</li>
        </ul>
        
        <h2>Getting Started</h2>
        <p>To create a new Next.js 14 project, run the following command:</p>
        <pre><code>npx create-next-app@latest my-app</code></pre>
        
        <p>This will set up a new project with all the latest features and best practices configured out of the box.</p>
        
        <h2>Conclusion</h2>
        <p>Next.js 14 represents a significant step forward in React development, offering improved performance, better developer experience, and more powerful features for building modern web applications.</p>
      `,
      excerpt: "Learn the fundamentals of Next.js and build modern web applications with the latest features...",
      author: "Sarah Johnson",
      authorId: "1",
      date: "Nov 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
      likes: 234,
      comments: 45,
      views: 1200,
      tags: ["Next.js", "React", "Web Development", "JavaScript"]
    };

    // Simulate API delay
    setTimeout(() => {
      setBlog(mockBlog);
      setLoading(false);
    }, 500);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <a href="/blogs" className="text-blue-600 hover:text-blue-700">← Back to Blogs</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-4xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <a 
              href="/blogs" 
              className="inline-flex items-center text-blue-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blogs
            </a>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-blue-100">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Stats Bar */}
          <div className="border-b border-gray-200 px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-gray-500">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>{blog.likes}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>{blog.comments}</span>
                </div>
                <div className="text-sm">
                  {blog.views} views
                </div>
              </div>
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="px-8 py-8">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Tags */}
          <div className="border-t border-gray-200 px-8 py-6">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Author Card */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{blog.author}</h3>
              <p className="text-gray-600">Content Creator & Developer</p>
              <p className="text-gray-500 mt-2">
                Passionate about web development and sharing knowledge with the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
