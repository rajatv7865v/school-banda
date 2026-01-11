'use client';

import { useState } from 'react';

export default function Downloads() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'admission', 'academic', 'forms', 'certificates', 'prospectus'];

  const downloadItems = [
    // Admission
    {
      id: 1,
      category: 'admission',
      title: 'Admission Form 2024-25',
      description: 'Application form for new admissions',
      fileType: 'PDF',
      size: '245 KB',
      date: '2024-01-15',
      downloadUrl: '#',
    },
    {
      id: 2,
      category: 'admission',
      title: 'Admission Procedure Guide',
      description: 'Complete guide for admission process',
      fileType: 'PDF',
      size: '512 KB',
      date: '2024-01-15',
      downloadUrl: '#',
    },
    {
      id: 3,
      category: 'admission',
      title: 'Fee Structure 2024-25',
      description: 'Complete fee structure for all classes',
      fileType: 'PDF',
      size: '189 KB',
      date: '2024-01-10',
      downloadUrl: '#',
    },
    {
      id: 4,
      category: 'admission',
      title: 'Required Documents List',
      description: 'List of documents required for admission',
      fileType: 'PDF',
      size: '98 KB',
      date: '2024-01-08',
      downloadUrl: '#',
    },
    // Academic
    {
      id: 5,
      category: 'academic',
      title: 'Academic Calendar 2024-25',
      description: 'Complete academic calendar for the year',
      fileType: 'PDF',
      size: '356 KB',
      date: '2024-01-20',
      downloadUrl: '#',
    },
    {
      id: 6,
      category: 'academic',
      title: 'Syllabus - Class 9-10',
      description: 'Complete syllabus for classes 9 and 10',
      fileType: 'PDF',
      size: '1.2 MB',
      date: '2024-01-18',
      downloadUrl: '#',
    },
    {
      id: 7,
      category: 'academic',
      title: 'Syllabus - Class 11-12',
      description: 'Complete syllabus for classes 11 and 12',
      fileType: 'PDF',
      size: '1.5 MB',
      date: '2024-01-18',
      downloadUrl: '#',
    },
    {
      id: 8,
      category: 'academic',
      title: 'Exam Schedule 2024',
      description: 'Annual examination schedule',
      fileType: 'PDF',
      size: '287 KB',
      date: '2024-01-22',
      downloadUrl: '#',
    },
    {
      id: 9,
      category: 'academic',
      title: 'Time Table Template',
      description: 'Weekly class time table format',
      fileType: 'PDF',
      size: '156 KB',
      date: '2024-01-12',
      downloadUrl: '#',
    },
    // Forms
    {
      id: 10,
      category: 'forms',
      title: 'Fee Payment Form',
      description: 'Form for fee payment submission',
      fileType: 'PDF',
      size: '134 KB',
      date: '2024-01-14',
      downloadUrl: '#',
    },
    {
      id: 11,
      category: 'forms',
      title: 'Leave Application Form',
      description: 'Student leave application form',
      fileType: 'PDF',
      size: '112 KB',
      date: '2024-01-11',
      downloadUrl: '#',
    },
    {
      id: 12,
      category: 'forms',
      title: 'Transport Form',
      description: 'School transport/bus application form',
      fileType: 'PDF',
      size: '178 KB',
      date: '2024-01-13',
      downloadUrl: '#',
    },
    {
      id: 13,
      category: 'forms',
      title: 'Library Membership Form',
      description: 'Library membership application form',
      fileType: 'PDF',
      size: '145 KB',
      date: '2024-01-09',
      downloadUrl: '#',
    },
    {
      id: 14,
      category: 'forms',
      title: 'Hostel Application Form',
      description: 'Hostel accommodation application form',
      fileType: 'PDF',
      size: '198 KB',
      date: '2024-01-16',
      downloadUrl: '#',
    },
    // Certificates
    {
      id: 15,
      category: 'certificates',
      title: 'Transfer Certificate Format',
      description: 'Format for transfer certificate',
      fileType: 'PDF',
      size: '167 KB',
      date: '2024-01-17',
      downloadUrl: '#',
    },
    {
      id: 16,
      category: 'certificates',
      title: 'Character Certificate Format',
      description: 'Format for character certificate',
      fileType: 'PDF',
      size: '123 KB',
      date: '2024-01-17',
      downloadUrl: '#',
    },
    {
      id: 17,
      category: 'certificates',
      title: 'Bonafide Certificate Format',
      description: 'Format for bonafide certificate',
      fileType: 'PDF',
      size: '156 KB',
      date: '2024-01-17',
      downloadUrl: '#',
    },
    // Prospectus
    {
      id: 18,
      category: 'prospectus',
      title: 'School Prospectus 2024-25',
      description: 'Complete school prospectus with all information',
      fileType: 'PDF',
      size: '3.5 MB',
      date: '2024-01-19',
      downloadUrl: '#',
    },
    {
      id: 19,
      category: 'prospectus',
      title: 'Infrastructure Brochure',
      description: 'Detailed information about school facilities',
      fileType: 'PDF',
      size: '2.1 MB',
      date: '2024-01-21',
      downloadUrl: '#',
    },
    {
      id: 20,
      category: 'prospectus',
      title: 'Faculty & Programs Guide',
      description: 'Information about faculty and academic programs',
      fileType: 'PDF',
      size: '1.8 MB',
      date: '2024-01-23',
      downloadUrl: '#',
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? downloadItems 
    : downloadItems.filter(item => item.category === selectedCategory);

  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
      case 'doc':
      case 'docx':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  const handleDownload = (item: typeof downloadItems[0]) => {
    // In a real application, this would trigger the actual download
    alert(`Downloading: ${item.title}`);
    // window.open(item.downloadUrl, '_blank');
  };

  return (
    <div>
      {/* Banner/Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&auto=format)",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-900/80" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl">
              Downloads
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto">
              Important Documents & Forms
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mt-4">
              Access all forms, documents, and information in one place
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-[140px] z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all capitalize ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Documents' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <>
              <div className="mb-8 text-center">
                <p className="text-gray-600">
                  Showing {filteredItems.length} {filteredItems.length === 1 ? 'document' : 'documents'}
                  {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                </p>
              </div>
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 gap-6">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden"
                    >
                      <div className="p-6 flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                            {getFileIcon(item.fileType)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-3">{item.description}</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                {item.fileType}
                              </span>
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                </svg>
                                {item.size}
                              </span>
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                              </span>
                              <span className="px-2 py-1 bg-gray-100 rounded text-gray-600 capitalize">
                                {item.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDownload(item)}
                          className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center gap-2 shadow-md hover:shadow-lg flex-shrink-0"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-xl">No documents found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Need Help?</h2>
              <p className="text-gray-700 mb-6">
                If you need assistance finding a document or have questions about any form, 
                please contact our office. We&apos;re here to help!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:info@sgmssic.edu"
                  className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
