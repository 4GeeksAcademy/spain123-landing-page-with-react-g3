import React, { useState } from "react";

export const Navbar = () => {
  // Estado para abrir/cerrar el menú de "Contacto"
  const [showMenu, setShowMenu] = useState(false);

  // 🎨 Estilos mágicos
  const styles = {
    navbar: {
      background: "linear-gradient(90deg, #0d1b2a, #1b263b, #0d1b2a)",
      borderBottom: "2px solid #cfa46e",
      boxShadow: "0 0 25px rgba(255, 215, 150, 0.6)",
      fontFamily: "'Cinzel Decorative', serif",
      padding: "10px 20px",
    },
    logo: {
      color: "#ffd166",
      fontWeight: "bold",
      fontSize: "1.5rem",
      textShadow: "0 0 10px #ffd166, 0 0 20px #ffcc00",
      transition: "transform 0.3s ease, textShadow 0.3s ease",
    },
    link: {
      color: "#b8c6ff",
      fontWeight: "500",
      marginRight: "15px",
      textShadow: "0 0 8px rgba(100, 150, 255, 0.5)",
      transition: "color 0.3s ease, textShadow 0.3s ease",
      cursor: "pointer",
    },
    linkHover: {
      color: "#69f0ff",
      textShadow: "0 0 20px #69f0ff",
    },
    dropdown: {
      position: "absolute",
      background: "rgba(15, 30, 60, 0.95)",
      border: "1px solid #cfa46e",
      borderRadius: "8px",
      boxShadow: "0 0 20px rgba(255, 200, 100, 0.5)",
      padding: "10px 0",
      marginTop: "8px",
      animation: "fadeIn 0.3s ease",
      zIndex: 10,
    },
    dropdownItem: {
      color: "#ffd166",
      padding: "8px 20px",
      display: "block",
      textDecoration: "none",
      transition: "all 0.3s ease",
      textShadow: "0 0 8px rgba(255, 200, 50, 0.6)",
    },
    button: {
      background: "linear-gradient(90deg, #ffcc00, #ff8800)",
      color: "#000",
      border: "none",
      fontWeight: "bold",
      boxShadow: "0 0 20px rgba(255, 200, 0, 0.6)",
      transition: "all 0.3s ease",
    },
    input: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "white",
      border: "1px solid #888",
    },
  };

  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={styles.logo}
          onMouseOver={(e) => {
            e.target.style.textShadow = "0 0 30px #ffe873, 0 0 50px #ffd700";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.textShadow = "0 0 10px #ffd166, 0 0 20px #ffcc00";
            e.target.style.transform = "scale(1)";
          }}
        >
          ✨ Magic Realms ✨
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 position-relative">
            {["Home", "Reinos", "Hechizos"].map((item, i) => (
              <li className="nav-item" key={i}>
                <a
                  className="nav-link"
                  href="#"
                  style={styles.link}
                  onMouseOver={(e) => {
                    e.target.style.color = styles.linkHover.color;
                    e.target.style.textShadow = styles.linkHover.textShadow;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = styles.link.color;
                    e.target.style.textShadow = styles.link.textShadow;
                  }}
                >
                  {item}
                </a>
              </li>
            ))}

            {/* CONTACTO con menú desplegable */}
            <li className="nav-item position-relative">
              <span
                className="nav-link"
                style={styles.link}
                onClick={() => setShowMenu(!showMenu)}
                onMouseOver={(e) => {
                  e.target.style.color = styles.linkHover.color;
                  e.target.style.textShadow = styles.linkHover.textShadow;
                }}
                onMouseOut={(e) => {
                  e.target.style.color = styles.link.color;
                  e.target.style.textShadow = styles.link.textShadow;
                }}
              >
                Contacto ▾
              </span>

              {showMenu && (
                <div style={styles.dropdown}>
                  {["Alejandro", "Edgardo", "Félix"].map((name) => (
                    <a
                      key={name}
                      href="#"
                      style={styles.dropdownItem}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = "rgba(255, 215, 100, 0.1)";
                        e.target.style.textShadow =
                          "0 0 15px rgba(255, 215, 150, 1)";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.textShadow =
                          "0 0 8px rgba(255, 200, 50, 0.6)";
                      }}
                    >
                      {name}
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Buscador */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar..."
              aria-label="Search"
              style={styles.input}
              onFocus={(e) => {
                e.target.style.boxShadow = "0 0 10px #69f0ff";
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = "none";
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
            />
            <button
              className="btn"
              type="submit"
              style={styles.button}
              onMouseOver={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #ffe873, #ffb300)";
                e.target.style.boxShadow =
                  "0 0 40px rgba(255, 230, 100, 0.9)";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #ffcc00, #ff8800)";
                e.target.style.boxShadow =
                  "0 0 20px rgba(255, 200, 0, 0.6)";
                e.target.style.transform = "scale(1)";
              }}
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};