import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Services() {
  const navigate = useNavigate();
  const location = useLocation();

  const [openService, setOpenService] = useState(null);

  const services = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "SEO Optimization",
    "Digital Marketing",
    "Video Editing"
  ];

  const serviceDescriptions = {
    "Web Development":
      "We build fast, responsive, and modern websites using React, HTML, CSS, and JavaScript.",
    "App Development":
      "We develop user-friendly mobile and web applications with smooth performance.",
    "UI/UX Design":
      "We design clean and attractive interfaces focusing on user experience.",
    "SEO Optimization":
      "We optimize websites to rank higher on search engines and increase organic traffic.",
    "Digital Marketing":
      "We help brands grow online through social media marketing and paid ads.",
    "Video Editing":
      "Professional video editing for Instagram reels, YouTube shorts, and promotional videos."
  };

  const searchQuery =
    new URLSearchParams(location.search).get("search") || "";

  const filteredServices = services.filter((service) =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServiceClick = (service) => {
    setOpenService(openService === service ? null : service);

    if (service === "Video Editing") {
      window.open(
        "https://www.instagram.com/your_instagram_username",
        "_blank"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://chriskirby.net/content/images/2024/02/AICodingAssistant.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* MAIN CARD */}
      <div
        style={{
          maxWidth: "650px",
          margin: "auto",
          padding: "30px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.25)"
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
          Our Services
        </h1>

        <ul style={{ padding: 0 }}>
          {filteredServices.map((service, index) => (
            <li
              key={index}
              style={{
                listStyle: "none",
                marginBottom: "15px",
                transition: "transform 0.2s ease"
              }}
            >
              {/* SERVICE HEADER */}
              <div
                onClick={() => handleServiceClick(service)}
                style={{
                  padding: "14px 18px",
                  background:
                    service === "Video Editing"
                      ? "linear-gradient(135deg,#d1e7dd,#a3cfbb)"
                      : "linear-gradient(135deg,#ffeeba,#ffd966)",
                  borderRadius: "10px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span>🔹 {service}</span>
                <span>{openService === service ? "▲" : "▼"}</span>
              </div>

              {/* DESCRIPTION */}
              <div
                style={{
                  maxHeight: openService === service ? "140px" : "0",
                  overflow: "hidden",
                  transition: "all 0.35s ease",
                  background: "#f8f9fa",
                  marginTop: "6px",
                  borderRadius: "8px",
                  padding:
                    openService === service ? "12px 16px" : "0 16px",
                  opacity: openService === service ? 1 : 0
                }}
              >
                <p style={{ margin: 0, fontSize: "15px", color: "#333" }}>
                  {serviceDescriptions[service]}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* BACK BUTTON */}
        <div style={{ textAlign: "center", marginTop: "35px" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "12px 30px",
              borderRadius: "30px",
              border: "none",
              background: "linear-gradient(135deg,#6c757d,#495057)",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            ⬅ Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;




