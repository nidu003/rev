import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <div className="containerh">
        <div className="contenth">
          <h1>UNLOCK LARGE COMMERCIAL <br/> ROOFING PROJECTS WITH<br/> AUTOMATED SALES AND MARKETING <br/> SOLUTIONS</h1>
          <p>Helping Roofing Companies Add New Revenue Streams Through Targeted Client Outreach, Al-Driven Dispatching, And Automated Follow-Up Systems.</p>
          <div className="buttons">
            <button className="button">GET STARTED →</button>
            <button className="button2">SCHEDULE A DEMO →</button>
          </div>
        </div>
        <div className="image">
          <Image src="/Group.svg" alt="Image of a city model" width={508} height={493} />
        </div>
        <div className="background-image">
          <Image src="/Vector 1.png" alt="Background image" width={692} height={692}/>
        </div>
      </div>


      <br/>
      <div style={{ backgroundColor: '#FFAF00', height: '2px', width: '300px', margin: '10px auto' }} /> 
      <div className="containerf">
        <div className="rowf" style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <div className="col">
            <div className="feature-item">
              <Image src="/mas.png" alt="Online Reviews Icon" width={65} height={65} style={{ marginRight: -150 }}/>
              <div className="feature-text">
                <h2>Online Reviews</h2>
                <p>Improve your ratings and build your <br />reputation to win more business.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="feature-item">
              <Image src="/tabler_messages.png" alt="Messaging Icon" width={65} height={65} style={{ marginRight: -200, marginLeft: 100 }}/>
              <div className="feature-text">
                <h2>Messaging</h2>
                <p>Reach your customers <br/>wherever they are.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="feature-item">
              <Image src="/rocket.png" alt="Payments Icon" width={65} height={65} style={{ marginRight: -180, marginLeft: 50}}/>
              <div className="feature-text">
                <h2>Payments</h2>
                <p>Fast, easy, secure payments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;