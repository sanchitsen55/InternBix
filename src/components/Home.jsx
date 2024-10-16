import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// JobCard Component
const JobCard = ({ title, description, location, experience, applicationLink, isVerified, dateOfRelease, applicationOpenTill }) => {
  // Function to format the dates
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return date.toLocaleDateString(); // Format to local date string
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-blue-600">
        {isVerified && <span className="text-green-500 font-bold">[Verified] </span>}
        {title}
      </h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-500 mb-4">Location: {location || 'Not specified'}</p>
      <p className="text-gray-500 mb-4">Experience: {experience}</p>
      <p className="text-gray-500 mb-4">Date Listed: {formatDate(dateOfRelease)}</p>
      <p className="text-gray-500 mb-4">Application Open Till: {formatDate(applicationOpenTill)}</p>
      <a
        href={applicationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-colors duration-300"
      >
        Apply Now
      </a>
    </div>
  );
};

// PropTypes for JobCard
JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string,
  experience: PropTypes.string.isRequired,
  applicationLink: PropTypes.string.isRequired,
  isVerified: PropTypes.bool.isRequired,
  dateOfRelease: PropTypes.number.isRequired, // Unix timestamp (in seconds)
  applicationOpenTill: PropTypes.number.isRequired, // Unix timestamp (in seconds)
};

// Home Component
export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getAllJobs('25-09-2024'); // Replace with dynamic date if needed
        setJobs(response); // Set the job data
      } catch (err) {
        console.error(err);  // Log the error
        setError('Failed to fetch job postings');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8 flex">
        <div className="w-full md:w-3/4 pr-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Latest Job Listings</h1>
          <div className="space-y-6">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <JobCard
                  key={job.id}
                  title={job.jobTitle}
                  description={job.description}
                  location={job.location}
                  experience={job.experience}
                  applicationLink={job.applicationLink}
                  isVerified={job.isVerified}
                  dateOfRelease={job.dateOfRelease}
                  applicationOpenTill={job.applicationOpenTill}
                />
              ))
            ) : (
              <p>No jobs available</p>
            )}
          </div>
        </div>

        <aside className="hidden md:block w-1/4 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/resume-builder" className="text-blue-600 hover:underline">Resume Builder</a></li>
            <li><a href="/career-advice" className="text-blue-600 hover:underline">Career Advice</a></li>
            <li><a href="/salary-calculator" className="text-blue-600 hover:underline">Salary Calculator</a></li>
            <li><a href="/interview-tips" className="text-blue-600 hover:underline">Interview Tips</a></li>
          </ul>
        </aside>
      </main>
    </div>
  );
}

// API Function to get all jobs
const getAllJobs = async (jobsAvailableDate) => {
  const response = await fetch('http://internbix.ap-south-1.elasticbeanstalk.com/job/get-all-jobs', {
    method: 'POST',
    headers: {
      'X-API-KEY': 'reg@123',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ jobsAvailableDate }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data; // Ensure you return the job data in the expected format
};
