import { useParams } from "react-router-dom";

function ResumeDetail() {
  const { type } = useParams();

  const pdfPath = `/resumes/${type}.pdf`;
  const docxPath = `/resumes/${type}.docx`;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{type.replace("-", " ").toUpperCase()} Resume</h2>

      {/* View Button */}
      <div style={{ marginTop: "20px" }}>
        <a href={pdfPath} target="_blank" rel="noopener noreferrer">
          <button>View Resume</button>
        </a>
      </div>

      {/* Download Button */}
      <div style={{ marginTop: "10px" }}>
        <a href={docxPath} download>
          <button>Download Resume</button>
        </a>
      </div>
    </div>
  );
}

export default ResumeDetail;
