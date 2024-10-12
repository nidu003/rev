import Head from 'next/head';
import Image from 'next/image';

function Ap() {
  return (
    <div>
      
      <div className="containerap">
        <h1>EASILY INTEGRATED WITH LEADING APPS</h1>
        <div style={{ backgroundColor: '#FFAF00', height: '2px', width: '450px', margin: '10px auto' }} /> 
        <div className="logos">
          <img src="/ap.png" alt="Checkout" />
          
        </div>
      </div>
    </div>
  );
}

export default Ap;