import React, { useState, useEffect } from 'react';
import usersData from '../data/userMgmt.json';
import '../styles/UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersData);
  }, []);

  return (
    <div className="user-management-page">
      <h2>User Management</h2>
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className={`user-card ${user.status.toLowerCase()}`}>
            <h3>{user.username}</h3>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Status:</strong> {user.status}</p>
            <p><strong>Last Login:</strong> {new Date(user.lastLogin).toLocaleString()}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;