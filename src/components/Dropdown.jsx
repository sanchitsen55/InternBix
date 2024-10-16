import React, { useState } from 'react';
import PropTypes from 'prop-types'


const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div
    
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      

    >
      {/* Dropdown trigger */}
      <button
        className="text-gray-600 hover:text-gray-900 focus:outline-none text-xl"
        onClick={handleClick}
      >
        {title}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul 
        className="absolute left-0 bg-white border border-gray-300 rounded-lg shadow-lg 
                   overflow-y-auto min-w-[200px] w-auto z-[50]" // Added z-index class here
      >
          {items.map((item) => (
            <li key={item.label} className=" hover:bg-gray-100">
              <a
                href={item.href}
                className="block px-1 py-1 text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


Dropdown.propTypes={
  title:PropTypes.string,
  items:PropTypes.arrayOf(             
    PropTypes.shape({
      label: PropTypes.string.isRequired, 
      href: PropTypes.string.isRequired   
    })
  )
}

export default Dropdown;
