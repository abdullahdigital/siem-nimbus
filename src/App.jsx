import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import './chartConfig'; 
import LogsPage from './components/LogsPage';
import ReportPage from './components/ReportPage';
import UserMgmt from './components/UserMgmt';
import Profile from './components/Profile';
import HelpPage from './components/HelpPage';
import AlertsPage from './components/AlertsPage';
import MalwareDetector from './components/MalwareDetector';
import NetworkScanner from './components/NetworkScanner';
import VulnerabilityChecker from './components/VulnerabilityChecker';
import DataCollector from './components/DataCollector';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logs" element={<LogsPage />} />
            <Route path="/reports" element={<ReportPage />} />
            <Route path="/user-management" element={<UserMgmt />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/help-support" element={<HelpPage />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/malware-detector" element={<MalwareDetector />} />
            <Route path="/network-scanner" element={<NetworkScanner />} />
            <Route path="/vulnerability-checker" element={<VulnerabilityChecker />} />
            <Route path="/data-collector" element={<DataCollector />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
