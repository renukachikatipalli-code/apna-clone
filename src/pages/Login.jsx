import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Email: ${email}`);
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "10px",
          width: "300px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "10px",
          width: "300px",
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          background: "#1a73e8",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;