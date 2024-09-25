import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AgentsContext } from './AgentsContext';  // Import the context
import '../mainStyles/GeneralDashboard.css';

const GeneralDashboard = () => {
  const navigate = useNavigate();

  // Access agents data from context
  const { agents } = useContext(AgentsContext);

  // Calculate the required statistics
  const totalAgents = agents.length;
  const connectedAgents = agents.filter(agent => agent.agentStatus === 'connected').length;
  const disconnectedAgents = agents.filter(agent => agent.agentStatus === 'disconnected').length;
  const neverConnectedAgents = agents.filter(agent => agent.agentStatus === 'never connected').length;

  // Function to handle routing to the AgentStats page with a filter
  const navigateToAgentStats = (filter) => {
    navigate(`/SIEMDashboard/Agents?status=${filter}`);
  };

  return (
    <div className="dashboard-container">
      <h1>General Dashboard</h1>
      <div className="dashboard-boxes">
        <div className="dashboard-box" onClick={() => navigateToAgentStats('all')}>
          <h2>Total Agents</h2>
          <p>{totalAgents}</p>
        </div>
        <div className="dashboard-box" onClick={() => navigateToAgentStats('connected')}>
          <h2>Connected Agents</h2>
          <p>{connectedAgents}</p>
        </div>
        <div className="dashboard-box" onClick={() => navigateToAgentStats('disconnected')}>
          <h2>Disconnected Agents</h2>
          <p>{disconnectedAgents}</p>
        </div>
        <div className="dashboard-box" onClick={() => navigateToAgentStats('neverConnected')}>
          <h2>Never Connected Agents</h2>
          <p>{neverConnectedAgents}</p>
        </div>
      </div>
    </div>
  );
};

export default GeneralDashboard;
