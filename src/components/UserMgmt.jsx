import React, { useState, useEffect } from 'react';
import userMgmtData from '../data/userMgmt.json';
import '../styles/UserMgmt.css';

const UserMgmt = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setUsers(userMgmtData);
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleRoleChange = (e) => {
    if (selectedUser) {
      const updatedUsers = users.map((user) =>
        user.id === selectedUser.id ? { ...user, role: e.target.value } : user
      );
      setUsers(updatedUsers);
      setSelectedUser({ ...selectedUser, role: e.target.value });
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    Object.values(user).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      username: e.target.username.value,
      email: e.target.email.value,
      role: e.target.role.value,
      lastLogin: new Date().toISOString(),
      status: "Active"
    };
    setUsers([...users, newUser]);
    e.target.reset();
  };

  return (
    <div className="user-mgmt-page">
      <h2>User Management</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="user-management-content">
        <div className="user-list-section">
          <h3>User List</h3>
          <ul className="list-group">
            {filteredUsers.map((user) => (
              <li
                key={user.id}
                className={`list-group-item ${selectedUser?.id === user.id ? 'active' : ''}`}
                onClick={() => handleUserClick(user)}
              >
                {user.username} - {user.role}
              </li>
            ))}
          </ul>
        </div>

        <div className="user-details-section">
          {selectedUser && (
            <div className="user-details">
              <h3>User Details</h3>
              <p><strong>Username:</strong> {selectedUser.username}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p>
                <strong>Role:</strong>
                <select value={selectedUser.role} onChange={handleRoleChange}>
                  <option value="Administrator">Administrator</option>
                  <option value="User">User</option>
                  <option value="Guest">Guest</option>
                  <option value="Auditor">Auditor</option>
                </select>
              </p>
              <p><strong>Last Login:</strong> {new Date(selectedUser.lastLogin).toLocaleString()}</p>
              <p><strong>Status:</strong> {selectedUser.status}</p>
            </div>
          )}

          <div className="add-user">
            <h3>Add User</h3>
            <form onSubmit={handleAddUser}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select className="form-control" id="role" required>
                  <option value="User">User</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Guest">Guest</option>
                  <option value="Auditor">Auditor</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Add User</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMgmt;
