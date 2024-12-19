import React from "react";
import "./Contact.css"; // Import CSS for styling

const ContactSection = () => {
  return (
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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook Logo"
                className="social-logo"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_2012.svg"
                alt="Twitter Logo"
                className="social-logo"
              />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                alt="Instagram Logo"
                className="social-logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
