import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css'; 
import logo from '../img/logo.png';
import { LayoutDashboard, Bell, FileText, ShieldAlert, Network, Bug, Database, BarChart2, Users, User, HelpCircle, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-scroll-container">
        <ul>
          <li>
            <Link to="/dashboard" className="sidebar-link">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/logs" className="sidebar-link">
              <FileText size={20} />
              <span>Logs</span>
            </Link>
          </li>
          <li>
            <Link to="/alerts" className="sidebar-link">
              <Bell size={20} />
              <span>Alerts</span>
            </Link>
          </li>
          <li>
            <Link to="/malware-detector" className="sidebar-link">
              <ShieldAlert size={20} />
              <span>Malware Detector</span>
            </Link>
          </li>
          <li>
            <Link to="/network-scanner" className="sidebar-link">
              <Network size={20} />
              <span>Network Scanner</span>
            </Link>
          </li>
          <li>
            <Link to="/vulnerability-checker" className="sidebar-link">
              <Bug size={20} />
              <span>Vulnerability Checker</span>
            </Link>
          </li>
          <li>
            <Link to="/data-collector" className="sidebar-link">
              <Database size={20} />
              <span>Data Collector</span>
            </Link>
          </li>
          <li>
            <Link to="/reports" className="sidebar-link">
              <BarChart2 size={20} />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/user-management" className="sidebar-link">
              <Users size={20} />
              <span>User Management</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="sidebar-link">
              <User size={20} />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/help-support" className="sidebar-link">
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
  );
};

export default Sidebar;
