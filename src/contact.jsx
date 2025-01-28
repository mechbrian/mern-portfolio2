/*
  File Name: contact.jsx
  Student Name: Po-Kai Chao
  Student ID: 301426941
  Date: January 26, 2025  
*/

// import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

export default function Contact() {

  // useNavigate is a hook that returns the navigate function
  const navigate = useNavigate(); // For redirection to Home

  // useState is a hook that returns an array with two elements
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  // my contact data object
  const myContact = {
    firstName: "Po-Kai (Brian)",
    lastName: "Chao",
    contactNumber: "+1 647-960-9171",
    email: "pchao8@my.centennialcollege.ca",
  };

  // handleChange function to update the form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        // Spread operator to copy the previous data
        // and then update the new data
      ...prevData,
      [name]: value,
    }));
  };

  // handleSubmit function to submit the form data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate("/");
  };

  return (

    // main body of the contact page
    <div className="contact-container">

      {/*my contact information section */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Name:</strong> {myContact.firstName} {myContact.lastName}
        </p>
        <p>
          <strong>Email:</strong>
          {myContact.email}
        </p>
        <p>
          <strong>Phone:</strong> {myContact.contactNumber}
        </p>
      </div>

      {/* form section */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send Me a Message</h2>

        {/* first name section */}
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* last name section */}
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* contact number section */}
        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* email section */}
        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* message section */}
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* submit button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

    </div>
  );
}
