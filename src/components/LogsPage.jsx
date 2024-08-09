import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar'; // Ensure the path is correct
import '../styles/LogsPage.css';

const LogsPage = () => {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/logs'); // URL for JSON Server
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setLogs(result);
        setFilteredLogs(result);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchLogs();
  }, []);

  useEffect(() => {
    let updatedLogs = logs.filter(log =>
      log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filterType !== 'All') {
      updatedLogs = updatedLogs.filter(log => log.type === filterType);
    }

    setFilteredLogs(updatedLogs);
  }, [searchTerm, filterType, logs]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleFilterChange = (e) => setFilterType(e.target.value);

  return (
    <div className="dashboard">
      <Sidebar /> {/* Ensure the Sidebar component is imported and rendered correctly */}
      <div className="dashboard-content">
        <div className="container mt-4">
          <div className="row mb-4">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search logs..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="col-md-6">
              <select
                className="form-control"
                value={filterType}
                onChange={handleFilterChange}
              >
                <option value="All">All Types</option>
                <option value="Error">Error</option>
                <option value="Warning">Warning</option>
                <option value="Info">Info</option>
              </select>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Timestamp</th>
                  <th>Type</th>
                  <th>Message</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map(log => (
                  <tr key={log.id}>
                    <td>{log.id}</td>
                    <td>{new Date(log.timestamp).toLocaleString()}</td>
                    <td>{log.type}</td>
                    <td>{log.message}</td>
                    <td>{log.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogsPage;
