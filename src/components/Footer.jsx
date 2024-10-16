import React from 'react';
import PropTypes from 'prop-types';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'; // Social icons
import Logo from './Logo'; // Assuming you have a Logo component
import { Link } from 'react-router-dom';

// SocialIcon Component with Props Validation
const SocialIcon = ({ href, Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
    <Icon className="w-6 h-6" />
  </a>
);

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,  // Validates the `href` prop as a required string
  Icon: PropTypes.elementType.isRequired,  // Validates the `Icon` prop as a required component type
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between mb-8">
          
          {/* Logo and Description */}
          <div className="flex-grow w-full sm:w-1/5 mb-6 md:mb-0">
            <Link to="/" className="flex items-center mb-4 space-x-2">
              <Logo />
            </Link>
            <p className="text-sm">
              Find your dream job with Internbix.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-grow w-full sm:w-1/5 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/jobs" className="hover:underline">Jobs</Link></li>
              <li><Link to="/resume" className="hover:underline">Resume</Link></li>
              <li><Link to="/blogs" className="hover:underline">Blogs</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex-grow w-full sm:w-1/5 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Mumbai, India, 400001</Link></li>
              <li><Link to="/jobs" className="hover:underline">Phone: (+91) 96088-99999</Link></li>
              <li><Link to="/resume" className="hover:underline">Email: info@internbix.com</Link></li>
            </ul>          </div>

          {/* About Us */}
          <div className="flex-grow w-full sm:w-1/5 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:underline">Our Story</Link></li>
              <li><Link to="/team" className="hover:underline">Our Team</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex-grow w-full sm:w-1/5 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialIcon href="https://www.linkedin.com/company/internbix1/" Icon={Linkedin} />
              <SocialIcon href="https://twitter.com/internbix1" Icon={Twitter} />
              <SocialIcon href="https://www.facebook.com/internbix" Icon={Facebook} />
              <SocialIcon href="https://www.instagram.com/internbix1/" Icon={Instagram} />
            </div>

            <div className="bt">
              <button className=' mt-2 mb-2 px-2 py-2 bg-zinc-400 rounded-lg'>Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Internbix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
