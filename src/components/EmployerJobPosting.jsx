import React, { useState } from 'react';
import { Save, Briefcase, MapPin, DollarSign, Clock, Calendar } from 'lucide-react';
import { postJob } from '../api'; // Import postJob from api.js

const InputField = ({ label, id, type = "text", placeholder, value, onChange, icon: Icon }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type={type}
        id={id}
        className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

const TextAreaField = ({ label, id, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      id={id}
      rows="4"
      className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  </div>
);

export default function EmployerJobPosting() {
  const [jobData, setJobData] = useState({
    jobTitle: '',
    description: '',
    applicationLink: '',
    dateOfRelease: Math.floor(Date.now() / 1000), // Current timestamp in seconds
    applicationOpenTill: '', // To be set by user
    experience: '',
    location: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Format the job data as required
      const formattedData = {
        jobTitle: jobData.jobTitle,
        description: jobData.description,
        applicationLink: jobData.applicationLink,
        dateOfRelease: jobData.dateOfRelease,
        applicationOpenTill: jobData.applicationOpenTill,
        experience: jobData.experience,
        location: jobData.location,
      };

      // Call the API to post the job
      await postJob(formattedData);
      setSuccess('Job posted successfully!');
    } catch (err) {
      setError('Failed to post the job. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Post a New Job</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          <InputField
            label="Job Title"
            id="jobTitle"
            placeholder="e.g. Senior Software Engineer"
            value={jobData.jobTitle}
            onChange={handleInputChange}
            icon={Briefcase}
          />
          <TextAreaField
            label="Job Description"
            id="description"
            placeholder="Describe the job responsibilities, requirements, and any other relevant details..."
            value={jobData.description}
            onChange={handleInputChange}
          />
          <InputField
            label="Application Link"
            id="applicationLink"
            placeholder="Link for applicants to apply"
            value={jobData.applicationLink}
            onChange={handleInputChange}
            icon={Briefcase}
          />
          <InputField
            label="Experience Required"
            id="experience"
            placeholder="e.g. 2-3 years"
            value={jobData.experience}
            onChange={handleInputChange}
            icon={Clock}
          />
          <InputField
            label="Location"
            id="location"
            placeholder="e.g. Kolkata"
            value={jobData.location}
            onChange={handleInputChange}
            icon={MapPin}
          />
          <InputField
            label="Date of Release"
            id="dateOfRelease"
            type="date"
            value={new Date(jobData.dateOfRelease * 1000).toISOString().split('T')[0]} // Convert timestamp to date string
            onChange={handleInputChange}
            icon={Calendar}
          />
          <InputField
            label="Application Open Till"
            id="applicationOpenTill"
            type="date"
            value={jobData.applicationOpenTill}
            onChange={handleInputChange}
            icon={Calendar}
          />
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              disabled={loading}
            >
              {loading ? 'Posting Job...' : (
                <>
                  <Save className="h-5 w-5 mr-2" />
                  Post Job
                </>
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
