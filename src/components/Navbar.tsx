export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(2, 6, 23, 0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(52, 211, 153, 0.15)"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "70px"
        }}
      >
        <h1 style={{ fontSize: "1rem", letterSpacing: "1px" }}>
          CRISTIAN TORREJOS
        </h1>

        <div style={{ display: "flex", gap: "1.8rem" }}>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Tech Stack</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
