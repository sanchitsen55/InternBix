import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import EmployerJobPosting from './components/EmployerJobPosting';
import Login from './components/Login';
import Register from './components/Register';
import Blogs from './components/Blogs'

function App() {
  return (
    <Router>
      {/* Navbar component */}
      <Navbar />

      <Routes>
        {/* Defining Routes for the pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/homeemployer" element={<EmployerJobPosting />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element= {<Blogs/>}/>
      </Routes>

      {/* Footer component */}
      <Footer />
    </Router>
  );
}

export default App;




// import React, { useState } from 'react';
// import {
//   registerUser,
//   verifyOtp,
//   resendOtp,
//   loginUser,
//   getAllJobs,
//   getVerifiedJobs,
//   postJob
// } from './api';

// const App = () => {
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });
//   const [otpData, setOtpData] = useState({
//     email: '',
//     otp: ''
//   });
//   const [jobDate, setJobDate] = useState('');
//   const [jobData, setJobData] = useState({
//     jobTitle: '',
//     description: '',
//     experience: '',
//     location: ''
//   });

//   const handleRegister = async () => {
//     try {
//       const response = await registerUser(userData);
//       console.log('User Registered: ', response.data);
//     } catch (error) {
//       console.error('Error registering user: ', error);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     try {
//       const response = await verifyOtp(otpData);
//       console.log('OTP Verified: ', response.data);
//     } catch (error) {
//       console.error('Error verifying OTP: ', error);
//     }
//   };

//   const handleResendOtp = async () => {
//     try {
//       const response = await resendOtp(otpData.email);
//       console.log('OTP Resent: ', response.data);
//     } catch (error) {
//       console.error('Error resending OTP: ', error);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await loginUser({ email: userData.email, password: userData.password });
//       console.log('User Logged In: ', response.data);
//     } catch (error) {
//       console.error('Error logging in: ', error);
//     }
//   };

//   const handleGetAllJobs = async () => {
//     try {
//       const response = await getAllJobs(jobDate);
//       console.log('All Jobs: ', response.data);
//     } catch (error) {
//       console.error('Error fetching all jobs: ', error);
//     }
//   };

//   const handleGetVerifiedJobs = async () => {
//     try {
//       const response = await getVerifiedJobs(jobDate);
//       console.log('Verified Jobs: ', response.data);
//     } catch (error) {
//       console.error('Error fetching verified jobs: ', error);
//     }
//   };

//   const handlePostJob = async () => {
//     try {
//       const response = await postJob(jobData);
//       console.log('Job Posted: ', response.data);
//     } catch (error) {
//       console.error('Error posting job: ', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Internbix API Interaction</h1>

//       {/* Register Form */}
//       <div>
//         <h2>Register</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           value={userData.name}
//           onChange={(e) => setUserData({ ...userData, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={userData.email}
//           onChange={(e) => setUserData({ ...userData, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={userData.password}
//           onChange={(e) => setUserData({ ...userData, password: e.target.value })}
//         />
//         <button onClick={handleRegister}>Register</button>
//       </div>

//       {/* OTP Verification */}
//       <div>
//         <h2>Verify OTP</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={otpData.email}
//           onChange={(e) => setOtpData({ ...otpData, email: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="OTP"
//           value={otpData.otp}
//           onChange={(e) => setOtpData({ ...otpData, otp: e.target.value })}
//         />
//         <button onClick={handleVerifyOtp}>Verify OTP</button>
//         <button onClick={handleResendOtp}>Resend OTP</button>
//       </div>

//       {/* Login Form */}
//       <div>
//         <h2>Login</h2>
//         <button onClick={handleLogin}>Login</button>
//       </div>

//       {/* Job Listings */}
//       <div>
//         <h2>Job Listings</h2>
//         <input
//           type="text"
//           placeholder="Jobs Available Date"
//           value={jobDate}
//           onChange={(e) => setJobDate(e.target.value)}
//         />
//         <button onClick={handleGetAllJobs}>Get All Jobs</button>
//         <button onClick={handleGetVerifiedJobs}>Get Verified Jobs</button>
//       </div>

//       {/* Post Job */}
//       <div>
//         <h2>Post Job</h2>
//         <input
//           type="text"
//           placeholder="Job Title"
//           value={jobData.jobTitle}
//           onChange={(e) => setJobData({ ...jobData, jobTitle: e.target.value })}
//         />
//         <textarea
//           placeholder="Job Description"
//           value={jobData.description}
//           onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Experience"
//           value={jobData.experience}
//           onChange={(e) => setJobData({ ...jobData, experience: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={jobData.location}
//           onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
//         />
//         <button onClick={handlePostJob}>Post Job</button>
//       </div>
//     </div>
//   );
// };

// export default App;
