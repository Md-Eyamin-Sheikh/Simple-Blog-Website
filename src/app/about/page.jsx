"use client";

import { useState } from 'react';
import { Menu, X, User, LogOut, LogIn, UserPlus, BookOpen, ArrowRight, Zap, Shield, TrendingUp, Heart, MessageCircle, Eye, Target, Users, Globe } from 'lucide-react';



// About Page Component
function AboutPage() {
  const stats = [
    { number: '10,000+', label: 'Active Writers' },
    { number: '50M+', label: 'Monthly Readers' },
    { number: '1M+', label: 'Published Articles' },
    { number: '150+', label: 'Countries' }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Our Mission',
      description: 'To empower voices and connect minds through the power of written content, making knowledge accessible to everyone.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community First',
      description: 'We believe in building a supportive community where writers and readers can grow, learn, and inspire each other.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Reach',
      description: 'Connecting people across borders, cultures, and languages through stories that matter and ideas that inspire.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              About <span className="text-blue-600">BlogSite</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize content creation and make sharing knowledge easier, more accessible, and more rewarding for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                BlogSite was born from a simple idea: everyone has a story to tell, and everyone deserves to be heard. Founded in 2024, we set out to create a platform that removes the barriers to content creation and makes it easy for anyone to share their knowledge, experiences, and perspectives with the world.
              </p>
              <p>
                What started as a small project has grown into a thriving community of writers, thinkers, and creators from all walks of life. From technology enthusiasts to creative writers, from industry experts to passionate hobbyists, our platform brings together diverse voices united by a love of sharing and learning.
              </p>
              <p>
                Today, we're proud to serve millions of readers and thousands of writers worldwide, fostering meaningful conversations and helping ideas spread across borders and cultures. But we're just getting started. Our commitment to innovation, community, and accessibility drives us to constantly improve and expand what's possible for content creators everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all hover:shadow-xl">
                <div className="inline-block p-4 rounded-xl bg-blue-100 text-blue-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of writers and readers. Share your story, learn from others, and be part of something bigger.
          </p>
          <a href="/register" className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
            Get Started Today
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </section>

     
    </div>
  );
}

export default AboutPage;