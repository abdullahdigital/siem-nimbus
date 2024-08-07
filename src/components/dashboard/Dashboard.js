import React from 'react';
import Header from '../Header';
import MetricsOverview from './MetricsOverview';
import RecentAlerts from './RecentAlerts';
import ChartsAndGraphs from './ChartsAndGraphs';
import SystemStatus from './SystemStatus';
import Sidebar from '../Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <div className="content">
          <MetricsOverview />
          <RecentAlerts />
          <ChartsAndGraphs />
          <SystemStatus />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
