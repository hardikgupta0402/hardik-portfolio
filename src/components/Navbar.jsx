export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "16px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(10, 11, 18, 0.85)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      <div style={{ fontWeight: "700" }}>
        Hardik Gupta
      </div>

      <div
        style={{
          display: "flex",
          gap: "18px",
          fontSize: "0.9rem",
          flexWrap: "wrap",
        }}
      >
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#research">Research</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      style={{
        textDecoration: "none",
        color: "#e5e7eb",
        cursor: "pointer",
        transition: "color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.color = "#9f7aea")}
      onMouseLeave={(e) => (e.target.style.color = "#e5e7eb")}
    >
      {children}
    </a>
  );
}
