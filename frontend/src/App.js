import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserLoginPage from './pages/UserLoginPage';
import AdminLoginPage from './pages/AdminLoginPage';
import UserHomePage from './pages/UserHomePage';
import AdminHomePage from './pages/AdminHomePage';
import ProductsPage from './pages/ProductsPage';
import ProductManagementPage from './pages/ProductManagementPage';
import UserManagementPage from './pages/UserManagementPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-login" element={<UserLoginPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/user-home" element={<UserHomePage />} />
          <Route path="/admin-home" element={<AdminHomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/admin/product-management" element={<ProductManagementPage />} />
          <Route path="/admin/user-management" element={<UserManagementPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;