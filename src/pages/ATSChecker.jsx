import { useState } from "react";

function ATSChecker() {
  const [jobDesc, setJobDesc] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [score, setScore] = useState(null);
  const [missingKeywords, setMissingKeywords] = useState([]);

  const handleCheck = () => {
    const jobWords = jobDesc.toLowerCase().split(/\W+/);
    const resumeWords = resumeText.toLowerCase().split(/\W+/);

    const uniqueJobWords = [...new Set(jobWords)].filter(
      (word) => word.length > 3,
    );

    const matched = uniqueJobWords.filter((word) => resumeWords.includes(word));

    const missing = uniqueJobWords.filter(
      (word) => !resumeWords.includes(word),
    );

    const calculatedScore = Math.round(
      (matched.length / uniqueJobWords.length) * 100,
    );

    setScore(calculatedScore);
    setMissingKeywords(missing.slice(0, 10));
  };

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ marginBottom: "20px" }}>ATS Resume Checker</h1>

      {/* Resume Section */}
      <div style={{ marginBottom: "25px" }}>
        <h3>Paste Resume Text</h3>
        <textarea
          rows="6"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />
      </div>

      {/* Job Description */}
      <div style={{ marginBottom: "25px" }}>
        <h3>Paste Job Description</h3>
        <textarea
          rows="6"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
        />
      </div>

      {/* Button */}
      <button
        onClick={handleCheck}
        style={{
          padding: "12px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Check ATS Score
      </button>

      {/* Result */}
      {score !== null && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "#f9fafb",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2>Score: {score}%</h2>

          <h3 style={{ marginTop: "15px" }}>Missing Keywords:</h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {missingKeywords.map((word, index) => (
              <span
                key={index}
                style={{
                  background: "#fee2e2",
                  color: "#991b1b",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontSize: "14px",
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ATSChecker;
