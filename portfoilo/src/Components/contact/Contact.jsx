// import React from 'react'
import "./contact.scss";
import weather from "../../assets/weather.png";
import { useState } from "react";
import contactme from "../../assets/contactme.jpg";

export default function Contact() {
  const [message, setMeassage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMeassage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={contactme} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks I will reply asap</span>}
        </form>
      </div>
    </div>
  );
}
