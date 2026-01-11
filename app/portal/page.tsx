'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Portal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in a real app, this would connect to a backend
    if (loginData.username && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ username: '', password: '' });
  };

  if (!isLoggedIn) {
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Student Portal</h1>
            <p className="text-xl text-primary-100">Access Your Academic Information</p>
          </div>
        </section>

        {/* Login Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                    Username or Student ID
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    value={loginData.username}
                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link href="#" className="text-sm text-primary-600 hover:text-primary-700">
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Login
                </button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link href="/admissions" className="text-primary-600 hover:text-primary-700 font-semibold">
                    Apply Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portal Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Portal Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Grades & Transcripts',
                  description: 'View your academic performance and download official transcripts',
                  icon: '📊',
                },
                {
                  title: 'Course Schedule',
                  description: 'Access your class schedule and manage your course selections',
                  icon: '📅',
                },
                {
                  title: 'Assignments',
                  description: 'Submit assignments and track your progress on coursework',
                  icon: '📝',
                },
                {
                  title: 'Library Resources',
                  description: 'Access digital library resources and reserve study materials',
                  icon: '📚',
                },
                {
                  title: 'Financial Information',
                  description: 'View tuition statements and manage payment information',
                  icon: '💰',
                },
                {
                  title: 'Campus Events',
                  description: 'Stay updated on campus events and register for activities',
                  icon: '🎉',
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Dashboard View (after login)
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, {loginData.username}!</h1>
              <p className="text-primary-100">Student Dashboard</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'Current GPA', value: '3.85', change: '+0.12', icon: '📊' },
              { title: 'Active Courses', value: '6', change: '', icon: '📚' },
              { title: 'Assignments Due', value: '3', change: 'This Week', icon: '📝' },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{stat.icon}</div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                    {stat.change && (
                      <div className="text-sm text-green-600">{stat.change}</div>
                    )}
                  </div>
                </div>
                <h3 className="text-gray-600 font-medium">{stat.title}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Grades */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Grades</h2>
              <div className="space-y-4">
                {[
                  { course: 'Mathematics', grade: 'A', score: '95%' },
                  { course: 'Science', grade: 'A-', score: '92%' },
                  { course: 'English', grade: 'B+', score: '88%' },
                  { course: 'History', grade: 'A', score: '94%' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.course}</h3>
                      <p className="text-sm text-gray-600">Score: {item.score}</p>
                    </div>
                    <div className="text-2xl font-bold text-primary-600">{item.grade}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Assignments */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Upcoming Assignments</h2>
              <div className="space-y-4">
                {[
                  { course: 'Mathematics', assignment: 'Chapter 5 Quiz', due: 'March 25' },
                  { course: 'Science', assignment: 'Lab Report', due: 'March 27' },
                  { course: 'English', assignment: 'Essay Draft', due: 'March 28' },
                ].map((item, index) => (
                  <div key={index} className="p-4 border-l-4 border-primary-600 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800">{item.assignment}</h3>
                    <p className="text-sm text-gray-600">{item.course}</p>
                    <p className="text-sm text-primary-600 mt-1">Due: {item.due}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'View Schedule',
                'Submit Assignment',
                'Library Resources',
                'Financial Aid',
                'Campus Events',
                'Academic Calendar',
                'Contact Advisor',
                'Settings',
              ].map((link, index) => (
                <button
                  key={index}
                  className="p-4 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors font-medium"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

