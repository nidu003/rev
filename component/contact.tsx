import Head from 'next/head';
import React from 'react';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="containerc">
        <h1>Contact Us</h1>
        <p>Sign Up For A Free Demo To See How We Help Roofing Companies <br />Grow Revenue</p>
        <div className="imageContainerc">
          <img src="/Group 15 (1).png" alt="Image" className="home" />
          <img src="/book demo.png" alt="Image" className="floatRight" />
        </div>
      </div>
      <div className="containerg">
        <div className="contentg">
          <h1>EXPLORE A BETTER WAY TO GROW</h1>
          <div style={{ backgroundColor: 'white', height: '2px', width: '500px', margin: '10px auto' }} /> 
          <div className="buttons" style={{ textAlign: 'center' }}>
            <button className="get-started">GET STARTED → </button>
            <button className="schedule-demo">SCHEDULE A DEMO → </button>
          </div>
        </div>
        <div className="footer">
          <p>Copyright New Rev 2024 -- All Rights Reserved</p>
          <p>We're On A Mission To Build A Better Future Where Technology Creates Good Jobs For Everyone.</p>
        </div>
      </div>
    </div>
  );
}