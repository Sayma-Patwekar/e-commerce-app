import React, { useState, useEffect } from 'react';

function UserManagementPage() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ username: '', email: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:8080/api/admin/users', {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` },
    });
    if (response.ok) {
      setUsers(await response.json());
    }
  };

  const handleEdit = (user) => {
    setEditing(user);
    setForm(user);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8080/api/admin/users/${editing.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setEditing(null);
      fetchUsers();
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8080/api/admin/users/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` },
    });

    if (response.ok) {
      fetchUsers();
    }
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      {editing && (
        <form onSubmit={handleSubmit}>
          <h3>Edit User</h3>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <button type="submit">Update</button>
          <button onClick={() => setEditing(null)}>Cancel</button>
        </form>
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagementPage;