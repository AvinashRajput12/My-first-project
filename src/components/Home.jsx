import React from "react";

function Home() {
  return (
    <div style={styles.bg}>
      <div style={styles.overlay}>
        <div style={styles.container}>
          <h1 style={styles.heading}>🌐 Website Description</h1>

          <p style={styles.text}>
           

            This website is a personal portfolio designed to showcase my skills, projects, and passion for web development. Built using modern web technologies, it focuses on clean design, smooth user experience, and responsive layouts across all devices.

            The website highlights my expertise in React.js, JavaScript, HTML, CSS, Node.js, and Python, along with a brief introduction about who I am and what I do. Each section is carefully structured to reflect my creativity, technical knowledge, and dedication to building fast, scalable, and user-friendly web applications.

            Whether you're a client, recruiter, or fellow developer, this website serves as a one-stop place to explore my work, understand my skill set, and connect with me professionally
          </p>

          <p style={styles.text}>
            Mujhe JavaScript, React.js, HTML, CSS aur APIs ke saath kaam karna
            achha lagta hai. Main hamesha naye tools aur technologies seekhne ki
            koshish karta hoon.
          </p>

          <p style={styles.text}>
            Free time me mujhe coding practice, problem solving aur tech blogs
            padhna pasand hai.
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
      "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  overlay: {
    minHeight: "100vh",
    background:
      "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
    display: "flex",
    alignItems: "center",
    padding: "20px",
  },

  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "40px",
    background: "rgba(255,255,255,0.92)",
    borderRadius: "16px",
    animation: "fadeIn 1.2s ease-in-out",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
    fontFamily: "Arial",
  },

  heading: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "32px",
  },

  text: {
    fontSize: "16px",
    lineHeight: "1.7",
    marginBottom: "15px",
  },
};

export default Home;
