import Link from "next/link";

export default function AboutAcademics() {
  const achievements = [
    {
      year: "2024",
      title: "100% Pass Rate",
      description: "All students successfully passed their board examinations",
      icon: "🎓",
    },
    {
      year: "2023",
      title: "Top 10 Rankings",
      description: "Multiple students secured top 10 positions in state board exams",
      icon: "🏆",
    },
    {
      year: "2022",
      title: "National Recognition",
      description: "School recognized for excellence in STEM education",
      icon: "⭐",
    },
    {
      year: "2021",
      title: "Research Excellence",
      description: "Students published research papers in national journals",
      icon: "📚",
    },
  ];

  const teachingMethods = [
    {
      title: "Interactive Learning",
      description:
        "We believe in active participation and engagement. Our classrooms use interactive methods including discussions, group projects, and hands-on activities to make learning enjoyable and effective.",
      icon: "💡",
    },
    {
      title: "Technology Integration",
      description:
        "Modern technology is seamlessly integrated into our curriculum. Smart classrooms, digital resources, and online platforms enhance the learning experience and prepare students for a digital future.",
      icon: "💻",
    },
    {
      title: "Personalized Attention",
      description:
        "With small class sizes and dedicated faculty, every student receives individualized attention. We identify strengths, address challenges, and provide tailored support to ensure academic success.",
      icon: "👥",
    },
    {
      title: "Practical Application",
      description:
        "Learning extends beyond textbooks. We emphasize real-world applications through experiments, projects, field trips, and internships that connect classroom knowledge to practical scenarios.",
      icon: "🔬",
    },
  ];

  const academicValues = [
    {
      title: "Excellence",
      description:
        "We strive for the highest standards in teaching, learning, and student achievement.",
    },
    {
      title: "Innovation",
      description:
        "We embrace new teaching methodologies and educational technologies to enhance learning.",
    },
    {
      title: "Holistic Development",
      description:
        "We focus on developing not just academic skills, but also critical thinking, creativity, and character.",
    },
    {
      title: "Inclusivity",
      description:
        "We create an inclusive environment where every student can thrive regardless of their background.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Our Academics</h1>
          <p className="text-xl text-primary-100">
            Excellence in Education, Innovation in Teaching
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Our Academic Philosophy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Shree Gayatri Mahashakti Sikhshan Sanshthan Inter College, we believe that education
                is the cornerstone of personal and societal development. Our academic
                program is designed to foster intellectual curiosity, critical
                thinking, and a lifelong love for learning. We are committed to
                providing a comprehensive education that prepares students not just
                for examinations, but for life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our curriculum is carefully crafted to balance academic rigor with
                practical application, ensuring that students understand concepts
                deeply and can apply their knowledge in real-world situations. We
                emphasize holistic development, nurturing students&apos; intellectual,
                social, emotional, and ethical growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
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
                Academic Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To provide a world-class academic education that empowers students
                to achieve their full potential, develop critical thinking skills,
                and become responsible, well-rounded individuals who contribute
                positively to society.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
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
                Academic Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be recognized as a leader in academic excellence, innovation in
                education, and student achievement, setting benchmarks for quality
                education and producing graduates who excel in their chosen fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Teaching Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teachingMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {method.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Academic Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className="text-primary-200 font-semibold mb-2">
                  {achievement.year}
                </div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-primary-100 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Academic Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {academicValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-600"
              >
                <h3 className="text-2xl font-bold mb-3 text-primary-600">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Excellence */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
              Our Dedicated Faculty
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our academic excellence is driven by a team of highly qualified,
              experienced, and dedicated educators. Our faculty members are not just
              teachers; they are mentors, guides, and inspirations who are
              committed to student success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  200+
                </div>
                <div className="text-gray-700">Qualified Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  15+
                </div>
                <div className="text-gray-700">Years Average Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  100%
                </div>
                <div className="text-gray-700">Certified & Trained</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/faculty"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
              >
                Meet Our Faculty
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Join Our Academic Excellence?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Experience quality education that prepares you for success. Explore
            our academic programs and take the first step toward your future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/academics"
              className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              View Academic Programs
            </Link>
            <Link
              href="/admissions"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
