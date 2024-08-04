import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage container-fluid d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-4 mb-4">Welcome to SIEM Nimbus</h1>
      <p className="lead mb-4">
        SIEM Nimbus is your comprehensive solution for security information and event management. 
        Monitor system health, manage security alerts, analyze logs, and generate detailed reports 
        to keep your organization secure.
      </p>
      <div>
        <Link to="/login">
          <button className="btn btn-primary mx-4">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-secondary mx-4">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
