import React from 'react';

const MetricsOverview = () => {
  return (
    <div className="metrics-overview">
      <div className="metric">
        <h3>Total Alerts</h3>
        <p>123</p>
      </div>
      <div className="metric">
        <h3>Active Users</h3>
        <p>45</p>
      </div>
      <div className="metric">
        <h3>System Health</h3>
        <p>Good</p>
      </div>
    </div>
  );
};

export default MetricsOverview;
