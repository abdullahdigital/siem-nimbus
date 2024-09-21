import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AgentDetail from './components/AgentDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main dashboard route */}
        <Route path="/" element={<Dashboard />} />

        {/* Route for individual agent detail page */}
        <Route path="/agent/:id" element={<AgentDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
