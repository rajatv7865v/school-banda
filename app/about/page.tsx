import Link from "next/link";
import Image from "next/image";

export default function About() {
  const teamMembers = [
    {
      name: "Shri Shyamlal Mishra",
      role: "Founder",
      qualification: "M.A., M.Ed., Ph.D.",
      experience: "20+ Years",
      description: "Leading with vision and dedication",
      image: "/images/team/shyamlal_mishra.jpeg",
    },
    {
      name: "Brajesh Chandra Mishra",
      role: "Managing Director",
      qualification: "M.Sc., M.Ed.",
      experience: "18+ Years",
      description: "Fostering academic excellence",
      image: "/images/team/Brijesh_chandra.jpeg",
    },
    {
      name: "Saroj Kumar Verma",
      role: "Principal",
      qualification: "M.A., M.Ed.",
      experience: "15+ Years",
      description: "Shaping curriculum and learning",
      image: "/images/team/saroj_kumar_verma.jpeg",
    },
    {
      name: "Joga Singh",
      role: "Manager",
      qualification: "M.Com., MBA",
      experience: "12+ Years",
      description: "Ensuring smooth operations",
      image: "/images/team/joga_singh.jpeg",
    },
  ];

  const statistics = [
    { number: "1500+", label: "Active Students", icon: "👨‍🎓" },
    { number: "60+", label: "Faculty Members", icon: "👨‍🏫" },
    { number: "35+", label: "Years of Excellence", icon: "🏆" },
    { number: "10000+", label: "Alumni", icon: "🎓" },
    { number: "99%", label: "Passing Ratio", icon: "✅" },
    { number: "4+", label: "Labs", icon: "🔬" },
    { number: "2+", label: "Playgrounds", icon: "🛝" },
    { number: "50+", label: "Activities", icon: "🎲" },
  ];

  const whyChooseUs = [
    {
      title: "Experienced Faculty",
      description:
        "Our faculty consists of highly qualified and experienced educators dedicated to student success.",
      icon: "👨‍🏫",
    },
    {
      title: "Modern Infrastructure",
      description:
        "State-of-the-art facilities including smart classrooms, labs, and sports complexes.",
      icon: "🏫",
    },
    {
      title: "Holistic Development",
      description:
        "Focus on academic excellence along with character building and personality development.",
      icon: "🌟",
    },
    {
      title: "Affordable Education",
      description:
        "Quality education accessible to all with reasonable fees and scholarship programs.",
      icon: "💰",
    },
    {
      title: "Career Guidance",
      description:
        "Comprehensive career counseling and guidance for students' future pathways.",
      icon: "🎯",
    },
    {
      title: "Extracurricular Activities",
      description:
        "Wide range of sports, arts, and cultural activities for overall personality development.",
      icon: "⚽",
    },
  ];

  return (
    <div>
      {/* Banner/Hero Section with Image */}
      <section className="relative h-[60vh] min-h-[500px] max-h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{
            // rotate: "-45deg",
            backgroundImage:
              "url('/images/about-us.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-900/80" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl">
              About Our Institution
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-white/95 max-w-3xl mx-auto">
              Shri Gayatri Mahashakti Sikhshan Sanshthan Inter College
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Excellence in Education Since Our Foundation
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Welcome to Our Institution
              </h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Shri Gayatri Mahashakti Sikhshan Sanshthan Inter College is a
                premier educational institution committed to providing quality
                education and holistic development to students. Established with
                a vision to create leaders of tomorrow, we have been at the
                forefront of educational excellence for decades.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our institution believes in nurturing not just academic
                excellence but also moral values, critical thinking, and
                leadership skills. We provide a supportive environment where
                every student can explore their potential and achieve their
                dreams.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With state-of-the-art infrastructure, experienced faculty, and
                a comprehensive curriculum, we prepare our students to excel in
                all spheres of life and contribute meaningfully to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Our Mission & Vision
              </h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide quality education that empowers students to become
                  critical thinkers, creative problem solvers, and responsible
                  citizens. We are committed to fostering a love for learning
                  and developing the whole child - academically, socially, and
                  emotionally.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be recognized as a leading educational institution that
                  transforms lives through innovative teaching, modern
                  facilities, and a commitment to excellence. We envision a
                  future where every student reaches their full potential and
                  contributes meaningfully to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our institution stand out
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Our Leadership Team
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders shaping our institution
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 lg:p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-semibold text-sm">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/faculty"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-700 shadow-md hover:shadow-lg transition-all duration-200"
              >
                View All Faculty Members
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Excellence",
                  desc: "Striving for the highest standards in everything we do",
                },
                {
                  title: "Integrity",
                  desc: "Acting with honesty, transparency, and ethical behavior",
                },
                {
                  title: "Innovation",
                  desc: "Embracing new ideas and creative solutions",
                },
                {
                  title: "Respect",
                  desc: "Valuing diversity and treating everyone with dignity",
                },
                {
                  title: "Responsibility",
                  desc: "Taking ownership of our actions and their impact",
                },
                {
                  title: "Collaboration",
                  desc: "Working together to achieve common goals",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-primary-600">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Facilities</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Modern Classrooms",
                "Science Laboratories",
                "Computer Labs",
                "Library & Resource Center",
                "Sports Complex",
                "Art Studios",
                "Auditorium",
                "Cafeteria",
              ].map((facility, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/20 transition-colors"
                >
                  <div className="text-3xl mb-3">🏫</div>
                  <h3 className="font-semibold">{facility}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Take the first step towards a brighter future. Explore our
              programs and start your journey with us today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/admissions"
                className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
              >
                Apply for Admission
              </Link>
              <Link
                href="/contact"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
