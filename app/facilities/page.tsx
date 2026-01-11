import Link from "next/link";

export default function Facilities() {
  const facilities = [
    {
      title: 'Modern Laboratories',
      description: 'Well-equipped science laboratories (Physics, Chemistry, Biology) with all instruments as per CBSE norms. All setups are always in working order to ease the experimental practice of students.',
      icon: '🔬',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&auto=format',
      features: ['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Computer Lab'],
    },
    {
      title: 'Hybrid Library',
      description: 'Hybrid library with separate sections for juniors, seniors, and teachers. Holds a rich collection of printed as well as electronic resources including books, journals, and digital media.',
      icon: '📚',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&auto=format',
      features: ['Extensive Book Collection', 'Digital Resources', 'Reading Areas', 'Research Support'],
    },
    {
      title: 'Smart Classrooms',
      description: 'Fully equipped smart classrooms with modern technology including projectors, interactive whiteboards, and audio-visual systems to enhance the learning experience.',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&auto=format',
      features: ['Interactive Boards', 'Audio-Visual Systems', 'Internet Connectivity', 'Comfortable Seating'],
    },
    {
      title: 'Sports Complex',
      description: 'Comprehensive sports facilities including playgrounds, indoor sports areas, and equipment for various sports activities to promote physical fitness and teamwork.',
      icon: '⚽',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop&auto=format',
      features: ['Playground', 'Indoor Games', 'Sports Equipment', 'Coaching Facilities'],
    },
    {
      title: 'Transportation',
      description: 'Well-managed transportation system with a fleet of buses. Each bus driver and conductor is well-trained and equipped for any kind of contingency to ensure safe commuting.',
      icon: '🚌',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop&auto=format',
      features: ['Fleet of Buses', 'Trained Staff', 'GPS Tracking', 'Safety Measures'],
    },
    {
      title: 'Cafeteria',
      description: 'Clean and hygienic cafeteria providing nutritious meals and snacks. The cafeteria follows strict hygiene standards and offers healthy food options for students and staff.',
      icon: '🍽️',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&auto=format',
      features: ['Nutritious Meals', 'Hygienic Environment', 'Varied Menu', 'Affordable Prices'],
    },
    {
      title: 'Auditorium',
      description: 'Spacious and well-equipped auditorium for events, assemblies, performances, and presentations. Equipped with sound systems, lighting, and seating for large gatherings.',
      icon: '🎭',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&auto=format',
      features: ['Sound System', 'Lighting System', 'Large Capacity', 'Stage Facilities'],
    },
    {
      title: 'Computer Labs',
      description: 'State-of-the-art computer laboratories with modern computers, high-speed internet, and latest software to support digital learning and computer education.',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format',
      features: ['Modern Computers', 'High-Speed Internet', 'Latest Software', 'IT Support'],
    },
    {
      title: 'Art & Music Rooms',
      description: 'Dedicated spaces for arts and music with necessary equipment and instruments. These rooms provide creative spaces for students to explore their artistic talents.',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&auto=format',
      features: ['Art Supplies', 'Musical Instruments', 'Creative Spaces', 'Expert Guidance'],
    },
    {
      title: 'Hostel Facilities',
      description: 'Safe and comfortable hostel accommodation for students with all essential amenities. Separate hostels for boys and girls with proper security and care.',
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop&auto=format',
      features: ['Comfortable Rooms', 'Dining Facilities', '24/7 Security', 'Warden Support'],
    },
    {
      title: 'Medical Room',
      description: 'Well-equipped medical room with first aid facilities and a qualified nurse available during school hours to attend to any medical needs of students.',
      icon: '🏥',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format',
      features: ['First Aid', 'Qualified Nurse', 'Medical Equipment', 'Emergency Care'],
    },
    {
      title: 'Playground & Open Spaces',
      description: 'Spacious playgrounds and open areas for recreational activities, outdoor games, and physical exercise to ensure overall development of students.',
      icon: '🌳',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=600&fit=crop&auto=format',
      features: ['Playground', 'Green Spaces', 'Outdoor Equipment', 'Recreational Areas'],
    },
  ];

  const facilityCategories = [
    { name: 'Academic', facilities: ['Modern Laboratories', 'Hybrid Library', 'Smart Classrooms', 'Computer Labs'] },
    { name: 'Sports & Recreation', facilities: ['Sports Complex', 'Playground & Open Spaces'] },
    { name: 'Support Facilities', facilities: ['Transportation', 'Cafeteria', 'Medical Room', 'Hostel Facilities'] },
    { name: 'Cultural', facilities: ['Auditorium', 'Art & Music Rooms'] },
  ];

  return (
    <div>
      {/* Banner/Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop&auto=format)",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-900/80" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl">
              Facilities
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto">
              State-of-the-Art Infrastructure
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mt-4">
              Modern facilities designed to enhance learning and development
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Our World-Class Facilities
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Shree Gayatri Mahashakti Sikhshan Sanshthan Inter College, we believe that 
              excellent infrastructure is essential for quality education. Our campus is 
              equipped with modern facilities that create an ideal learning environment 
              and support the holistic development of our students.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From well-equipped laboratories to spacious playgrounds, from digital libraries 
              to smart classrooms, every facility is designed with the student&apos;s learning 
              and growth in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Explore Our Facilities</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern infrastructure designed for excellence in education
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 text-4xl bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                      {facility.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {facility.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Features:</p>
                      <ul className="space-y-1">
                        {facility.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility Statistics */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Infrastructure at a Glance</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '50+', label: 'Classrooms', icon: '🏫' },
                { number: '10+', label: 'Laboratories', icon: '🔬' },
                { number: '5+', label: 'Computer Labs', icon: '💻' },
                { number: '1', label: 'Large Library', icon: '📚' },
                { number: '1', label: 'Auditorium', icon: '🎭' },
                { number: '2+', label: 'Playgrounds', icon: '⚽' },
                { number: '1', label: 'Sports Complex', icon: '🏋️' },
                { number: '100%', label: 'Wi-Fi Coverage', icon: '📡' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/20 transition-colors"
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Facilities by Category</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive facilities organized by purpose
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilityCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200"
                >
                  <h3 className="text-2xl font-bold mb-4 text-primary-600">
                    {category.name}
                  </h3>
                  <ul className="space-y-2">
                    {category.facilities.map((facility, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-lg shadow-lg border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Experience Our Facilities
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a campus tour to see our facilities in person. 
              Contact us to arrange a visit and explore our infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
              >
                Schedule a Tour
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
