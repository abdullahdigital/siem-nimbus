import React, { useState, useEffect } from 'react';
import dataCollectorData from '../data/dataCollector.json';
import '../styles/DataCollector.css';

const DataCollector = () => {
  const [dataSources, setDataSources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalDataCollected, setTotalDataCollected] = useState(0);
  const [latestCollectionDate, setLatestCollectionDate] = useState('N/A');

  useEffect(() => {
    setDataSources(dataCollectorData);

    const totalVolume = dataCollectorData.reduce((sum, item) => {
      const volumeValue = parseFloat(item.volume);
      return sum + (isNaN(volumeValue) ? 0 : volumeValue);
    }, 0);
    setTotalDataCollected(totalVolume.toFixed(2));

    const latestDate = dataCollectorData.length > 0
      ? new Date(Math.max(...dataCollectorData.map(item => new Date(item.collectionDate))))
      : null;
    setLatestCollectionDate(latestDate ? latestDate.toLocaleString() : 'N/A');

  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDataSources = dataSources.filter(source =>
    Object.values(source).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'completed';
      case 'in progress':
        return 'in-progress';
      case 'failed':
        return 'failed';
      default:
        return '';
    }
  };

  return (
    <div className="data-collector-page">
      <div className="page-header">
        <h2>Data Collector</h2>
        <div className="summary-cards">
          <div className="summary-card">
            <h3>Total Data Collected</h3>
            <p>{totalDataCollected} GB</p>
          </div>
          <div className="summary-card">
            <h3>Latest Collection</h3>
            <p>{latestCollectionDate}</p>
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search data sources..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="data-source-list">
        {filteredDataSources.map(source => (
          <div key={source.id} className="data-source-card">
            <h3>{source.dataType}</h3>
            <p><strong>Type:</strong> {source.dataType}</p>
            <p><strong>Volume:</strong> {source.volume}</p>
            <p><strong>Collection Date:</strong> {new Date(source.collectionDate).toLocaleString()}</p>
            <p><strong>Status:</strong> <span className={getStatusClass(source.status)}>{source.status}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataCollector;