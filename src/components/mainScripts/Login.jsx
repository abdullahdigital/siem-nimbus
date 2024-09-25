import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../mainStyles/Login.css';

import user_icon from '../mainAssests/person.png';
import password_icon from '../mainAssests/password.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');

    // Simulate a successful login regardless of input
    try {
      // You can uncomment this section to test with API logic later
      /*
      const response = await fetch('https://api.siem-system.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        navigate('/SIEMDashboard/GeneralDashboard');
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Invalid username or password.');
      }
      */

      // Simulate successful login
      navigate('/SIEMDashboard/GeneralDashboard');
    } catch (error) {
      setErrorMessage('A network error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='login-container'>
      <div className="header">
        <div className="text">Cyber Guard.</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleLogin} className="inputs">
        <div className="input">
          <img src={user_icon} alt="User Icon" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Display error message if login fails */}
        {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}
        <div className="submit-container">
          <button type="submit" className="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
