import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Main Home Page</h1>
      <div className="login-container">
        <Link to="/user-login"><button>User Login</button></Link>
        <Link to="/admin-login"><button>Admin Login</button></Link>
      </div>
    </div>
  );
}

export default HomePage;