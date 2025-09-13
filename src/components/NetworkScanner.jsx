import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { Search, Globe, Laptop, Scan, ChevronDown, ChevronUp, CheckCircle, Clock, XCircle } from 'lucide-react';
import networkScannerData from '../data/networkScanner.json';
import '../styles/NetworkScanner.css';

const getStatusBadge = (status) => {
  switch (status) {
    case 'Completed':
      return <span className="status-badge completed"><CheckCircle size={14} /> Completed</span>;
    case 'In Progress':
      return <span className="status-badge in-progress"><Clock size={14} /> In Progress</span>;
    case 'Failed':
      return <span className="status-badge failed"><XCircle size={14} /> Failed</span>;
    default:
      return <span className="status-badge">{status}</span>;
  }
};

const getRelativeTime = (isoString) => {
  if (!isoString) return 'N/A';
  try {
    return formatDistanceToNow(parseISO(isoString), { addSuffix: true });
  } catch (error) {
    console.error("Error parsing date:", isoString, error);
    return isoString; // Fallback to raw string if parsing fails
  }
};

const NetworkScanner = () => {
  const [scans, setScans] = useState(networkScannerData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortOrder, setSortOrder] = useState({ key: 'startTime', direction: 'desc' });
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
      // const fetchScans = async () => {
      //   try {
      //     // Replace with your actual API endpoint
      //     const response = await fetch('https://api.example.com/networkscans'); 
      //     if (!response.ok) {
      //       throw new Error(`HTTP error! status: ${response.status}`);
      //     }
      //     const data = await response.json();
      //     setScans(data);
      //   } catch (e) {
      //     setError('Failed to fetch scans: ' + e.message);
      //     // Fallback to local data if API fails
      //     setScans(networkScannerData);
      //   } finally {
      //     setLoading(false);
      //   }
      // };
  
      // fetchScans();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  const handleSortChange = (event) => {
    const [key, direction] = event.target.value.split('-');
    setSortOrder({ key, direction });
  };

  // const toggleExpand = (id) => { // Removed toggleExpand function
  //   setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  // };

  const filteredScans = scans.filter(scan => {
    const matchesSearch = scan.ipAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          scan.deviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          scan.scanType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || scan.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const sortedScans = [...filteredScans].sort((a, b) => {
    let valA, valB;
    if (sortOrder.key === 'startTime' || sortOrder.key === 'endTime') {
      valA = parseISO(a[sortOrder.key]);
      valB = parseISO(b[sortOrder.key]);
    } else {
      valA = a[sortOrder.key];
      valB = b[sortOrder.key];
    }

    if (valA < valB) return sortOrder.direction === 'asc' ? -1 : 1;
    if (valA > valB) return sortOrder.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (loading) {
    return <div className="network-scanner-dashboard">Loading scans...</div>;
  }

  // if (error) {
  //   return <div className="network-scanner-dashboard" style={{ color: 'red' }}>Error: {error}</div>;
  // }

  return (
    <div className="network-scanner-dashboard">
      <div className="dashboard-header">
        <div className="search-bar-container">
          {/* Removed Search icon */}
          <input
            type="text"
            placeholder="Search IP, Device, Scan Type..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        <div className="filter-sort-controls">
          <div className="filter-buttons">
            {['All', 'Completed', 'In Progress', 'Failed'].map(status => (
              <button
                key={status}
                className={`filter-chip ${filterStatus === status ? 'active' : ''}`}
                onClick={() => handleFilterChange(status)}
              >
                {status}
              </button>
            ))}
          </div>
          <div className="sort-dropdown-container">
            <select onChange={handleSortChange} value={`${sortOrder.key}-${sortOrder.direction}`} className="sort-dropdown">
              <option value="ipAddress-asc">Sort by IP (A-Z)</option>
              <option value="ipAddress-desc">Sort by IP (Z-A)</option>
              <option value="status-asc">Sort by Status (A-Z)</option>
              <option value="status-desc">Sort by Status (Z-A)</option>
              <option value="startTime-desc">Sort by Start Time (Newest)</option>
              <option value="startTime-asc">Sort by Start Time (Oldest)</option>
              <option value="endTime-desc">Sort by End Time (Newest)</option>
              <option value="endTime-asc">Sort by End Time (Oldest)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="network-scan-cards">
        <AnimatePresence>
          {sortedScans.map(scan => (
            <motion.div
              key={scan.id}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
              className="scan-card"
              whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(0, 255, 255, 0.15)" }}
            >
              <div className={`status-border ${scan.status.toLowerCase().replace(' ', '-')}`}></div>
              <div className="card-header">
                <h3 className="card-title"><Globe size={18} /> {scan.ipAddress}</h3>
                {getStatusBadge(scan.status)}
              </div>
              <div className="card-content">
                <p><Laptop size={16} /> <strong>Device:</strong> {scan.deviceName}</p>
                <p><Scan size={16} /> <strong>Scan Type:</strong> {scan.scanType}</p>
                <p><strong>Start:</strong> {getRelativeTime(scan.startTime)}</p>
                <p><strong>End:</strong> {getRelativeTime(scan.endTime)}</p>
                
                {/* Removed motion.div and View More button */}
                {/*
                <motion.div
                  initial={false}
                  animate={{ height: expandedCards[scan.id] ? 'auto' : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: 'hidden' }}
                >
                  {expandedCards[scan.id] && (
                    <div className="results-summary">
                      <h4>Scan Results:</h4>
                      <ul>
                        {scan.resultsSummary.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
                <button className="view-more-button" onClick={() => toggleExpand(scan.id)}>
                  {expandedCards[scan.id] ? <><ChevronUp size={16} /> View Less</> : <><ChevronDown size={16} /> View More</>}
                </button>
                */}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NetworkScanner;