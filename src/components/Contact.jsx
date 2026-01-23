import React from "react";

function Contact() {
  return (
    <div style={styles.bg}>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Contact Me</h1>

          <p style={styles.text}>
            Have a project in mind or want to work together?  
            Feel free to reach out — I’d love to connect! 😊
          </p>

          <div style={styles.infoBox}>
            <p><strong>📍 Location:</strong> Azamgarh, India</p>
            <p><strong>📧 Email:</strong> rajputavinash889977@gmail.com</p>
            <p><strong>📞 Phone:</strong> +91 7905282999</p>
          </div>

          <div style={styles.social}>
            <a
              href="https://www.instagram.com/aurawith__avi"
              target="_blank"
              rel="noreferrer"
              style={styles.insta}
            >
              📸 Instagram
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              style={styles.github}
            >
              💻 GitHub
            </a>
          </div>

          <p style={styles.quote}>
            “Let’s build something amazing together.” 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  overlay: {
    minHeight: "100vh",
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },

  card: {
    background: "rgba(255,255,255,0.95)",
    padding: "40px",
    borderRadius: "18px",
    maxWidth: "600px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 20px 45px rgba(0,0,0,0.45)",
    fontFamily: "Arial",
  },

  heading: {
    fontSize: "34px",
    marginBottom: "15px",
  },

  text: {
    fontSize: "16px",
    lineHeight: "1.7",
    marginBottom: "20px",
    color: "#333",
  },

  infoBox: {
    textAlign: "left",
    marginBottom: "25px",
    fontSize: "15px",
    lineHeight: "1.8",
  },

  social: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "20px",
  },

  insta: {
    textDecoration: "none",
    background: "#E1306C",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: "600",
  },

  github: {
    textDecoration: "none",
    background: "#24292e",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: "8px",
    fontWeight: "600",
  },

  quote: {
    marginTop: "15px",
    fontStyle: "italic",
    color: "#0d6efd",
    fontWeight: "600",
  },
};

export default Contact;
