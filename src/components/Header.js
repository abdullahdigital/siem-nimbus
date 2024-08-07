import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="dashboard-header d-flex justify-content-between align-items-center p-3 bg-light shadow-sm">
      <div className="header-title text-center flex-grow-1">
        <h1 className="m-0">SIEM Nimbus Dashboard</h1>
      </div>
      <div className="user-greeting">
        <span className="text-muted">Welcome, User</span>
      </div>
    </header>
  );
};

export default Header;
