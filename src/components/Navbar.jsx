import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#1a73e8",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <h2 style={{ margin: 0 }}>Apna Clone</h2>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Jobs
        </Link>

        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;