import React, { useState, useEffect } from 'react';
import alertsData from '../data/alerts.json';
import '../styles/AlertsPage.css';

const AlertsPage = () => {
  const [alerts, setAlerts] = useState(alertsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchAlerts = async () => {
    //   try {
    //     // Replace with your actual API endpoint
    //     const response = await fetch('https://api.example.com/alerts');
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     setAlerts(data);
    //   } catch (e) {
    //     setError('Failed to fetch alerts: ' + e.message);
    //     // Fallback to local data if API fails
    //     setAlerts(alertsData);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchAlerts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAlerts = alerts.filter(alert =>
    Object.values(alert).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (loading) {
    return <div className="alerts-page">Loading alerts...</div>;
  }

  // if (error) {
  //   return <div className="alerts-page" style={{ color: 'red' }}>Error: {error}</div>;
  // }

  return (
    <div className="alerts-page">
      <h2>Alerts</h2>
      <input
        type="text"
        placeholder="Search alerts..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="alerts-list">
        {filteredAlerts.map(alert => (
          <div key={alert.id} className={`alert-card ${alert.severity.toLowerCase()}`}>
            <h3>{alert.ruleName}</h3>
            <p><strong>Severity:</strong> {alert.severity}</p>
            <p><strong>Source:</strong> {alert.source}</p>
            <p><strong>Destination:</strong> {alert.destination}</p>
            <p><strong>Timestamp:</strong> {new Date(alert.timestamp).toLocaleString()}</p>
            <p><strong>Status:</strong> {alert.status}</p>
            <p>{alert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsPage;