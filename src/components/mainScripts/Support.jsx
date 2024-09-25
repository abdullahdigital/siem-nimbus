import React, { useState } from 'react';
import '../mainStyles/Support.css';


const Support = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="header mb-4">
        <h2 className="text-primary">Help & Support</h2>
        <p className="text-muted">
          Welcome to the SIEM platform's support page. Here, you can find detailed guides, troubleshooting steps, and API documentation to help you configure and effectively manage your security monitoring environment. For further assistance, you can also reach our support team via the provided contact details.
        </p>
      </div>

      {/* Search Section */}
      <div className="search-section mb-5">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search Documentation..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Documentation Section */}
      <div className="documentation-section mb-5">
        <h3 className="text-secondary">Documentation Links</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="doc-card">
              <h5>User Guide</h5>
              <p>
                This guide walks you through the essential steps to configure and use your SIEM platform efficiently. Topics include:
              </p>
              <ul>
                <li>
                  <strong>System Overview:</strong> Learn about core functionalities such as event collection, correlation, and how to navigate the SIEM dashboard to monitor your network in real time.
                </li>
                <li>
                  <strong>Data Source Integration:</strong> Step-by-step guidance to integrate various log sources like firewalls, intrusion detection systems, servers, and cloud services. Includes configuration tips for syslog, agent-based collection, and API integrations.
                </li>
                <li>
                  <strong>Real-time Monitoring:</strong> Learn how to set up real-time alerts based on security incidents, thresholds, and triggers, ensuring timely response to critical security events.
                </li>
                <li>
                  <strong>Custom Dashboards:</strong> Create and manage custom dashboards that offer visibility into specific areas of your infrastructure, such as user activity, network traffic, or application performance.
                </li>
                <li>
                  <strong>Incident Response Management:</strong> Track incidents, assign tasks, log actions, and close events after resolution. This section covers best practices for responding to detected security incidents.
                </li>
                <li>
                  <strong>Policy Management:</strong> Manage and enforce security policies, such as configuring two-factor authentication (2FA), access control, and audit trails for compliance.
                </li>
                <li>
                  <strong>Data Retention and Archiving:</strong> Instructions on managing log storage and setting data retention policies to comply with legal or organizational requirements while optimizing storage.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="doc-card">
              <h5>Troubleshooting</h5>
              <p>
                Encountering issues? This section provides solutions for common technical challenges, helping you resolve problems quickly:
              </p>
              <ul>
                <li>
                  <strong>Log Ingestion Issues:</strong> Not seeing data from a source? Follow steps to check connectivity, verify source configurations, and review syslog or agent health.
                </li>
                <li>
                  <strong>Alert Configuration:</strong> If alerts aren't triggering, this guide explains how to verify thresholds, rules, and notification settings.
                </li>
                <li>
                  <strong>Performance Optimization:</strong> Tips for optimizing system performance by tuning log ingestion rates, archiving unused data, and managing system resources.
                </li>
                <li>
                  <strong>Dashboard Loading Issues:</strong> If dashboards are slow to load or missing data, follow these steps to check data sources and performance bottlenecks.
                </li>
                <li>
                  <strong>Permission and Access Errors:</strong> Resolve issues related to user permissions, access control policies, and role assignments in your SIEM environment.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="doc-card">
              <h5>API Documentation</h5>
              <p>
                For developers and integrators, the API documentation explains how to leverage the SIEM system programmatically to automate tasks and extend its functionality:
              </p>
              <ul>
                <li>
                  <strong>API Overview:</strong> Learn how to interact with the SIEM system using REST APIs, including querying data, creating alerts, and managing configurations.
                </li>
                <li>
                  <strong>Authentication and Security:</strong> Set up API keys, tokens, and other authentication methods to ensure secure access when integrating with third-party systems.
                </li>
                <li>
                  <strong>Log Ingestion via API:</strong> Learn how to send custom logs and events directly to the SIEM platform using the provided API endpoints.
                </li>
                <li>
                  <strong>Querying Event Data:</strong> Use APIs to query logs and events, filter results, and integrate with external systems like ticketing tools or monitoring dashboards.
                </li>
                <li>
                  <strong>Extending SIEM Features:</strong> Create custom rules, integrate third-party threat intelligence, or automate remediation workflows using API endpoints.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="support-contact-section mb-5">
        <h3 className="text-secondary">Contact Support</h3>
        <p>
          If you require further assistance or have specific questions that are not covered in the documentation, feel free to reach out to our support team. We're here to help you resolve any issues or provide guidance on how to optimize your SIEM system for your needs.
        </p>
        <p>Email: <strong>support@siemsolutions.com</strong></p>
        <p>Phone: <strong>+1 (800) 123-4567</strong></p>
      </div>
    </div>
  );
};

export default Support;
