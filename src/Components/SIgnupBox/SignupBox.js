
import React, { useState } from 'react';
import './Signup.css';
import { axiosinstance } from '../../config/axiosintance';
import { useNavigate } from 'react-router-dom';

function SignupBox() {
    const [signupData, setSignupData] = useState({
        username: '',
        mob: '',
        email: '',
        password: '',
        cnfPassword: ''
    });

    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();  // Prevent page reload on submit

        // Validate if passwords match
        if (signupData.password !== signupData.cnfPassword) {
            alert('Passwords do not match!');
            return;
        }

        axiosinstance.post(`${process.env.REACT_APP_API_URL}/users/signup`, signupData)
            .then((res) => {
                console.log('Sign-up successful:', res.data);
                navigate("/login");  // Redirect to login after successful signup
            })
            .catch((err) => {
                // Improved error handling for more details
                if (err.response) {
                    // Server responded with an error status
                    console.log('Error during sign-up:', err.response.data);
                } else if (err.request) {
                    // Request was made but no response received
                    console.log('Error during sign-up, no response received:', err.request);
                } else {
                    // Any other error
                    console.log('Error during sign-up:', err.message);
                }
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value
        });
    };

    return (
        <div className="login-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        value={signupData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="mob">Mobile</label>
                    <input
                        type="number"
                        name="mob"
                        className="form-control"
                        value={signupData.mob}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={signupData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={signupData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cnfPassword">Confirm Password</label>
                    <input
                        type="password"
                        name="cnfPassword"
                        className="form-control"
                        value={signupData.cnfPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn-primary">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupBox;
