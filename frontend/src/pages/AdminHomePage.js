import React from 'react';
import { Link } from 'react-router-dom';

function AdminHomePage() {
  return (
    <div className="admin-page">
      <h2>Admin Home Page</h2>
      <div>
        <Link to="/admin/product-management">Product Management</Link>
      </div>
      <div>
        <Link to="/admin/user-management">User Management</Link>
      </div>
    </div>
  );
}

export default AdminHomePage;