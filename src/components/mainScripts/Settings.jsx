import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../mainStyles/Settings.css';

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState('general');
  
  // State for various settings sections
  const [settings, setSettings] = useState({
    general: {
      timeZone: '',
      serverAddress: '',
      ports: '',
      retentionPeriod: ''
    },
    monitoring: {
      paths: '',
      rules: '',
      logFrequency: '',
      realTimeAlerts: false
    },
    security: {
      twoFactor: false,
      ipRanges: '',
      passwordExpiry: '',
      sessionTimeout: ''
    },
    advanced: {
      debugLogging: false,
      logFormat: '',
      clusterConfig: ''
    }
  });

  const handleSectionChange = (section) => setActiveSection(section);

  const handleInputChange = (section, field, value) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [section]: {
        ...prevSettings[section],
        [field]: value
      }
    }));
  };

  const handleCheckboxChange = (section, field) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [section]: {
        ...prevSettings[section],
        [field]: !prevSettings[section][field]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save the settings can be added here
    alert('Settings saved!');
  };

  return (
    <div className="settings-container">
      <header className="settings-header">
        <h1>Settings</h1>
      </header>

      <div className="settings-body">
        <aside className="settings-sidebar">
          <ul>
            <li className={activeSection === 'general' ? 'active' : ''} onClick={() => handleSectionChange('general')}>General</li>
            <li className={activeSection === 'monitoring' ? 'active' : ''} onClick={() => handleSectionChange('monitoring')}>File Integrity Monitoring</li>
            <li className={activeSection === 'security' ? 'active' : ''} onClick={() => handleSectionChange('security')}>Security Policies</li>
            <li className={activeSection === 'advanced' ? 'active' : ''} onClick={() => handleSectionChange('advanced')}>Advanced Configuration</li>
          </ul>
        </aside>

        <section className="settings-content">
          {/* General Settings */}
          {activeSection === 'general' && (
            <form onSubmit={handleSubmit}>
              <h2>General Settings</h2>
              <label>Time Zone</label>
              <input
                type="text"
                value={settings.general.timeZone}
                onChange={(e) => handleInputChange('general', 'timeZone', e.target.value)}
                placeholder="Enter time zone"
              />
              <label>Server Address</label>
              <input
                type="text"
                value={settings.general.serverAddress}
                onChange={(e) => handleInputChange('general', 'serverAddress', e.target.value)}
                placeholder="Enter server address"
              />
              <label>Communication Ports</label>
              <input
                type="number"
                value={settings.general.ports}
                onChange={(e) => handleInputChange('general', 'ports', e.target.value)}
                placeholder="Enter port number"
              />
              <label>Data Retention Period (days)</label>
              <input
                type="number"
                value={settings.general.retentionPeriod}
                onChange={(e) => handleInputChange('general', 'retentionPeriod', e.target.value)}
                placeholder="Enter retention period"
              />
              <button type="submit">Save</button>
            </form>
          )}

          {/* Monitoring Settings */}
          {activeSection === 'monitoring' && (
            <form onSubmit={handleSubmit}>
              <h2>File Integrity Monitoring Settings</h2>
              <label>Paths to Monitor</label>
              <input
                type="text"
                value={settings.monitoring.paths}
                onChange={(e) => handleInputChange('monitoring', 'paths', e.target.value)}
                placeholder="Enter paths to monitor"
              />
              <label>Rules</label>
              <input
                type="text"
                value={settings.monitoring.rules}
                onChange={(e) => handleInputChange('monitoring', 'rules', e.target.value)}
                placeholder="Enter monitoring rules"
              />
              <label>Log Frequency</label>
              <input
                type="text"
                value={settings.monitoring.logFrequency}
                onChange={(e) => handleInputChange('monitoring', 'logFrequency', e.target.value)}
                placeholder="Enter log frequency"
              />
              <label>Real-Time Alerts</label>
              <input
                type="checkbox"
                checked={settings.monitoring.realTimeAlerts}
                onChange={() => handleCheckboxChange('monitoring', 'realTimeAlerts')}
              />
              <button type="submit">Save</button>
            </form>
          )}

          {/* Security Settings */}
          {activeSection === 'security' && (
            <form onSubmit={handleSubmit}>
              <h2>Security Policies</h2>
              <label>Two-Factor Authentication</label>
              <input
                type="checkbox"
                checked={settings.security.twoFactor}
                onChange={() => handleCheckboxChange('security', 'twoFactor')}
              />
              <label>IP Ranges</label>
              <input
                type="text"
                value={settings.security.ipRanges}
                onChange={(e) => handleInputChange('security', 'ipRanges', e.target.value)}
                placeholder="Enter IP ranges"
              />
              <label>Password Expiry (days)</label>
              <input
                type="number"
                value={settings.security.passwordExpiry}
                onChange={(e) => handleInputChange('security', 'passwordExpiry', e.target.value)}
                placeholder="Enter password expiry"
              />
              <label>Session Timeout (minutes)</label>
              <input
                type="number"
                value={settings.security.sessionTimeout}
                onChange={(e) => handleInputChange('security', 'sessionTimeout', e.target.value)}
                placeholder="Enter session timeout"
              />
              <button type="submit">Save</button>
            </form>
          )}

          {/* Advanced Settings */}
          {activeSection === 'advanced' && (
            <form onSubmit={handleSubmit}>
              <h2>Advanced Configuration</h2>
              <label>Debug Logging</label>
              <input
                type="checkbox"
                checked={settings.advanced.debugLogging}
                onChange={() => handleCheckboxChange('advanced', 'debugLogging')}
              />
              <label>Log Format</label>
              <input
                type="text"
                value={settings.advanced.logFormat}
                onChange={(e) => handleInputChange('advanced', 'logFormat', e.target.value)}
                placeholder="Enter log format"
              />
              <label>Cluster Configuration</label>
              <input
                type="text"
                value={settings.advanced.clusterConfig}
                onChange={(e) => handleInputChange('advanced', 'clusterConfig', e.target.value)}
                placeholder="Enter cluster configuration"
              />
              <button type="submit">Save</button>
            </form>
          )}
        </section>
      </div>

      <footer className="settings-footer">
        <Link to="/SIEMDashboard/Support">Support</Link>
      </footer>
    </div>
  );
};

export default SettingsPage;
