import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ResumeDetail from "./pages/ResumeDetail";
import CoverLetters from "./pages/CoverLetters";
import FresherResume from "./pages/FresherResume";
import InterviewQuestions from "./pages/InterviewQuestions";
import TestSkills from "./pages/TestSkills";
import ATSChecker from "./pages/ATSChecker";
import ATSScore from "./pages/ATSScore";
import CompressPDF from "./pages/CompressPDF";
import Jobs from "./pages/Jobs";
import BulletGenerator from "./pages/BulletGenerator";

function App() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div style={styles.app(isDark)}>
      <Navbar />

      {/* 🔥 Main Content */}
      <div style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume/:type" element={<ResumeDetail />} />
          <Route path="/cover-letters" element={<CoverLetters />} />
          <Route path="/fresher-resume" element={<FresherResume />} />
          <Route path="/interview-questions" element={<InterviewQuestions />} />
          <Route path="/test" element={<TestSkills />} />
          <Route path="/ats-checker" element={<ATSChecker />} />
          <Route path="/ats-score" element={<ATSScore />} />
          <Route path="/compress-pdf" element={<CompressPDF />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/bullet-generator" element={<BulletGenerator />} />
        </Routes>
      </div>

      {/* 🔥 Footer always at bottom */}
      <Footer />
    </div>
  );
}

const styles = {
  app: (isDark) => ({
    display: "flex",
    flexDirection: "column",

    minHeight: "100vh",
    width: "100%",

    margin: 0,
    padding: 0,

    /* 🎨 UPDATED BACKGROUND */
    background: isDark
      ? "linear-gradient(135deg, #0f172a, #1e293b, #312e81)"
      : `
        radial-gradient(circle at top left, #dbeafe, transparent 40%),
        radial-gradient(circle at bottom right, #c7dbff, transparent 40%),
        linear-gradient(135deg, #e0ecff, #c7dbff, #dbeafe)
      `,

    color: isDark ? "#ffffff" : "#1f2937",

    backgroundAttachment: "fixed",

    transition: "background 0.3s ease, color 0.3s ease",
  }),

  main: {
    flex: 1,
    paddingTop: "80px",
  },
};

export default App;
