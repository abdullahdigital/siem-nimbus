import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; // Ensure the path is correct
import '../styles/ReportPage.css'; // You can style the page accordingly

const ReportPage = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [newReportName, setNewReportName] = useState('');
  const [newReportCriteria, setNewReportCriteria] = useState('');
  const [exportFormat, setExportFormat] = useState('PDF');

  useEffect(() => {
    // Fetch the list of reports from an API or local storage
    const fetchReports = async () => {
      try {
        const response = await fetch('http://localhost:5000/reports'); // Example URL
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setReports(result);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

  const handleGenerateReport = () => {
    // Function to generate a new report based on criteria
    const newReport = {
      id: reports.length + 1,
      name: newReportName,
      criteria: newReportCriteria,
      content: `Report content based on criteria: ${newReportCriteria}`,
      timestamp: new Date().toISOString(),
    };

    setReports([...reports, newReport]);
    setSelectedReport(newReport);
  };

  const handleExport = () => {
    // Function to handle export options
    alert(`Exporting report as ${exportFormat}`);
    // Implement actual export functionality (PDF, CSV, etc.)
  };

  return (
    <div className="dashboard">
      <Sidebar /> {/* Ensure the Sidebar component is imported and rendered correctly */}
      <div className="dashboard-content">
        <div className="container mt-4">
          {/* Header */}
          <div className="header">
            <h2>Report Dashboard</h2>
          </div>

          {/* Report Generation Tool */}
          <div className="report-generation">
            <h3>Generate New Report</h3>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Report Name"
              value={newReportName}
              onChange={(e) => setNewReportName(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Criteria"
              value={newReportCriteria}
              onChange={(e) => setNewReportCriteria(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleGenerateReport}>
              Generate Report
            </button>
          </div>

          {/* Report List */}
          <div className="report-list mt-4">
            <h3>Available Reports</h3>
            <ul className="list-group">
              {reports.map((report) => (
                <li
                  key={report.id}
                  className={`list-group-item ${
                    selectedReport && selectedReport.id === report.id ? 'active' : ''
                  }`}
                  onClick={() => setSelectedReport(report)}
                >
                  {report.name} - {new Date(report.timestamp).toLocaleString()}
                </li>
              ))}
            </ul>
          </div>

          {/* Report Viewer */}
          <div className="report-viewer mt-4">
            <h3>Report Viewer</h3>
            {selectedReport ? (
              <div>
                <h4>{selectedReport.name}</h4>
                <p>{selectedReport.content}</p>
              </div>
            ) : (
              <p>No report selected</p>
            )}
          </div>

          {/* Export Options */}
          <div className="export-options mt-4">
            <h3>Export Options</h3>
            <select
              className="form-control mb-2"
              value={exportFormat}
              onChange={(e) => setExportFormat(e.target.value)}
            >
              <option value="PDF">PDF</option>
              <option value="CSV">CSV</option>
              <option value="Excel">Excel</option>
            </select>
            <button className="btn btn-secondary" onClick={handleExport}>
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
