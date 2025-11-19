import { useState } from "react";
import axios from "axios";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState("");

  const login = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      setToken(res.data.token);
    } catch (err) {
      setError(err?.response?.data?.error || "Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, marginTop: 18 }}>
      <h2 style={{ marginBottom: 8 }}>Login</h2>

      <input
        className="input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <div style={{ color: "crimson", marginBottom: 8 }}>{error}</div>}

      <button className="button" onClick={login} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      <div style={{ marginTop: 12, color: "#6b7280", fontSize: 13 }}>
        Tip: create users via the backend signup endpoint or insert into DB.
      </div>
    </div>
  );
}
