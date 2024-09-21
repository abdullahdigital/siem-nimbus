import React, { useState } from 'react';
import LogTable from './components/LogTable.js';
import './App.css';

function App() {
  const [logs] = useState([
    { id: 1, timestamp: "2024-09-14 12:45:00", sourceIP: "192.168.1.100", event: "Unauthorized login attempt", status: "malicious" },
    { id: 2, timestamp: "2024-09-14 12:50:00", sourceIP: "192.168.1.101", event: "User login", status: "safe" },
    { id: 3, timestamp: "2024-09-14 12:55:00", sourceIP: "192.168.1.102", event: "Failed admin access", status: "malicious" },
  ]);
  return (
    <div className="App">
    <h1>SIEM Alerts</h1>
    <LogTable logs={logs} />
    </div>
  );
}

export default App;
