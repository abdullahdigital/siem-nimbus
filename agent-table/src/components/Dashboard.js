import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; 

const agents = [
  { id: 1, name: 'Malware Detector', threatsDetected: 120, lastScan: '2024-08-07' },
  { id: 2, name: 'Network Scanner', devicesConnected: 80, activeScans: 15 },
  { id: 3, name: 'Vulnerability Checker', vulnerabilitiesFound: 45, lastScan: '2024-08-06' },
  { id: 4, name: 'Alerts', newAlerts: 25, lastAlert: '2024-08-07' },
  { id: 5, name: 'Data Collector', dataCollected: '1500 GB', lastCollection: '2024-08-07' },
  { id: 6, name: 'Logs', logsCollected: undefined, lastCollection: '2024-08-07' }
];

function Dashboard() {
    return (
      <div className="dashboard-container">
        <h1 className="dashboard-title">SIEM Dashboard</h1>
        <div className="dashboard">
          {agents.map((agent) => (
            <div className="card" key={agent.id}>
              <Link to={`/agent/${agent.id}`}>
                <h2>{agent.name}</h2>
                <p>Click for more details</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Dashboard;
