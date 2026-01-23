import React from "react";
import bgImage from "../assets/bbbbbggggggg.jpeg"; // image path check kar lena

function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          background: "rgba(0, 0, 0, 0.6)",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
          About Me
        </h1>

        <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
          Hi! My name is <strong>Avinash Chauhan</strong>. I am 20 years old and I am
            from <strong>Azamgarh</strong>. Currently, I am pursuing my graduation.
            I am a web developer with strong knowledge of front-end and back-end
            technologies. I have hands-on experience with React.js, JavaScript,
            HTML, CSS, Node.js, and Python. I enjoy building user-friendly web
            applications and continuously improving my technical skills.
        </p>

        <p style={{ fontSize: "18px", marginTop: "15px" }}>
          <strong>Skills:</strong> React.js, JavaScript, HTML, CSS, Node.js, Python
        </p>

        <p style={{ marginTop: "20px", fontStyle: "italic", color: "#f1c40f" }}>
          “Code hard. Train harder.” 💻💪
        </p>
      </div>
    </div>
  );
}

export default About;


