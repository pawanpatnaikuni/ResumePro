import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  const getLinkStyle = (path) => ({
    ...styles.link,
    background:
      location.pathname === path ? "rgba(255,255,255,0.2)" : "transparent",
  });

  return (
    <div style={styles.wrapper}>
      <div style={styles.navbar}>
        {/* Links */}
        <Link to="/" style={getLinkStyle("/")}>
          Home
        </Link>
        <Link to="/cover-letters" style={getLinkStyle("/cover-letters")}>
          Cover Letters
        </Link>
        <Link to="/ats-score" style={getLinkStyle("/ats-score")}>
          ATS Score
        </Link>
        <Link to="/fresher-resume" style={getLinkStyle("/fresher-resume")}>
          Fresher Resume
        </Link>
        <Link
          to="/interview-questions"
          style={getLinkStyle("/interview-questions")}
        >
          Interview Questions
        </Link>
        <Link to="/compress-pdf" style={getLinkStyle("/compress-pdf")}>
          Compress PDF
        </Link>
        <Link to="/jobs" style={getLinkStyle("/jobs")}>
          Jobs
        </Link>

        {/* Theme Button */}
        <button onClick={toggleTheme} style={styles.button}>
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    top: "12px", // ✅ FIXED (was "20")
    left: "0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: 1000,
  },

  navbar: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    padding: "12px 28px",

    maxWidth: "1100px",
    width: "95%",

    // 🔥 PREMIUM GRADIENT
    background: "linear-gradient(135deg, #4f46e5, #7c3aed)",

    borderRadius: "40px",

    // 🔥 Softer border (no harsh white edge)
    border: "1px solid rgba(255,255,255,0.1)",

    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",

    flexWrap: "nowrap",
    overflowX: "auto",

    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",

    transition: "all 0.3s ease",
  },

  link: {
    textDecoration: "none",
    color: "#ffffff",
    fontWeight: "500",
    fontSize: "14px",
    padding: "6px 12px",
    borderRadius: "20px",
    whiteSpace: "nowrap",
    transition: "all 0.2s ease",
  },

  button: {
    marginLeft: "auto",
    padding: "6px 14px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
    whiteSpace: "nowrap",

    background: "rgba(255,255,255,0.2)",
    color: "#ffffff",

    transition: "all 0.2s ease",
  },
};

export default Navbar;
