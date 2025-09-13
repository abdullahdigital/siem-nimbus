import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'; 
import logo from '../img/logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-scroll-container">
        <ul>
          <li>
            <Link to="/dashboard"><img src={logo} className='logo' alt="Logo" /></Link>
          </li>
          <li>
            <Link to="/logs">Logs</Link>
          </li>
          <li>
            <Link to="/alerts">Alerts</Link>
          </li>
          <li>
            <Link to="/malware-detector">Malware Detector</Link>
          </li>
          <li>
            <Link to="/network-scanner">Network Scanner</Link>
          </li>
          <li>
            <Link to="/vulnerability-checker">Vulnerability Checker</Link>
          </li>
          <li>
            <Link to="/data-collector">Data Collector</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/user-management">User Management</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/help-support">Help/Support</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
