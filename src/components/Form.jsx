import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ JS Validation
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === ""
    ) {
      alert("❌ Please fill all fields before submitting");
      return; // ⛔ STOP navigation
    }

    console.log("Submitted Form Data:", formData);

    // ✅ Only when form is complete
    navigate("/services");
  };

  return (
    <>
      <h1 style={{ marginLeft: "105px" }}>Fill Your Details:</h1>

      <form
        className="form"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          margin: "20px",
          alignItems: "center"
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required   
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required   
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required   
        />

        <button
          className="btn btn-primary"
          style={{ width: "150px" }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
