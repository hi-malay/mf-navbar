import React from "react";
import titleImage from "../assets/mf-title-image.png";

export default function Root() {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%", height: "64px" }}>
      <a
        className="navbar-brand"
        href="/"
        style={{ textDecoration: "none" }}
      >
        <img
          src={titleImage}
          height="38"
          width="38"
          alt=""
          style={{ borderRadius: "10px", boxShadow: "0 1px 3px rgba(0,0,0,.1)" }}
        />
        <span style={{ marginLeft: "0.75rem", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.025em", color: "#0f172a" }}>
          Microfrontends
        </span>
      </a>

      <nav style={{ marginLeft: "2rem", display: "flex", gap: "0.25rem" }}>
        <a
          href="/employees"
          style={{
            color: "#64748b",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "0.9rem",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            transition: "all 150ms",
          }}
          onMouseEnter={(e) => { e.target.style.color = "#6366f1"; e.target.style.background = "#f0f0ff"; }}
          onMouseLeave={(e) => { e.target.style.color = "#64748b"; e.target.style.background = "transparent"; }}
        >
          Employees
        </a>
      </nav>

      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "10px" }}>
        <span className="mf-framework-tag mf-framework-tag--react">React</span>
        <span style={{ fontSize: "0.7rem", color: "#94a3b8" }}>@mf-demo/navbar</span>
      </div>
    </div>
  );
}
