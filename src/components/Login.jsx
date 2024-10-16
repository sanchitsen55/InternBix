import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api'; // Import loginUser from api.js

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state
        setLoading(true); // Set loading state

        try {
            const response = await loginUser({ email, password }); // Call the login API from api.js
            const { token } = response.data; // Assuming the token is returned in response.data
            localStorage.setItem('token', token); // Store token in localStorage
            setLoading(false); // Turn off loading state
            navigate('/home'); // Redirect to dashboard
        } catch (err) {
            setLoading(false); // Turn off loading state
            setError(err.response?.data?.message || 'Invalid login credentials'); // Show error message
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                {loading && <p>Loading...</p>}
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
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    disabled={loading} // Disable button during loading
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <p className="mt-4 text-center">
                    Don’t have an account?{' '}
                    <span
                        className="text-blue-600 cursor-pointer hover:underline"
                        onClick={() => navigate('/register')} // Navigate to registration page
                    >
                        Register
                    </span>
                </p>
            </form>
        </div>
    );
}
