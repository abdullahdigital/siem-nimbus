import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/mainScripts/Login';
import SIEMDashboard from './components/mainScripts/SIEMDashboard';
import GeneralDashboard from './components/mainScripts/GeneralDashboard';
import Settings from './components/mainScripts/Settings';
import AgentStats from './components/mainScripts/AgentStats';
import Support from './components/mainScripts/Support';
import { AgentsProvider } from './components/mainScripts/AgentsContext'; // Import the provider

function App() {
  return (
    <Router>
      <div className="App">
        {/* Wrap components that need access to agents data with AgentsProvider */}
        <AgentsProvider>
          <Routes>
            {/* Login Route */}
            <Route path="/" element={<Login />} />

            {/* Dashboard and Content Routes */}
            <Route path="/SIEMDashboard/*" element={<SIEMDashboard />}>
              <Route path="GeneralDashboard" element={<GeneralDashboard />} />
              <Route path="Agents" element={<AgentStats />} />
              <Route path="Settings" element={<Settings />} />
              <Route path="Support" element={<Support />} />
            </Route>
          </Routes>
        </AgentsProvider>
      </div>
    </Router>
  );
}

export default App;
