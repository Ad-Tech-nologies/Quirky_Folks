import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    genre: "",
    brandName: "",
    instaLink: "",
    ytLink: "",
    budget: "",
    message: ""
  });

  const [sumbitBtn, setSubmitBtn] = useState("SUBMIT");

  const clearState = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      genre: "",
      brandName: "",
      instaLink: "",
      ytLink: "",
      budget: "",
      message: ""
    });
    // setSubmitBtn("SUBMIT");

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0ijgheg", // replace with your EmailJS service ID
        "template_xl5fuyq", // replace with your EmailJS template ID
        formData,
        "Qktr1GQxEO9Kdd5d4" // replace with your EmailJS key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitBtn("SUBMITTED");
        clearState();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email.");
      });
  };

  return (
    <div data-scroll data-scroll-speed="0.1" className="contact-us" id="contact-us">
      <h1>CONTACT US</h1>
      <form onSubmit={handleSubmit}>
        <div className="information">
          <div className="col">
          <div className="name contactdiv">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="emailid contactdiv">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          </div>
          
          <div className="col">
          <div className="phno contactdiv">
            <label>Phone No:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="roles contactdiv">
            <label>Role: </label>
            <select name="role" value={formData.role} onChange={handleChange}    required>
              <option value="">Select Role</option>
              <option value="influencer">Influencer</option>
              <option value="brand">Brand</option>
            </select>
          </div>
          </div>
         

          {formData.role === "influencer" && (
            <div>
              <div className="genre contactdiv" >
                <label>Genre:</label>
                <input
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="insta contactdiv" >
                <label>Instagram Link:</label>
                <input
                  type="text"
                  name="instaLink"
                  value={formData.instaLink}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="yt contactdiv" >
                <label>Youtube Link:</label>
                <input
                  type="text"
                  name="ytLink"
                  value={formData.ytLink}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {formData.role === "brand" && (
            <div>
              <div className="brandName contactdiv">
                <label>Brand Name:</label>
                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="budget contactdiv" >
                <label>Budget:</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="message contactdiv">
          <label>How can we help you: </label>
          <input
            type="message"
            name="message"
            className="msginput"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button className="submit" type="submit">{sumbitBtn}</button>
      </form>
    </div>
  );
}

export default ContactUs;
