import React, { useState } from 'react';
import './Login.css';  
import { useNavigate } from 'react-router-dom';  


function LoginBox() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    
    const navigate = useNavigate();  

    const handleLogin = (event) => {
        event.preventDefault();  
       
        if (loginData.username && loginData.password) {
            console.log('Login successful');
            // localStorage.setItem('token', 'your-auth-token');
            navigate("/blog");  
        } else {
            console.log('Invalid credentials');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        value={loginData.username}
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
                        value={loginData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn-primary">Login</button>
            </form>
        </div>
    );
}

export default LoginBox;

