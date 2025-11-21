import React from 'react';
import { Link } from 'react-router-dom';

function UserHomePage() {
  return (
    <div className="user-page">
      <h2>User Home Page</h2>
      <Link to="/products">View Products</Link>
    </div>
  );
}

export default UserHomePage;