import Link from 'next/link';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Annual Science Fair Showcases Student Innovation',
      date: 'March 20, 2024',
      category: 'Events',
      excerpt: 'Students from all grades presented innovative science projects at our annual science fair, demonstrating creativity and scientific thinking.',
      image: '🔬',
    },
    {
      id: 2,
      title: 'New Athletic Facilities Open',
      date: 'March 15, 2024',
      category: 'Facilities',
      excerpt: 'State-of-the-art athletic facilities including a new gymnasium and outdoor sports complex are now open for student use.',
      image: '⚽',
    },
    {
      id: 3,
      title: 'Students Win Regional Math Competition',
      date: 'March 10, 2024',
      category: 'Achievements',
      excerpt: 'Our math team secured first place in the regional mathematics competition, showcasing exceptional problem-solving skills.',
      image: '🏆',
    },
    {
      id: 4,
      title: 'Spring Concert Series Begins',
      date: 'March 5, 2024',
      category: 'Arts',
      excerpt: 'The spring concert series kicks off with performances from our orchestra, choir, and band ensembles.',
      image: '🎵',
    },
    {
      id: 5,
      title: 'College Acceptance Letters Arrive',
      date: 'February 28, 2024',
      category: 'Achievements',
      excerpt: 'Seniors celebrate college acceptances with 98% of graduates accepted to their first-choice universities.',
      image: '🎓',
    },
    {
      id: 6,
      title: 'Community Service Day Success',
      date: 'February 22, 2024',
      category: 'Community',
      excerpt: 'Students and faculty participated in community service activities, making a positive impact in our local area.',
      image: '🤝',
    },
  ];

  const upcomingEvents = [
    { date: 'April 5', title: 'Parent-Teacher Conferences', time: '3:00 PM - 7:00 PM' },
    { date: 'April 12', title: 'Spring Sports Day', time: '9:00 AM - 3:00 PM' },
    { date: 'April 20', title: 'Art Exhibition Opening', time: '6:00 PM' },
    { date: 'May 1', title: 'Spring Musical Performance', time: '7:00 PM' },
    { date: 'May 15', title: 'Graduation Ceremony', time: '2:00 PM' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">News & Events</h1>
          <p className="text-xl text-primary-100">Stay Updated with Latest Happenings</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Latest News</h2>
            <div className="space-y-6">
              {newsItems.map((item) => (
                <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-6xl p-8">
                      {item.image}
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mr-3">
                          {item.category}
                        </span>
                        <span className="text-gray-500 text-sm">{item.date}</span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <Link
                        href={`/news/${item.id}`}
                        className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-primary-600 pl-4">
                    <div className="text-primary-600 font-semibold mb-1">{event.date}</div>
                    <h3 className="font-semibold text-gray-800 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-primary-600 text-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
              <p className="mb-4 text-primary-100">
                Subscribe to our newsletter to receive updates about news, events, and important announcements.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

