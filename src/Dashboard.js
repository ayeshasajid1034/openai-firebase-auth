// src/Dashboard.js
import React from 'react';
import { useAuthState } from './auth-context';
import { logout } from './auth-service';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const { user } = useAuthState();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error("Logout Failed", error);
        }
    };

    return (
        <div className="container mt-4">
            <h1>Dashboard</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Welcome, {user?.email}</h5>
                    <p className="card-text">This is your dashboard where you can manage your account.</p>
                    <button onClick={handleLogout} className="btn btn-danger">Log Out</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
