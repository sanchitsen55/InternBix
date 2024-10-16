import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Internbix</h1>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        At Internbix, we are passionate about bridging the gap between talented students and the best internship opportunities available in the industry. Founded with the vision of empowering students to gain real-world experience, we are committed to making internships accessible, meaningful, and impactful.
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        Our mission is to connect students with opportunities that align with their skills, passion, and career goals. We aim to provide a platform where students can find internships that not only enhance their knowledge but also build a foundation for their future careers.
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">What We Do</h2>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        Internbix offers a wide range of internships across various industries, from tech startups to established corporations. Our focus is to help students find the right internship, gain hands-on experience, and create meaningful professional connections.
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Us?</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
        <li>We prioritize student development and learning.</li>
        <li>Our internships are designed to give practical experience and industry exposure.</li>
        <li>We collaborate with top companies to provide a diverse range of opportunities.</li>
        <li>We support students with mentorship and career guidance throughout their journey.</li>
      </ul>

      <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">Join Us</h2>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        Whether you're a student looking for an internship or a company searching for fresh talent, Internbix is your go-to platform. Together, we can shape the future of tomorrow's workforce.
      </p>

      <div className="text-center mt-8">
        <a
          href="/contact"
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
