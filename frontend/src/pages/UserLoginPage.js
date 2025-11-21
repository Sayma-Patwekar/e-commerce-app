import React from 'react';
import { Link } from 'react-router-dom';

function UserLoginPage() {
  return (
    <div className="login-page">
      <h2>User Login</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        New user? <Link to="/user-signup">Create an account</Link>
      </p>
    </div>
  );
}

export default UserLoginPage;