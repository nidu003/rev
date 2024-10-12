import React from 'react';

export default function Service() {
  return (
    <div className="containerss">
      <h1 className="Heads"style={{ textAlign: 'center' }}>Services/Features Page</h1>
      <h2 className="titless" style={{ textAlign: 'center' }}>Reposition Services</h2>
      <div style={{ backgroundColor: '#FFAF00', height: '2px', width: '250px', margin: '10px auto' }} /> 
      <p className="subtitless" style={{ textAlign: 'center' }}>
        List Services Tailored Specifically For Roofing Companies:
      </p>
      
      <div className="servicesGrid">
        <div className="serviceCard">
          <img src="/Group 1.png" alt="Commercial Client Outreach" className="icon" />
          <h3>Commercial Client Outreach System</h3>
          <p>Emphasize your system that targets<br /> large commercial projects.</p>
        </div>
        
        <div className="serviceCard">
          <img src="/Group 2.png" alt="AI Dispatching Calendar" className="icon" />
          <h3>AI Dispatching Calendar</h3>
          <p>
            Detail how it assigns the best sales rep <br />for each appointment based on<br /> performance metrics, location, and<br /> expertise in roofing.
          </p>
        </div>
        
        <div className="serviceCard">
          <img src="/Group 3.png" alt="Automated Sales Follow-Up" className="icon" />
          <h3>Automated Sales Follow-Up System</h3>
          <p>Explain the follow-up and nurture<br /> campaigns that boost closing<br /> rates.</p>
        </div>
        
        <div className="serviceCard">
          <img src="/Group 2 (1).png" alt="Rep Pages" className="icon" />
          <h3>Rep Pages</h3>
          <p>Showcase how roofing sales reps will<br /> have access to all apps, tools, and <br />presentations in one place.</p>
        </div>
        
        <div className="serviceCard">
          <img src="/Group 3 (1).png" alt="KPI Dashboard" className="icon" />
          <h3>KPI Dashboard Integration</h3>
          <p>Explain how this integrates with roofing<br /> CRM systems like AccuLynx to provide <br />performance insights.</p>
        </div>
        
        <div className="serviceCard">
          <img src="/Group 4.png" alt="Automated Review System" className="icon" />
          <h3>Automated Review System</h3>
          <p>Focus on generating positive<br /> Google and BBB reviews for <br />roofing companies.</p>
        </div>
      </div>
    </div>
  );
}
