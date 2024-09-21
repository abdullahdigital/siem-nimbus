import React from 'react';
import { useParams } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import './AgentDetail.css'; 

const COLORS = ['#FF8042', '#0088FE'];


const pieData = [
  { name: 'Malicious', value: 4 },
  { name: 'Safe', value: 6 }
];

const historicalData = [
  { date: '2024-08-01', threats: 50, alerts: 5 },
  { date: '2024-08-02', threats: 70, alerts: 15 },
  { date: '2024-08-03', threats: 30, alerts: 10 },
  { date: '2024-08-04', threats: 20, alerts: 12 },
  { date: '2024-08-05', threats: 90, alerts: 20 }
];

function AgentDetail() {
  const { id } = useParams(); 

  
  const agentInfo = {
    1: { name: 'Malware Detector', threatsDetected: 120, lastScan: '2024-08-07' },
    2: { name: 'Network Scanner', devicesConnected: 80, activeScans: 15 },
    3: { name: 'Vulnerability Checker', vulnerabilitiesFound: 45, lastScan: '2024-08-06' },
    4: { name: 'Alerts', newAlerts: 25, lastAlert: '2024-08-07' },
    5: { name: 'Data Collector', dataCollected: '1500 GB', lastCollection: '2024-08-07' },
    6: { name: 'Logs', logsCollected: undefined, lastCollection: '2024-08-07' }
  };

  const agent = agentInfo[id];

  if (!agent) {
    return <div>Agent not found</div>;
  }

  return (
    <div className="agent-detail">
      <h1 className="agent-title">{agent.name} Dashboard</h1>

     
      <div className="agent-info">
        <p>Threats Detected: {agent.threatsDetected !== undefined ? agent.threatsDetected : 'N/A'}</p>
        <p>Devices Connected: {agent.devicesConnected !== undefined ? agent.devicesConnected : 'N/A'}</p>
        <p>Active Scans: {agent.activeScans !== undefined ? agent.activeScans : 'N/A'}</p>
        <p>Vulnerabilities Found: {agent.vulnerabilitiesFound !== undefined ? agent.vulnerabilitiesFound : 'N/A'}</p>
        <p>New Alerts: {agent.newAlerts !== undefined ? agent.newAlerts : 'N/A'}</p>
        <p>Data Collected: {agent.dataCollected !== undefined ? agent.dataCollected : 'N/A'}</p>
        <p>Logs Collected: {agent.logsCollected !== undefined ? agent.logsCollected : 'N/A'}</p>
        <p>Last Scan/Collection: {agent.lastScan || agent.lastCollection || 'N/A'}</p>
      </div>

      
      <div className="charts">
        <div className="chart-container pie-chart-container">
          <h2>Pie Chart</h2>
          <PieChart width={400} height={400}>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={150} fill="#8884d8" dataKey="value" label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="chart-container line-chart-container">
          <h2>Line Chart - Historical Threats and Alerts</h2>
          <LineChart width={600} height={300} data={historicalData}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="threats" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="alerts" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default AgentDetail;
