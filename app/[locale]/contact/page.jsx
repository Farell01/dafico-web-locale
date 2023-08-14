import React from 'react';
import ContactForm from '@components/ContactForm';
import '@styles/globals.css';

const Contact = () => {
  return (
    
    <div className="container mx-auto mt-8 p-8">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
