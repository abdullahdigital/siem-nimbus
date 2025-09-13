import React, { useState, useEffect } from 'react';
import logsData from '../data/logs.json';
import '../styles/LogsPage.css';

const LogsPage = () => {
  const [logs, setLogs] = useState(logsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchLogs = async () => {
    //   try {
    //     // Replace with your actual API endpoint
    //     const response = await fetch('https://api.example.com/logs');
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     setLogs(data);
    //   } catch (e) {
    //     setError('Failed to fetch logs: ' + e.message);
    //     // Fallback to local data if API fails
    //     setLogs(logsData);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchLogs();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredLogs = logs.filter(log =>
    Object.values(log).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (loading) {
    return <div className="logs-page">Loading logs...</div>;
  }

  // if (error) {
  //   return <div className="logs-page" style={{ color: 'red' }}>Error: {error}</div>;
  // }

  return (
    <div className="logs-page">
      <h2>System Logs</h2>
      <input
        type="text"
        placeholder="Search logs..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="logs-list">
        {filteredLogs.map(log => (
          <div key={log.id} className={`log-card ${log.level.toLowerCase()}`}>
            <p><strong>Timestamp:</strong> {new Date(log.timestamp).toLocaleString()}</p>
            <p><strong>Level:</strong> {log.level}</p>
            <p><strong>Source:</strong> {log.source}</p>
            <p>{log.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogsPage;
