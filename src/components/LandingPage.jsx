import React from "react";
import PropTypes from "prop-types";
import {
  ArrowRight,
  Briefcase,
  Users,
  CheckCircle,
  Star,
  Table,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Button Component with Props Validation
const Button = ({ onClick, children, primary }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-200 ${
      primary
        ? "bg-primary text-white hover:bg-primary-dark"
        : "bg-white text-primary border-2 border-primary hover:bg-gray-100"
    }`}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
};

// FeatureCard Component with Props Validation
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
    <div className="p-3 bg-primary-light rounded-full mb-4">
      <Icon className="w-12 h-12 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default function LandingPage() {
  const navigate = useNavigate();

  // Function to handle role selection
  const handleRoleSelect = (role) => {
    if (role === "employer") {
      navigate("/homeemployer"); // Navigate to employer page
    } else if (role === "employee") {
      navigate("/login"); // Navigate to login page
    }
    console.log(`Selected role: ${role}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Landing Page Header Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container mx-auto px-4 text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Connect with Your Dream Job or Ideal Candidate
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Whether you&apos;re looking for your next career move or searching
              for top talent, we&apos;ve got you covered. Choose your path and
              let&apos;s get started!
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Button onClick={() => handleRoleSelect("employer")} primary>
                I’m an Employer <Briefcase className="inline-block ml-2" />
              </Button>
              <Button onClick={() => handleRoleSelect("employee")}>
                I’m Job Seeking <Users className="inline-block ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">
      Why Choose{" "}
      <span className="text-red-700 font-bold">Internbix</span>?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1: Large Talent Pool */}
      <FeatureCard
        icon={Users}
        title="Large Talent Pool"
        description="Gain access to a vast and diverse range of job seekers or positions in various fields, ensuring you find the right fit, no matter your skill level or career aspirations. Our platform connects you with opportunities that are curated to your specific needs."
      />

      {/* Card 2: Easy Application */}
      <FeatureCard
        icon={Briefcase}
        title="Easy Application"
        description="Enjoy a smooth and intuitive application process designed for efficiency. Whether you're posting jobs or applying for them, our user-friendly interface makes navigating the platform easy, reducing the hassle and time needed to get started."
      />

      {/* Card 3: Smart Matching */}
      <FeatureCard
        icon={ArrowRight}
        title="Smart Matching"
        description="Our advanced AI-driven matching system analyzes your preferences, skills, and needs to recommend the most relevant job positions or candidates. This ensures a better match, saving you time while increasing your chances of success."
      />

      {/* Card 4: Mentorship */}
      <FeatureCard
        icon={CheckCircle}
        title="Mentorship"
        description="Get access to dedicated mentorship programs that help both employers and job seekers grow and thrive. From career guidance to workplace collaboration tips, our mentors offer valuable insights to foster successful partnerships."
      />

      {/* Card 5: Innovative Projects */}
      <FeatureCard
        icon={Star}
        title="Innovative Projects"
        description="Unleash your potential by working on cutting-edge projects posted by industry-leading companies. These projects are designed to challenge your creativity and skills, offering you the chance to make meaningful contributions while growing your portfolio."
      />

      {/* Card 6: Job Opportunities */}
      <FeatureCard
        icon={Table}
        title="Job Opportunities"
        description="Access a wide range of personalized job opportunities tailored to your skills and career goals. With the help of our smart-matching algorithm, finding the right position becomes faster and easier, giving you a competitive edge in the market."
      />
    </div>
  </div>
</section>

        {/* ----------------------- Our Mission ------------------------- */}
        <section className="bg-gray-100 py-10 px-4">
          <div className="container mx-auto text-center">
            <div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Get to know <span className="text-red-700">Internbix</span>{" "}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="text-red-700 font-bold">Internbix</span> is a
              leading IT consulting company that empowers students with valuable
              content and resources to excel in their IT education. We provide
              expert guidance, training, and insights into various IT courses,
              helping students stay ahead in their academic and professional
              journey. Our goal is to bridge the gap between education and
              industry by offering a platform for learning and development the
              entire things.
            </p>{" "}
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">
              With a focus on practical knowledge and real-world applications,
              Internbix prepares students for the fast-paced world of
              technology. Whether it&apos;s software development, data science,
              or IT consulting, we provide the tools and resources necessary to
              succeed. Join us to unlock your potential and start your career in
              the IT industry.
            </p>
          </div>
          
          </div>
        </section>
      </main>
    </div>
  );
}
