import React from 'react';
import { Link } from 'react-router-dom';

function AdminLoginPage() {
  return (
    <div className="login-page">
      <h2>Admin Login</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        New admin? <Link to="/admin-signup">Create an account</Link>
      </p>
    </div>
  );
}

export default AdminLoginPage;