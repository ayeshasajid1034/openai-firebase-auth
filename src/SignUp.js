// src/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from './auth-service';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await signup(email, password);
            navigate('/dashboard');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Sign Up</h2>
            <form onSubmit={handleSignUp} className="card card-body">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
                <p className="mt-3">
                    Already have an account? <a href="/login">Log In</a>
                </p>
            </form>
        </div>
    );
}

export default SignUp;
