import React from 'react';
import './AboutUs.css'; 
import Navbar from './NavBar';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <section className="about-us">
      <div className="about-us-container">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
          Welcome to <strong>Travel Budget Planning</strong>, your ultimate companion for planning
          trips without breaking the bank. Our platform helps you track expenses, manage budgets,
          and explore affordable destinations. Whether you're a solo traveler, a couple, or a group, 
          we've got the tools to make your travel dreams come true.
        </p>
        <p className="about-us-mission">
          Our mission is to simplify travel budgeting for everyone. We believe that exploring the
          world shouldn't come with financial stress. With <strong>Travel Budget Planning</strong>, 
          you can focus on creating memories while we handle the numbers.
        </p>
        <p className="about-us-goal">
          Let's make travel affordable, efficient, and enjoyable together!
        </p>
      </div>
    </section>
    </>
  );
};

export default AboutUs;
