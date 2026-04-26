import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// ✅ Professional icons
import {
  BarChart,
  FileText,
  Briefcase,
  File,
  Mail,
  GraduationCap,
  HelpCircle,
  Brain,
  List,
} from "lucide-react";

function Home() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div style={styles.container}>
      {/* ✨ Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: isDark
            ? "radial-gradient(circle, rgba(99,102,241,0.25), transparent)"
            : "radial-gradient(circle, rgba(79,70,229,0.15), transparent)",
          filter: "blur(80px)",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Hero */}
      <div style={styles.hero}>
        <h1 style={styles.title}>
          <span style={{ marginRight: "10px" }}>🚀</span>
          <span style={styles.gradientText}>ResumePro</span>
        </h1>

        <p
          style={{
            ...styles.subtitle,
            color: isDark ? "rgba(255,255,255,0.7)" : "#6b7280",
          }}
        >
          Build better resumes, improve ATS score, and grow your career faster.
        </p>
      </div>

      {/* Workspace */}
      <h2
        style={{
          ...styles.sectionTitle,
          color: isDark ? "rgba(255,255,255,0.9)" : "#1f2937",
        }}
      >
        Workspace
      </h2>

      {/* Grid */}
      <div style={styles.grid}>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              ...styles.card,
              background: isDark ? "rgba(255,255,255,0.08)" : "#ffffff",
              color: isDark ? "#ffffff" : "#1f2937",
              border: isDark
                ? "1px solid rgba(255,255,255,0.1)"
                : "1px solid rgba(0,0,0,0.04)",
              boxShadow: isDark
                ? "0 10px 25px rgba(0,0,0,0.25)"
                : "0 6px 16px rgba(0,0,0,0.06)",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
              e.currentTarget.style.boxShadow = isDark
                ? "0 20px 40px rgba(0,0,0,0.4), 0 0 15px rgba(99,102,241,0.3)"
                : "0 12px 28px rgba(0,0,0,0.10)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = isDark
                ? "0 10px 25px rgba(0,0,0,0.25)"
                : "0 6px 16px rgba(0,0,0,0.06)";
            }}
          >
            <span style={styles.icon}>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ✅ UPDATED ICONS (NO EMOJIS) */
const menuItems = [
  { path: "/ats-score", label: "ATS Score", icon: <BarChart size={20} /> },
  {
    path: "/compress-pdf",
    label: "Compress PDF",
    icon: <FileText size={20} />,
  },
  { path: "/jobs", label: "Find Jobs", icon: <Briefcase size={20} /> },
  {
    path: "/resume/software-engineer",
    label: "Resume Templates",
    icon: <File size={20} />,
  },
  { path: "/cover-letters", label: "Cover Letters", icon: <Mail size={20} /> },
  {
    path: "/fresher-resume",
    label: "Fresher Resume",
    icon: <GraduationCap size={20} />,
  },
  {
    path: "/interview-questions",
    label: "Interview Questions",
    icon: <HelpCircle size={20} />,
  },
  { path: "/test", label: "Test Your Skills", icon: <Brain size={20} /> },
  {
    path: "/bullet-generator",
    label: "Resume Bullet Generator",
    icon: <List size={20} />,
  },
];

const styles = {
  container: {
    padding: "50px 20px",
    textAlign: "center",
    minHeight: "100vh",
    transition: "all 0.3s ease",
    position: "relative",
  },

  hero: {
    marginBottom: "60px",
    position: "relative",
    zIndex: 2,
  },

  title: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "10px",
    letterSpacing: "0.5px",
  },

  gradientText: {
    display: "inline-block",
    background: "linear-gradient(90deg, #6366f1, #a855f7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    fontSize: "17px",
  },

  sectionTitle: {
    marginBottom: "35px",
    fontSize: "22px",
    fontWeight: "600",
    position: "relative",
    zIndex: 2,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
    maxWidth: "1000px",
    margin: "auto",
    position: "relative",
    zIndex: 2,
  },

  card: {
    padding: "26px",
    borderRadius: "16px",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: "600",
    backdropFilter: "blur(12px)",
    transition: "all 0.25s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },

  // ✅ FIXED FOR SVG ICONS
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
  },
};

export default Home;
