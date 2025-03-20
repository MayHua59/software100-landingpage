import React, { forwardRef } from 'react';
import './Contact.css';

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="contact-section" id="company">
      <div className="contact-column">
        <h3>Company Address</h3>
        <p>432/444, RM-12, SHWEBONTHA ST, PABEDAN Township, Yangon, Myanmar.</p>
      </div>
      <div className="contact-column">
        <h3>Email</h3>
        <p>info@software100.com.mm</p>
      </div>
      <div className="contact-column">
        <h3>Phone No</h3>
        <p>+95 1 372355 / +95 9784710857</p>
      </div>
    </section>
  );
});

export default Contact;