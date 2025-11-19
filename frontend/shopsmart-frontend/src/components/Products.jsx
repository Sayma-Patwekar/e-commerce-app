import axios from "axios";
import { useEffect, useState } from "react";

export default function Products({ token }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/products", {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      .then((res) => setProducts(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) return <div style={{ padding: 20 }}>Loading products...</div>;

  return (
    <div style={{ marginTop: 18 }}>
      <h3 style={{ marginBottom: 12 }}>Products</h3>

      <div className="grid-3">
        {products.map((p) => (
          <div key={p.id} className="card">
            <img
              src={p.image_url || "https://via.placeholder.com/400x300?text=No+Image"}
              alt=""
              className="product-img"
            />
            <h4 style={{ marginTop: 8 }}>{p.name}</h4>
            <div className="sub" style={{ marginTop: 6 }}>{p.description}</div>
            <div style={{ marginTop: 8, fontWeight: 700 }}>₹{p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
