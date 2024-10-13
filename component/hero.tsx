import React from 'react';
import Image from 'next/image';

const TestimonialCard = () => {
  return (
    <div>
    <h1 className="Heads"style={{ textAlign: 'center' }}>Industry-Specific Case Studies</h1>
      <h2 className="titless" style={{ textAlign: 'center' }}>Testimonials</h2>
      <div style={{ backgroundColor: '#FFAF00', height: '2px', width: '150px', margin: '10px auto' }} /> 
      <p className="subtitlest" style={{ textAlign: 'center' }}>
      testimonials from roofing companies we’ve helped increase revenue through automation.
      </p>
       
    <div className="testimonial-card">
      
      <div className="testimonial-image">
        <Image
          src="/Ellipse 17.png"
          alt="Testimonial Image"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="testimonial-content">
        <h3 className="testimonial-name">Hannah Schmitt</h3>
        <p className="testimonial-role">Lead designer</p>
        <p className="testimonial-text">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Cursus Nibh Mauris,
          Nec Turpis Orci Lectus Maecenas. Suspendisse Sed Magna Eget Nibh In
          Turpis. Consequat Duis Diam Lacus Arcu. Faucibus Venenatis Felis Id
          Augue Sit Cursus Pellentesque Enim Lorem Ipsum Dolor Sit Amet,
          Consectetur Adipiscing Elit. Cursus Nibh Mauris, Nec Turpis
        </p>
      </div>
    </div>
    </div>
  );
};

export default TestimonialCard;