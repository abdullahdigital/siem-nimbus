import React, { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import Sidebar from '../Sidebar';
import '../../styles/Dashboard.css';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register necessary Chart.js components
Chart.register(ArcElement, BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
  const [data, setData] = useState({
    malwareDetector: { threatsDetected: 120, lastScan: '2024-08-07' },
    networkScanner: { devicesConnected: 80, activeScans: 15 },
    vulnerabilityChecker: { vulnerabilitiesFound: 45, lastScan: '2024-08-06' },
    alerts: { newAlerts: 25, lastAlert: '2024-08-07' },
    dataCollector: { dataCollected: 1500, lastCollection: '2024-08-07' }
  });

  const renderBox = (title, content, link) => (
    <div className="col-md-4 mb-4" key={title}>
      <a href={link} className="text-decoration-none">
        <div className="card h-100 text-center shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-primary">{title}</h5>
            <p className="card-text text-dark">{content}</p>
          </div>
        </div>
      </a>
    </div>
  );

  const barChartData = {
    labels: ['Threats Detected', 'Devices Connected', 'Vulnerabilities Found', 'New Alerts'],
    datasets: [
      {
        label: 'Security Metrics',
        data: [
          data.malwareDetector.threatsDetected,
          data.networkScanner.devicesConnected,
          data.vulnerabilityChecker.vulnerabilitiesFound,
          data.alerts.newAlerts,
        ],
        backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
        borderColor: ['#0056b3', '#218838', '#e0a800', '#c82333'],
        borderWidth: 2,
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Good', 'Critical', 'Warning'],
    datasets: [
      {
        label: 'System Health',
        data: [70, 20, 10],
        backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <nav className="navbar navbar-light bg-light shadow">
          <span className="navbar-brand mb-0 h1 mx-auto">SIEM Nimbus Dashboard</span>
        </nav>
        <div className="content mt-4">
          <div className="row">
            {renderBox(
              'Malware Detector',
              `${data.malwareDetector.threatsDetected} Threats Detected\nLast Scan: ${data.malwareDetector.lastScan}`,
              '/malware-detector'
            )}
            {renderBox(
              'Network Scanner',
              `${data.networkScanner.devicesConnected} Devices Connected\nActive Scans: ${data.networkScanner.activeScans}`,
              '/network-scanner'
            )}
            {renderBox(
              'Vulnerability Checker',
              `${data.vulnerabilityChecker.vulnerabilitiesFound} Vulnerabilities Found\nLast Scan: ${data.vulnerabilityChecker.lastScan}`,
              '/vulnerability-checker'
            )}
            {renderBox(
              'Alerts',
              `${data.alerts.newAlerts} New Alerts\nLast Alert: ${data.alerts.lastAlert}`,
              '/alerts'
            )}
            {renderBox(
              'Data Collector',
              `${data.dataCollector.dataCollected} GB Collected\nLast Collection: ${data.dataCollector.lastCollection}`,
              '/data-collector'
            )}
            {renderBox(
              'Logs',
              `${data.dataCollector.logs} Logs Collected\nLast Collection: ${data.dataCollector.lastCollection}`,
              '/logs'
            )}
          </div>

          <div className="row mt-5">
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-center text-primary">Security Metrics</h5>
                  <Bar
                    data={barChartData}
                    options={{
                      maintainAspectRatio: false,
                      responsive: true,
                      plugins: { legend: { position: 'top' } },
                      scales: {
                        x: { grid: { display: false } },
                        y: { grid: { color: '#ddd' } },
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-center text-primary">System Health</h5>
                  <Doughnut
                    data={doughnutChartData}
                    options={{
                      maintainAspectRatio: false,
                      responsive: true,
                      plugins: { legend: { position: 'top' } },
                      cutoutPercentage: 70,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
