import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear the token from localStorage
        localStorage.removeItem('token');
        
        // Redirect to login or home
        navigate('/login');
    }, [navigate]);

    return null;  // No UI needed, this is just for logic
}
