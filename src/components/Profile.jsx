import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
  });

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert('Password changed successfully!');
    setPassword('');
    setConfirmPassword('');
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfile({ ...profile, profilePicture: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNotificationsChange = (e) => {
    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <div className="container">
          <div className="header">
            <h2>Profile</h2>
          </div>

          <div className="profile-section">
            <div className="profile-picture">
              <img src={profile.profilePicture} alt="Profile" />
              <input type="file" accept="image/*" onChange={handleProfilePictureUpload} />
            </div>

            <div className="profile-details">
              <h3>Profile Details</h3>
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Email:</strong> {profile.email}</p>
            </div>
          </div>

          <div className="password-section">
            <h3>Change Password</h3>
            <form onSubmit={handlePasswordChange}>
              <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Change Password</button>
            </form>
          </div>

          <div className="notifications-section">
            <h3>Notification Settings</h3>
            <form>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="emailNotifications"
                  name="emailNotifications"
                  checked={notifications.emailNotifications}
                  onChange={handleNotificationsChange}
                />
                <label className="form-check-label" htmlFor="emailNotifications">
                  Email Notifications
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="smsNotifications"
                  name="smsNotifications"
                  checked={notifications.smsNotifications}
                  onChange={handleNotificationsChange}
                />
                <label className="form-check-label" htmlFor="smsNotifications">
                  SMS Notifications
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
