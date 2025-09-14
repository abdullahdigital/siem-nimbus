import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../img/logo.png';
import { LayoutDashboard, Bell, FileText, ShieldAlert, Network, Bug, Database, BarChart2, Users, User, HelpCircle, LogOut, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mobile-navbar-toggle" onClick={toggleSidebar}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-scroll-container">
          <ul>
            <li>
              <Link to="/dashboard" className="sidebar-link" onClick={toggleSidebar}>
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/logs" className="sidebar-link" onClick={toggleSidebar}>
                <FileText size={20} />
                <span>Logs</span>
              </Link>
            </li>
            <li>
              <Link to="/alerts" className="sidebar-link" onClick={toggleSidebar}>
                <Bell size={20} />
                <span>Alerts</span>
              </Link>
            </li>
            <li>
              <Link to="/malware-detector" className="sidebar-link" onClick={toggleSidebar}>
                <ShieldAlert size={20} />
                <span>Malware Detector</span>
              </Link>
            </li>
            <li>
              <Link to="/network-scanner" className="sidebar-link" onClick={toggleSidebar}>
                <Network size={20} />
                <span>Network Scanner</span>
              </Link>
            </li>
            <li>
              <Link to="/vulnerability-checker" className="sidebar-link" onClick={toggleSidebar}>
                <Bug size={20} />
                <span>Vulnerability Checker</span>
              </Link>
            </li>
            <li>
              <Link to="/data-collector" className="sidebar-link" onClick={toggleSidebar}>
                <Database size={20} />
                <span>Data Collector</span>
              </Link>
            </li>
            <li>
              <Link to="/reports" className="sidebar-link" onClick={toggleSidebar}>
                <BarChart2 size={20} />
                <span>Reports</span>
              </Link>
            </li>
            <li>
              <Link to="/user-management" className="sidebar-link" onClick={toggleSidebar}>
                <Users size={20} />
                <span>User Management</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="sidebar-link" onClick={toggleSidebar}>
                <User size={20} />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/help-support" className="sidebar-link" onClick={toggleSidebar}>
                <HelpCircle size={20} />
                <span>Help/Support</span>
              </Link>
            </li>
          </ul>
          <div className="sidebar-user-info">
            <div className="user-avatar"></div>
            <div className="user-details">
              <div className="user-name">Admin User</div>
              <div className="user-email">admin@example.com</div>
            </div>
            <LogOut size={20} className="logout-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
