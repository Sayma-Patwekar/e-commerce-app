import React, { useState, useEffect } from 'react';

function ProductManagementPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', price: '' });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:8080/api/admin/products');
    if (response.ok) {
      setProducts(await response.json());
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editing ? `http://localhost:8080/api/admin/products/${editing.id}` : 'http://localhost:8080/api/admin/products';
    const method = editing ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` },
      body: JSON.stringify({ ...form, price: parseFloat(form.price) }),
    });

    if (response.ok) {
      setForm({ name: '', description: '', price: '' });
      setEditing(null);
      fetchProducts();
    }
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditing(product);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8080/api/admin/products/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${localStorage.getItem('adminToken')}` },
    });

    if (response.ok) {
      fetchProducts();
    }
  };

  return (
    <div className="product-management">
      <h2>Product Management</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" step="0.01" required />
        <button type="submit">{editing ? 'Update' : 'Create'}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductManagementPage;