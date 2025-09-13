import React, { useState, useEffect } from 'react';
import reportsData from '../data/reports.json';
import '../styles/ReportPage.css';

const ReportPage = () => {
  const [reports, setReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setReports(reportsData);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredReports = reports.filter(report =>
    Object.values(report).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="report-page">
      <h2>Reports</h2>
      <input
        type="text"
        placeholder="Search reports..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="report-list">
        {filteredReports.map(report => (
          <div key={report.id} className={`report-card ${report.status.toLowerCase()}`}>
            <h3>{report.reportName}</h3>
            <p><strong>Type:</strong> {report.type}</p>
            <p><strong>Status:</strong> {report.status}</p>
            <p><strong>Generated On:</strong> {new Date(report.dateGenerated).toLocaleString()}</p>
            <p>{report.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportPage;
