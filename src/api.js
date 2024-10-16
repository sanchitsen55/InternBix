import axios from 'axios';

// Base URL for your APIs
const BASE_URL = 'http://internbix.ap-south-1.elasticbeanstalk.com';

// Register user
export const registerUser = async (userData) => {
  const config = {
    headers: {
      'X-API-KEY': 'reg@123'
    }
  };
  return await axios.post(`${BASE_URL}/user/register`, userData, config);
};

// Verify OTP
export const verifyOtp = async (otpData) => {
  return await axios.post(`${BASE_URL}/user/verify-otp`, otpData);
};

// Resend OTP
export const resendOtp = async (email) => {
  const config = {
    headers: {
      'email': email
    }
  };
  return await axios.post(`${BASE_URL}/user/resend-otp`, {}, config);
};

// Login user
export const loginUser = async (loginData) => {
  return await axios.post(`${BASE_URL}/user/login`, loginData);
};

// Get all jobs
export const getAllJobs = async (date) => {
  const config = {
    headers: {
      'X-API-KEY': 'reg@123'
    }
  };
  return await axios.post(`${BASE_URL}/job/get-all-jobs`, { jobsAvailableDate: date }, config);
};

// Get verified jobs
export const getVerifiedJobs = async (date) => {
  const config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MDA1ZW1haWxAZ21haWwuY29tIiwiaWF0IjoxNzI4MDM5NjIzfQ.o-2Qsj2q0Qw_Z1gAyZa1JRNNZj5fPGrKi1gVELV-dzE'
    }
  };
  return await axios.post(`${BASE_URL}/job/get/verified-jobs`, { jobsAvailableDate: date }, config);
};

// Post a new job
export const postJob = async (jobData) => {
  const config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MDA1ZW1haWxAZ21haWwuY29tIiwiaWF0IjoxNzI4MDM5NjIzfQ.o-2Qsj2q0Qw_Z1gAyZa1JRNNZj5fPGrKi1gVELV-dzE'
    }
  };
  return await axios.post(`${BASE_URL}/job/post`, jobData, config);
};
