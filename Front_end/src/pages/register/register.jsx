import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevents the default form submission behavior (reloading the page)
        try {
            // Sending the user data to the backend
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)  // Convert the React state to a JSON string
            });
            const data = await response.json();  // Parsing the JSON response from the server
            console.log(data);  // Logging the server response to the console
            alert('Registration successful');  // Alerting the user of successful registration
        } catch (error) {
            console.error('Registration failed', error);  // Logging any errors
            alert('Registration failed');  // Alerting the user of a failure in registration
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
            <form onSubmit={handleSubmit}>
                <h1 style={{ textAlign: 'center' }}>Register</h1>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ width: '100%', display: 'block' }}>
                        Username:
                        <input type="text" name="username" value={formData.username} onChange={handleChange} required style={{ width: '100%' }} />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ width: '100%', display: 'block' }}>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%' }} />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ width: '100%', display: 'block' }}>
                        Password:
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required style={{ width: '100%' }} />
                    </label>
                </div>
                <button type="submit" style={{ width: '50%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Register</button>
            </form>
        </div>
    );
}

export default Register;
