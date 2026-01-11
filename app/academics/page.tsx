import Link from "next/link";

export default function Academics() {
  const programs = [
    {
      title: 'Class 9-10',
      grade: 'Secondary Education',
      description: 'A comprehensive curriculum focusing on foundational subjects with emphasis on mathematics, science, languages, and social studies to prepare students for board examinations.',
      features: ['Board Preparation', 'Practical Learning', 'Sports & Arts', 'Character Development'],
    },
    {
      title: 'Class 11-12',
      grade: 'Higher Secondary',
      description: 'Specialized streams with advanced coursework preparing students for competitive examinations, higher education, and career pathways.',
      features: ['Science Stream', 'Commerce Stream', 'Arts Stream', 'Career Guidance'],
    },
    {
      title: 'Co-Curricular Activities',
      grade: 'All Levels',
      description: 'Holistic development through various activities including sports, arts, music, drama, and leadership programs.',
      features: ['Sports Programs', 'Arts & Culture', 'Music & Drama', 'Leadership Training'],
    },
    {
      title: 'Special Programs',
      grade: 'All Levels',
      description: 'Specialized programs for academic excellence, competitive exam preparation, and skill development.',
      features: ['Olympiad Preparation', 'Competitive Exams', 'Skill Development', 'Summer Camps'],
    },
  ];

  return (
    <div>
      {/* Banner/Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop&auto=format)",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-900/80" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl">
              Academics
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto">
              Excellence in Education Across All Levels
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mt-4">
              Comprehensive curriculum designed for holistic development
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Academic Programs</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive academic programs are designed to nurture intellectual curiosity, 
              critical thinking, and holistic development.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <p className="text-primary-100">{program.grade}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 leading-relaxed">{program.description}</p>
                    <ul className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Curriculum Highlights</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A well-rounded curriculum covering all essential subjects and skills
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  subject: 'Science',
                  description: 'Physics, Chemistry, Biology with hands-on laboratory experiences and practical applications.',
                  icon: '🔬',
                },
                {
                  subject: 'Mathematics',
                  description: 'Comprehensive math curriculum from fundamentals to advanced topics with problem-solving focus.',
                  icon: '📐',
                },
                {
                  subject: 'Languages',
                  description: 'English, Hindi, and additional language options to develop communication skills.',
                  icon: '📝',
                },
                {
                  subject: 'Social Studies',
                  description: 'History, Geography, Civics, and Economics to understand society and global perspectives.',
                  icon: '🌍',
                },
                {
                  subject: 'Computer Science',
                  description: 'Modern technology, programming, and digital literacy for the digital age.',
                  icon: '💻',
                },
                {
                  subject: 'Arts & Physical Education',
                  description: 'Creative arts, music, and physical education for holistic development.',
                  icon: '🎨',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.subject}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Academic Calendar</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important dates and events throughout the academic year
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <div className="space-y-8">
                {[
                  { period: 'First Term', dates: 'April - September', events: 'Classes Begin, Unit Tests, Mid-Term Examinations, Parent-Teacher Meetings' },
                  { period: 'Second Term', dates: 'October - March', events: 'Annual Examinations, Results, Annual Day, Prize Distribution' },
                  { period: 'Summer Break', dates: 'April - May', events: 'Vacation Period, Optional Enrichment Programs' },
                ].map((term, index) => (
                  <div key={index} className="border-l-4 border-primary-600 pl-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{term.period}</h3>
                    <p className="text-primary-600 font-semibold mb-2">{term.dates}</p>
                    <p className="text-gray-600 leading-relaxed">{term.events}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore More</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/academics/about"
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/20 transition-colors border border-white/20"
              >
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-2">About Academics</h3>
                <p className="text-primary-100 text-sm">Learn more about our academic philosophy and approach</p>
              </Link>
              <Link
                href="/admissions"
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/20 transition-colors border border-white/20"
              >
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-2">Admissions</h3>
                <p className="text-primary-100 text-sm">Start your journey with us. Apply for admission</p>
              </Link>
              <Link
                href="/downloads"
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/20 transition-colors border border-white/20"
              >
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-xl font-bold mb-2">Downloads</h3>
                <p className="text-primary-100 text-sm">Access forms, syllabus, and academic documents</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
