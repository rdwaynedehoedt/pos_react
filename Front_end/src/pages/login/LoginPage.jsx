import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setErrors({ ...errors, email: '' });
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setErrors({ ...errors, password: '' });
    };

    const validateForm = () => {
        let tempErrors = {};
        let formIsValid = true;

        if (!email) {
            formIsValid = false;
            tempErrors["email"] = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formIsValid = false;
            tempErrors["email"] = "Email is not valid";
        }

        if (!password) {
            formIsValid = false;
            tempErrors["password"] = "Password is required";
        } else if (password.length < 8) {
            formIsValid = false;
            tempErrors["password"] = "Password must be at least 8 characters";
        }

        setErrors(tempErrors);
        return formIsValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log('Login Submitted:', email, password);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={handleEmailChange} required />
                        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePasswordChange} required minLength="8" />
                        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                    </label>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
