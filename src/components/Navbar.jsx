import React from 'react';
import { Search } from 'lucide-react';
import Dropdown from './Dropdown';
import { NavLink } from 'react-router-dom';  // Import NavLink for active styling
import Logo from './Logo';
import PropTypes from 'prop-types';

// NavLinkItem Component for navigation items with hover and active styles
const NavLinkItem = ({ href, children }) => (
  <NavLink
    to={href}
    className="text-gray-600 transition-colors duration-200 ease-in-out hover:text-black text-xl"
    // ="text-black"  // Active link styles
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const blogDropdownItems = [
    { label: 'Interview Q/A', href: '/about/our-story' },
    { label: 'Blogs', href: '/Blogs' },
    { label: 'Experience', href: '/about/careers' },
  ];

  const resumeDropdownItems = [
    { label: 'Sample Resume', href: '/services/web-development' },
    { label: 'Submit Resume', href: '/services/app-development' },
    { label: 'Resume Review', href: '/services/seo' },
  ];

  const jobDropdownItems = [
    { label: 'Data Analyst', href: '/services/web-development' },
    { label: 'SDE', href: '/services/app-development' },
    { label: 'Data Scientist', href: '/services/seo' },
    { label: 'HR', href: '/services/seo' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <Logo />
        </NavLink>

        <nav className="hidden md:flex space-x-6">
          <NavLinkItem href="/">Home</NavLinkItem>
          <Dropdown title="Jobs" items={jobDropdownItems} />
          <Dropdown title="Resume Review" items={resumeDropdownItems} />
          <Dropdown title="Blogs" items={blogDropdownItems} />
          <NavLinkItem href="/aboutus">About Us</NavLinkItem>
        </nav>

        <form onSubmit={(e) => e.preventDefault()} className="relative">
          <input
            type="text"
            placeholder="Search jobs..."
            className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search className="h-5 w-5 text-gray-400" />
          </button>
        </form>
      </div>
    </header>
  );
}

// PropTypes for Dropdown
NavLinkItem.propTypes = {
  href: PropTypes.string.isRequired,  // 'href' is required and should be a string
  children: PropTypes.node.isRequired, // 'children' should be a valid React node and required
};
