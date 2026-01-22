import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const services = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "SEO Optimization",
    "Digital Marketing",
    "Video Editing"
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#f0f4ff"
      }}
    >
      <h1 style={{ textAlign: "center" }}>Our Services</h1>

      <ul style={{ marginTop: "20px", fontSize: "18px" }}>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>

      {/* 🔙 Back Button */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          className="btn btn-secondary"
          style={{ width: "160px" }}
          onClick={() => navigate("/")}
        >
          ⬅ Back to Form
        </button>
      </div>
    </div>
  );
}

export default Services;

