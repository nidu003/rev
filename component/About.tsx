import React from 'react';

const About = () => {
  return (
    <div>
      <div className="reviews-container">
        <div className="reviews-content">
          <div className="reviews-text">
            <h1>Know Us more</h1>
            <h2>About Us</h2>
            <p>Our mission is to help roofing companies boost revenue by streamlining operations through intelligent automation. We provide cutting-edge tools that eliminate inefficiencies, enhance productivity, and unlock new growth opportunities, empowering roofing businesses to scale faster and smarter.</p>
            <button className="button2">Get Started → </button>
          </div>
          <div className="reviews-image">
            <img src="/Illustration.png" alt="Online Reviews" />
          </div>
        </div>
      </div>
      <div className="About-container">
        <div className="About-content">
          <div className="About-image">
            <img src="/Group 14.png" alt="Online Reviews" />
          </div>
          <div className="About-text">
            <h2>Focus on Industry Expertise</h2>

            <p>With deep expertise in the roofing industry, we understand the unique challenges you face. Our tailored solutions empower roofing companies to streamline processes, improve accuracy, and confidently bid on large commercial projects. By leveraging our industry insights and cutting-edge tools, you can enhance your competitive edge, win bigger contracts, and scale your business to new heights</p>
            <button className="button">Get Started → </button>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default About;