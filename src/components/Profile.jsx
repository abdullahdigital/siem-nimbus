import React, { useState, useEffect } from 'react';
import profileData from '../data/profile.json';
import '../styles/Profile.css';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setUserProfile(profileData);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  if (!userProfile) {
    return <div>Loading profile...</div>;
  }

  const filteredProfile = Object.entries(userProfile).filter(([key, value]) =>
    String(value).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      <input
        type="text"
        placeholder="Search profile details..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="profile-card">
        {filteredProfile.map(([key, value]) => (
          <p key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {key === 'lastLogin' || key === 'memberSince' ? new Date(value).toLocaleString() : String(value)}</p>
        ))}
      </div>
    </div>
  );
};

export default Profile;
