import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, verifyOtp, resendOtp } from '../api'; // Import your API functions

export default function Register() {
    const [name, setName] = useState(''); // Add name state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1); // Step 1: Registration, Step 2: OTP Verification
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state
        setLoading(true); // Set loading state

        try {
            // Send name, email, and password in the required format
            await registerUser({ name, email, password }); // Call the registration API
            setLoading(false); // Turn off loading state
            setStep(2); // Move to OTP verification step
        } catch (err) {
            setLoading(false); // Turn off loading state
            setError(err.response?.data?.message || 'Registration failed.'); // Show error message
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state
        setLoading(true); // Set loading state

        try {
            const response = await verifyOtp({ email, otp }); // Call the API to verify OTP
            const { token } = response.data; // Assuming the token is returned in response.data
            localStorage.setItem('token', token); // Store token in localStorage
            setLoading(false); // Turn off loading state
            navigate('/home'); // Redirect to dashboard
        } catch (err) {
            setLoading(false); // Turn off loading state
            setError(err.response?.data?.message || 'OTP verification failed.'); // Show error message
        }
    };

    const handleResendOtp = async () => {
        setError(null); // Reset error state
        setLoading(true); // Set loading state

        try {
            await resendOtp(email); // Call the API to resend OTP
            setLoading(false); // Turn off loading state
            alert('OTP resent to your email.'); // Notify user
        } catch (err) {
            setLoading(false); // Turn off loading state
            setError(err.response?.data?.message || 'Failed to resend OTP.'); // Show error message
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={step === 1 ? handleRegister : handleVerifyOtp} className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4">{step === 1 ? 'Register' : 'Verify OTP'}</h2>
                {error && <p className="text-red-500">{error}</p>}
                {loading && <p>Loading...</p>}

                {step === 1 && (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 border rounded"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700">OTP</label>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full px-4 py-2 border rounded"
                                placeholder="Enter the OTP sent to your email"
                                required
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleResendOtp} // Resend OTP when clicked
                            className="w-full bg-gray-400 text-white py-2 rounded hover:bg-gray-500"
                        >
                            Resend OTP
                        </button>
                    </>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    disabled={loading} // Disable button during loading
                >
                    {loading ? (step === 1 ? 'Registering...' : 'Verifying...') : (step === 1 ? 'Register' : 'Verify OTP')}
                </button>
                
                {step === 1 && (
                    <p className="mt-4 text-center">
                        Already have an account?{' '}
                        <span
                            className="text-blue-600 cursor-pointer hover:underline"
                            onClick={() => navigate('/login')} // Navigate to login page
                        >
                            Login
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
}
