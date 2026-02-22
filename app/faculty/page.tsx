'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Faculty() {
  const [selectedStaff, setSelectedStaff] = useState<number | null>(null);
  const [messageData, setMessageData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const departments = [
    {
      name: 'Mathematics',
      faculty: [
        {
          id: 1,
          name: 'Dr. Sarah Johnson',
          role: 'Department Head',
          qualification: 'Ph.D. in Mathematics',
          experience: '15 years',
          email: 'sarah.johnson@sgmssic.edu',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format',
        },
        {
          id: 2,
          name: 'Prof. Michael Chen',
          role: 'Senior Lecturer',
          qualification: 'M.S. in Applied Mathematics',
          experience: '12 years',
          email: 'michael.chen@sgmssic.edu',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format',
        },
        {
          id: 3,
          name: 'Ms. Emily Rodriguez',
          role: 'Lecturer',
          qualification: 'M.A. in Mathematics Education',
          experience: '8 years',
          email: 'emily.rodriguez@sgmssic.edu',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format',
        },
      ],
    },
    {
      name: 'Science',
      faculty: [
        {
          id: 4,
          name: 'Dr. Robert Williams',
          role: 'Department Head',
          qualification: 'Ph.D. in Physics',
          experience: '18 years',
          email: 'robert.williams@sgmssic.edu',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
        },
        {
          id: 5,
          name: 'Dr. Lisa Anderson',
          role: 'Senior Lecturer',
          qualification: 'Ph.D. in Chemistry',
          experience: '14 years',
          email: 'lisa.anderson@sgmssic.edu',
          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format',
        },
        {
          id: 6,
          name: 'Prof. David Kim',
          role: 'Lecturer',
          qualification: 'M.S. in Biology',
          experience: '10 years',
          email: 'david.kim@sgmssic.edu',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format',
        },
      ],
    },
    {
      name: 'English & Literature',
      faculty: [
        {
          id: 7,
          name: 'Dr. Jennifer Martinez',
          role: 'Department Head',
          qualification: 'Ph.D. in English Literature',
          experience: '16 years',
          email: 'jennifer.martinez@sgmssic.edu',
          image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&auto=format',
        },
        {
          id: 8,
          name: 'Prof. Christopher Brown',
          role: 'Senior Lecturer',
          qualification: 'M.A. in Creative Writing',
          experience: '11 years',
          email: 'christopher.brown@sgmssic.edu',
          image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&auto=format',
        },
        {
          id: 9,
          name: 'Ms. Amanda Taylor',
          role: 'Lecturer',
          qualification: 'M.A. in English',
          experience: '7 years',
          email: 'amanda.taylor@sgmssic.edu',
          image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&auto=format',
        },
      ],
    },
    {
      name: 'Social Studies',
      faculty: [
        {
          id: 10,
          name: 'Dr. James Wilson',
          role: 'Department Head',
          qualification: 'Ph.D. in History',
          experience: '17 years',
          email: 'james.wilson@sgmssic.edu',
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&auto=format',
        },
        {
          id: 11,
          name: 'Prof. Maria Garcia',
          role: 'Senior Lecturer',
          qualification: 'M.A. in Political Science',
          experience: '13 years',
          email: 'maria.garcia@sgmssic.edu',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&auto=format',
        },
        {
          id: 12,
          name: 'Mr. Thomas Lee',
          role: 'Lecturer',
          qualification: 'M.A. in Geography',
          experience: '9 years',
          email: 'thomas.lee@sgmssic.edu',
          image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&auto=format',
        },
      ],
    },
  ];

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedStaff) {
      const staff = departments.flatMap(dept => dept.faculty).find(f => f.id === selectedStaff);
      alert(`Message sent to ${staff?.name}! They will get back to you soon.`);
      setSelectedStaff(null);
      setMessageData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }
  };


  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessageData({
      ...messageData,
      [e.target.name]: e.target.value,
    });
  };


  const selectedStaffMember = selectedStaff
    ? departments.flatMap(dept => dept.faculty).find(f => f.id === selectedStaff)
    : null;

  return (
    <div>
      {/* Banner/Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/school2.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-900/80" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl">
              Our Faculty
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto">
              Dedicated Educators Committed to Your Success
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mt-4">
              Meet our experienced and passionate teaching staff
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Meet Our Expert Faculty</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our faculty members are highly qualified, experienced educators who are passionate about
              teaching and dedicated to helping students achieve their full potential.
            </p>
          </div>

          {departments.map((dept, deptIndex) => (
            <div key={deptIndex} className="mb-16">
              <h3 className="text-3xl font-bold text-primary-600 mb-8 text-center">{dept.name} Department</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {dept.faculty.map((member) => (
                  <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
                      <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                      <p className="text-sm text-gray-600 mb-2">{member.qualification}</p>
                      <p className="text-sm text-gray-500 mb-4">Experience: {member.experience}</p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedStaff(member.id)}
                          className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm"
                        >
                          Profile
                        </button>
                        <button
                          onClick={() => setSelectedStaff(member.id)}
                          className="flex-1 border-2 border-primary-600 text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-sm"
                        >
                          Message with us
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Faculty Excellence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="text-5xl font-bold mb-2">60+</div>
              <div className="text-primary-100">Faculty Members</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="text-5xl font-bold mb-2">85%</div>
              <div className="text-primary-100">Hold Advanced Degrees</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-primary-100">Average Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Awards & Recognition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Faculty */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Our Faculty Stands Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Expertise',
                description: 'Our faculty members are subject matter experts with advanced degrees and extensive knowledge in their fields.',
                icon: '🎓',
              },
              {
                title: 'Innovation',
                description: 'They employ cutting-edge teaching methods and technology to create engaging learning experiences.',
                icon: '💡',
              },
              {
                title: 'Dedication',
                description: 'Committed to student success, our faculty goes above and beyond to support and mentor students.',
                icon: '❤️',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-primary-600">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Modal */}
      {selectedStaff !== null && selectedStaffMember && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStaff(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Send Message</h2>
                <p className="text-gray-600 text-sm mt-1">To: {selectedStaffMember.name} - {selectedStaffMember.role}</p>
              </div>
              <button
                onClick={() => setSelectedStaff(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleMessageSubmit} className="space-y-6">
                <div>
                  <label htmlFor="msg-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="msg-name"
                    name="name"
                    required
                    value={messageData.name}
                    onChange={handleMessageChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="msg-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="msg-email"
                      name="email"
                      required
                      value={messageData.email}
                      onChange={handleMessageChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="msg-phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="msg-phone"
                      name="phone"
                      value={messageData.phone}
                      onChange={handleMessageChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="msg-subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="msg-subject"
                    name="subject"
                    required
                    value={messageData.subject}
                    onChange={handleMessageChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label htmlFor="msg-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="msg-message"
                    name="message"
                    rows={6}
                    required
                    value={messageData.message}
                    onChange={handleMessageChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedStaff(null)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
