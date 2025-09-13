import React, { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import '../../styles/Dashboard.css';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Import data sources
import malwareData from '../../data/malwareDetector.json';
import networkData from '../../data/networkScanner.json';
import vulnerabilityData from '../../data/vulnerabilityChecker.json';
import alertsData from '../../data/alerts.json';
import dataCollectorData from '../../data/dataCollector.json';
import logsData from '../../data/logs.json';

// Register necessary Chart.js components
Chart.register(ArcElement, BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
  const [data, setData] = useState({
    malwareDetector: { threatsDetected: 0, lastScan: '' },
    networkScanner: { devicesConnected: 0, activeScans: 0 },
    vulnerabilityChecker: { vulnerabilitiesFound: 0, lastScan: '' },
    alerts: { newAlerts: 0, lastAlert: '' },
    dataCollector: { dataCollected: 0, lastCollection: '' },
    logs: { logsCollected: 0, lastCollection: '' }
  });

  useEffect(() => {
    // Process malware data
    const highThreats = malwareData.filter(item => item.threatLevel === 'High' || item.threatLevel === 'Critical').length;
    const latestMalwareScan = malwareData.length > 0 ? new Date(Math.max(...malwareData.map(item => new Date(item.lastScan)))) : new Date();

    // Process network scanner data
    const connectedDevices = networkData.filter(item => item.status === 'Connected').length;
    const activeNetworkScans = networkData.filter(item => item.status === 'Scanning').length;

    // Process vulnerability checker data
    const criticalVulnerabilities = vulnerabilityData.filter(item => item.severity === 'Critical').length;
    const latestVulnerabilityScan = vulnerabilityData.length > 0 ? new Date(Math.max(...vulnerabilityData.map(item => new Date(item.lastScan)))) : new Date();

    // Process alerts data
    const newAlertsCount = alertsData.filter(item => item.status === 'New').length;
    const latestAlert = alertsData.length > 0 ? new Date(Math.max(...alertsData.map(item => new Date(item.timestamp)))) : new Date();

    // Process data collector data
    const totalDataCollected = dataCollectorData.reduce((sum, item) => {
      const volumeValue = parseFloat(item.volume);
      return sum + (isNaN(volumeValue) ? 0 : volumeValue);
    }, 0);
    const latestDataCollection = dataCollectorData.length > 0 ? new Date(Math.max(...dataCollectorData.map(item => new Date(item.collectionDate)))) : new Date();

    // Process logs data (assuming logsData is an array of log entries)
    const totalLogsCollected = logsData.length;
    const latestLogCollection = logsData.length > 0 ? new Date(Math.max(...logsData.map(item => new Date(item.timestamp)))) : new Date();

    setData({
      malwareDetector: { threatsDetected: highThreats, lastScan: latestMalwareScan.toLocaleDateString() },
      networkScanner: { devicesConnected: connectedDevices, activeScans: activeNetworkScans },
      vulnerabilityChecker: { vulnerabilitiesFound: criticalVulnerabilities, lastScan: latestVulnerabilityScan.toLocaleDateString() },
      alerts: { newAlerts: newAlertsCount, lastAlert: latestAlert.toLocaleDateString() },
      dataCollector: { dataCollected: totalDataCollected, lastCollection: latestDataCollection.toLocaleDateString() },
      logs: { logsCollected: totalLogsCollected, lastCollection: latestLogCollection.toLocaleDateString() }
    });
  }, []);

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
    <div className="dashboard-content">
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
            `${data.logs.logsCollected} Logs Collected\nLast Collection: ${data.logs.lastCollection}`,
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
  );
};

export default Dashboard;
