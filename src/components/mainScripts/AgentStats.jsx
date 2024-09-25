import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AgentsContext } from './AgentsContext'; // Using context for centralized data
import StatusPieChart from './StatusPieChart';
import '../mainStyles/AgentStats.css';

const AgentStats = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const statusFilter = queryParams.get('status') || ''; // Default to an empty string if no filter is present

  const { agents, addAgent } = useContext(AgentsContext); // Get agents and the add function from context
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAgents, setFilteredAgents] = useState(agents);
  const [autoRefresh, setAutoRefresh] = useState(false); 
  const [showAddAgentModal, setShowAddAgentModal] = useState(false); 

  const [newAgentData, setNewAgentData] = useState({
    name: '',
    ip: '',
    groups: '',
    os: '',
    clusterNode: '',
    version: '',
    agentStatus: 'connected', // Default
    registrationKey: '',
    loggingLevel: 'info', // Default log level
    monitoringInterval: 60 // Default monitoring interval
  });

  // Pie chart data
  const pieChartData = [
    { name: 'Connected', value: agents.filter(agent => agent.agentStatus === 'connected').length, color: '#28a745' },
    { name: 'Disconnected', value: agents.filter(agent => agent.agentStatus === 'disconnected').length, color: '#dc3545' },
    { name: 'Never Connected', value: agents.filter(agent => agent.agentStatus === 'never connected').length, color: '#ffc107' }
  ];

  useEffect(() => {
    const filtered = agents.filter(agent => {
      const matchesSearchQuery = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || agent.ip.includes(searchQuery);
      const matchesStatus = statusFilter === 'all' || !statusFilter || agent.agentStatus === statusFilter;
      return matchesSearchQuery && matchesStatus;
    });
    setFilteredAgents(filtered);
  }, [searchQuery, statusFilter, agents]);

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        console.log('Refreshing agents data...');
        setFilteredAgents([...agents]);
      }, 5000); // Refresh every 5 seconds
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [autoRefresh, agents]);

  const handleAddNewAgent = () => {
    const newAgent = {
      ...newAgentData,
      id: agents.length + 1,
      groups: newAgentData.groups.split(',').map(group => group.trim())
    };
    addAgent(newAgent); // Add the new agent via the context function
    setShowAddAgentModal(false); // Close modal after adding
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAgentData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="agent-stats-container">
      <div className="header">
        <h2>Agent Statistics</h2>
      </div>

      {/* Status Pie Chart */}
      <div className="status-chart-box">
        <h3>Agent Status Distribution</h3>
        <StatusPieChart data={pieChartData} />
      </div>

      {/* Controls for auto-refresh */}
      <div className="auto-refresh-toggle">
        <label>
          <input 
            type="checkbox" 
            checked={autoRefresh} 
            onChange={() => setAutoRefresh(!autoRefresh)} 
          />
          Enable Auto-Refresh
        </label>
      </div>

      {/* Agent List */}
      <div className="agent-list-box">
        <h3>Agent List</h3>
        <div className="search-bar">
          <input
            type="text"
            className="agent-search"
            placeholder="Search by agent name or IP..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="table-controls">
          <button className="refresh-btn" onClick={() => setFilteredAgents(agents)}>Refresh</button>
          <button className="add-new-agent-btn" onClick={() => setShowAddAgentModal(true)}>Add New Agent</button>
        </div>
        <div className="agent-list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>IP</th>
                <th>Group(s)</th>
                <th>OS</th>
                <th>Cluster Node</th>
                <th>Version</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAgents.map(agent => (
                <tr key={agent.id}>
                  <td>{agent.id}</td>
                  <td>{agent.name}</td>
                  <td>{agent.ip}</td>
                  <td>{agent.groups.join(', ')}</td>
                  <td>{agent.os}</td>
                  <td>{agent.clusterNode}</td>
                  <td>{agent.version}</td>
                  <td className={agent.agentStatus === 'disconnected' ? 'status-disconnected' : 'status-active'}>
                    {agent.agentStatus}
                  </td>
                  <td><button className="action-btn">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Adding New Agent */}
      {showAddAgentModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Agent</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleAddNewAgent(); }}>
              {['name', 'ip', 'groups', 'os', 'clusterNode', 'version', 'registrationKey'].map(field => (
                <label key={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
                  <input
                    type="text"
                    name={field}
                    value={newAgentData[field]}
                    onChange={handleInputChange}
                    required={['name', 'ip', 'registrationKey'].includes(field)}
                  />
                </label>
              ))}
              <label>
                Logging Level:
                <select name="loggingLevel" value={newAgentData.loggingLevel} onChange={handleInputChange}>
                  <option value="info">Info</option>
                  <option value="warning">Warning</option>
                  <option value="error">Error</option>
                </select>
              </label>
              <label>
                Monitoring Interval (seconds):
                <input
                  type="number"
                  name="monitoringInterval"
                  value={newAgentData.monitoringInterval}
                  onChange={handleInputChange}
                />
              </label>
              <div className="modal-actions">
                <button type="submit" className="save-btn">Add Agent</button>
                <button type="button" className="cancel-btn" onClick={() => setShowAddAgentModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentStats;
