import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/UserMgmt.css';

const UserMgmt = () => {
  const [users, setUsers] = useState([
    // Sample users
    { id: 1, name: 'John Doe', role: 'Admin', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', role: 'User', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', role: 'Moderator', email: 'bob@example.com' }
  ]);
  const [selectedUser, setSelectedUser] = useState(null);

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

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name: e.target.name.value,
      role: e.target.role.value,
      email: e.target.email.value,
    };
    setUsers([...users, newUser]);
    e.target.reset();
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <div className="container">
          <div className="header">
            <h2>User Management</h2>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="user-list">
                <h3>User List</h3>
                <ul className="list-group">
                  {users.map((user) => (
                    <li
                      key={user.id}
                      className={`list-group-item ${selectedUser?.id === user.id ? 'active' : ''}`}
                      onClick={() => handleUserClick(user)}
                    >
                      {user.name} - {user.role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              {selectedUser && (
                <div className="user-details">
                  <h3>User Details</h3>
                  <p><strong>Name:</strong> {selectedUser.name}</p>
                  <p><strong>Email:</strong> {selectedUser.email}</p>
                  <p>
                    <strong>Role:</strong>
                    <select value={selectedUser.role} onChange={handleRoleChange}>
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                      <option value="Moderator">Moderator</option>
                    </select>
                  </p>
                </div>
              )}

              <div className="add-user">
                <h3>Add User</h3>
                <form onSubmit={handleAddUser}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select className="form-control" id="role" required>
                      <option value="User">User</option>
                      <option value="Admin">Admin</option>
                      <option value="Moderator">Moderator</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">Add User</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMgmt;
