import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <h1 style={{}}>About Me:</h1>

      <p style={{marginLeft:"70px", width:"60%"}}>
        Hello! Mera name <strong>Avinash Chauhan</strong> hai. 
        Main ek passionate React.js developer hoon aur mujhe 
        modern web applications banana pasand hai.
      </p>

      <p style={{marginLeft:"70px", width:"60%"}}>
        Mujhe JavaScript, React.js, HTML, CSS aur APIs ke saath 
        kaam karna achha lagta hai. Main hamesha naye tools aur 
        technologies seekhne ki koshish karta hoon.
      </p>

      <p style={{marginLeft:"70px", width:"60%"}}>
        Free time me mujhe coding practice, problem solving 
        aur tech blogs padhna pasand hai.
      </p>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    margin: "auto",
    padding: "40px",
    fontFamily: "Arial",
  }
};

export default About;
