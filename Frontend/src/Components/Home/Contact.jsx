import React from "react";
import "./Contact.css"; // Import CSS for styling
import Navbar from "./NavBar";
import { Twitter, InstagramIcon, FacebookIcon } from 'lucide-react';

const ContactSection = () => {
  return (
    <>
    <Navbar/>
    <section className="contact-section">
      <h2 className="title">Contact Us</h2>
      <p>
        Have questions about planning your travel budget? Get in touch with us
        through the following channels:
      </p>
      <div className="contact-details">
        <p className="para">
          <strong>Email:</strong> support@travelbudgetplanner.com
        </p>
        <p className="para">
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p className="para">
          <strong>Follow us:</strong>
        </p>
        <ul className="social-links">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter/>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon/>
            </a>
          </li>
        </ul>
      </div>
    </section>
    </>
  );
};

export default ContactSection;
