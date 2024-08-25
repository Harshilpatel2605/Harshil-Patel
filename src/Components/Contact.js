import React, { useRef, useState } from "react";
import "../Styles/contact.css";
import Facebook from "../Assets/facebook-icon.png"
import twitter from "../Assets/twitter.png";
import Linkedin from "../Assets/Linkedin.png";
import instagram from "../Assets/instagram.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("All fields are necessary!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_2fn2l19",
        "template_xs06cwl",
        form.current,
        "9_1LLYK9FgShkFEuB"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email Sent!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="contact-me">Contact me</div>
      <div className="content">
        Please fill out the form below to discuss any work opportunities.
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="contact-name"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          className="contact-email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <textarea
          className="contact-message"
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <button id="btn" type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      <div className="links">
        <a
          href="https://www.facebook.com/profile.php?id=100086390537699"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} alt="Facebook-icon" />
        </a>
        <a
          href="https://x.com/Harshilpatel_26"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/harshil-patel-hnp2605/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Linkedin} alt="Linked-In-icon" />
        </a>
        <a
          href="https://www.instagram.com/harshilpatel.26/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
