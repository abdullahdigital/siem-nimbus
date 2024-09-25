import React, { createContext, useState } from 'react';

// Create the context
export const AgentsContext = createContext();

// Initial mock agents data (from your previous MockData.js)
const initialAgents = [
  { id: 1, name: 'Agent 001', status: 'Active', ip: '192.168.1.1', groups: ['default'], os: 'Ubuntu 20.04.1 LTS', version: 'v4.2.5', registrationDate: 'Mar 11, 2022 @ 06:31:10', lastKeepAlive: 'Mar 11, 2022 @ 06:44:05', clusterNode: 'node01', agentStatus: 'connected' },
  { id: 2, name: 'Agent 002', status: 'Active', ip: '192.168.1.2', groups: ['default'], os: 'Windows Server 2019', version: 'v4.2.5', registrationDate: 'Mar 12, 2022 @ 07:22:15', lastKeepAlive: 'Mar 12, 2022 @ 07:32:40', clusterNode: 'node02', agentStatus: 'disconnected' },
  { id: 3, name: 'Agent 003', status: 'Active', ip: '192.168.1.3', groups: ['admin'], os: 'CentOS 8', version: 'v4.2.5', registrationDate: 'Mar 13, 2022 @ 08:40:20', lastKeepAlive: 'Mar 13, 2022 @ 08:55:10', clusterNode: 'node03', agentStatus: 'connected' },
  { id: 4, name: 'Agent 004', status: 'Inactive', ip: '192.168.1.4', groups: ['default'], os: 'Windows 10', version: 'v4.2.5', registrationDate: 'Mar 14, 2022 @ 09:45:35', lastKeepAlive: 'Mar 14, 2022 @ 10:01:50', clusterNode: 'node01', agentStatus: 'disconnected' },
  { id: 5, name: 'Agent 005', status: 'Active', ip: '192.168.1.5', groups: ['default'], os: 'Ubuntu 18.04.5 LTS', version: 'v4.2.5', registrationDate: 'Mar 15, 2022 @ 10:22:25', lastKeepAlive: 'Mar 15, 2022 @ 10:34:55', clusterNode: 'node02', agentStatus: 'connected' },
  { id: 6, name: 'Agent 006', status: 'Inactive', ip: '192.168.1.6', groups: ['default'], os: 'Windows Server 2016', version: 'v4.2.5', registrationDate: 'Mar 16, 2022 @ 11:50:00', lastKeepAlive: 'Mar 16, 2022 @ 12:03:15', clusterNode: 'node01', agentStatus: 'disconnected' },
  { id: 7, name: 'Agent 007', status: 'Active', ip: '192.168.1.7', groups: ['admin'], os: 'Fedora 34', version: 'v4.2.5', registrationDate: 'Mar 17, 2022 @ 12:15:05', lastKeepAlive: 'Mar 17, 2022 @ 12:28:25', clusterNode: 'node02', agentStatus: 'connected' },
  { id: 8, name: 'Agent 008', status: 'Inactive', ip: '192.168.1.8', groups: ['default'], os: 'Windows 11', version: 'v4.2.5', registrationDate: 'Mar 18, 2022 @ 13:42:20', lastKeepAlive: 'Mar 18, 2022 @ 13:55:30', clusterNode: 'node01', agentStatus: 'disconnected' },
  { id: 9, name: 'Agent 009', status: 'Active', ip: '192.168.1.9', groups: ['admin'], os: 'Debian 10', version: 'v4.2.5', registrationDate: 'Mar 19, 2022 @ 14:25:35', lastKeepAlive: 'Mar 19, 2022 @ 14:40:05', clusterNode: 'node02', agentStatus: 'connected' },
  { id: 10, name: 'Agent 010', status: 'Active', ip: '192.168.1.10', groups: ['default'], os: 'Windows Server 2012 R2', version: 'v4.2.5', registrationDate: 'Mar 20, 2022 @ 15:11:10', lastKeepAlive: 'Mar 20, 2022 @ 15:25:15', clusterNode: 'node01', agentStatus: 'disconnected' },
  { id: 11, name: 'Agent 011', status: 'Active', ip: '192.168.1.11', groups: ['default'], os: 'Ubuntu 20.04.1 LTS', version: 'v4.2.5', registrationDate: 'Mar 21, 2022 @ 16:18:45', lastKeepAlive: 'Mar 21, 2022 @ 16:30:55', clusterNode: 'node03', agentStatus: 'connected' },
  { id: 12, name: 'Agent 012', status: 'Inactive', ip: '192.168.1.12', groups: ['default'], os: 'Windows Server 2019', version: 'v4.2.5', registrationDate: 'Mar 22, 2022 @ 17:05:35', lastKeepAlive: 'Mar 22, 2022 @ 17:15:50', clusterNode: 'node01', agentStatus: 'disconnected' },
  { id: 13, name: 'Agent 013', status: 'Active', ip: '192.168.1.13', groups: ['admin'], os: 'CentOS 8', version: 'v4.2.5', registrationDate: 'Mar 23, 2022 @ 18:45:10', lastKeepAlive: 'Mar 23, 2022 @ 19:00:05', clusterNode: 'node02', agentStatus: 'connected' },
  { id: 14, name: 'Agent 014', status: 'Active', ip: '192.168.1.14', groups: ['default'], os: 'Windows 10', version: 'v4.2.5', registrationDate: 'Mar 24, 2022 @ 19:30:50', lastKeepAlive: 'Mar 24, 2022 @ 19:45:20', clusterNode: 'node01', agentStatus: 'never connected' },
  { id: 15, name: 'Agent 015', status: 'Active', ip: '192.168.1.15', groups: ['default'], os: 'Ubuntu 18.04.5 LTS', version: 'v4.2.5', registrationDate: 'Mar 25, 2022 @ 20:12:25', lastKeepAlive: 'Mar 25, 2022 @ 20:25:35', clusterNode: 'node02', agentStatus: 'connected' },
  { id: 16, name: 'Agent 016', status: 'Inactive', ip: '192.168.1.16', groups: ['default'], os: 'Windows Server 2016', version: 'v4.2.5', registrationDate: 'Mar 26, 2022 @ 21:05:40', lastKeepAlive: 'Mar 26, 2022 @ 21:20:55', clusterNode: 'node01', agentStatus: 'never connected' },
  { id: 17, name: 'Agent 017', status: 'Active', ip: '192.168.1.17', groups: ['admin'], os: 'Fedora 34', version: 'v4.2.5', registrationDate: 'Mar 27, 2022 @ 22:18:15', lastKeepAlive: 'Mar 27, 2022 @ 22:30:30', clusterNode: 'node02', agentStatus: 'connected' },
  { id: 18, name: 'Agent 018', status: 'Inactive', ip: '192.168.1.18', groups: ['default'], os: 'Windows 11', version: 'v4.2.5', registrationDate: 'Mar 28, 2022 @ 23:45:25', lastKeepAlive: 'Mar 28, 2022 @ 23:58:40', clusterNode: 'node01', agentStatus: 'connected' },
  { id: 19, name: 'Agent 019', status: 'Active', ip: '192.168.1.19', groups: ['admin'], os: 'Debian 10', version: 'v4.2.5', registrationDate: 'Mar 29, 2022 @ 00:25:35', lastKeepAlive: 'Mar 29, 2022 @ 00:40:15', clusterNode: 'node02', agentStatus: 'connected' },
  { id: 20, name: 'Agent 020', status: 'Inactive', ip: '192.168.1.20', groups: ['default'], os: 'Windows 11', version: 'v4.2.5', registrationDate: 'Mar 30, 2022 @ 01:15:20', lastKeepAlive: 'Mar 30, 2022 @ 01:28:40', clusterNode: 'node01', agentStatus: 'disconnected' },
];

// Create the context provider component
export const AgentsProvider = ({ children }) => {
  const [agents, setAgents] = useState(initialAgents);

  // Function to add a new agent
  const addAgent = (newAgent) => {
    setAgents((prevAgents) => [...prevAgents, newAgent]);
  };

  // Function to remove an agent
  const removeAgent = (agentId) => {
    setAgents((prevAgents) => prevAgents.filter((agent) => agent.id !== agentId));
  };

  // Function to update an agent
  const updateAgent = (updatedAgent) => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) =>
        agent.id === updatedAgent.id ? updatedAgent : agent
      )
    );
  };

  return (
    <AgentsContext.Provider value={{ agents, addAgent, removeAgent, updateAgent }}>
      {children}
    </AgentsContext.Provider>
  );
};
