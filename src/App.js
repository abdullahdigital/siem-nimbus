import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import './chartConfig'; 
import LogsPage from './components/LogsPage';
import ReportPage from './components/ReportPage';
import UserMgmt from './components/UserMgmt';
import Profile from './components/Profile';
import HelpPage from './components/HelpPage';

function App() {
  return (
    <div>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/user-management" element={<UserMgmt />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help-support" element={<HelpPage />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
