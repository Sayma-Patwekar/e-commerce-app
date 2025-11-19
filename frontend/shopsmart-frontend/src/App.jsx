import React, { useState } from "react";
import Login from "./components/Login";
import Products from "./components/Products";

export default function App() {
  const [token, setToken] = useState("");

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div>
            <div className="title">ShopSmart</div>
            <div className="sub">Simple demo store</div>
          </div>
          {!token ? null : (
            <button className="button" onClick={() => setToken("")}>Logout</button>
          )}
        </div>

        {!token ? (
          <Login setToken={setToken} />
        ) : (
          <Products token={token} />
        )}
      </div>
    </div>
  );
}
