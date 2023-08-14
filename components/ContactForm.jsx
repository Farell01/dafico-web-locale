"use client"
import React, { useState } from 'react';
import axios from 'axios'; // If using Axios for making HTTP requests

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an HTTP POST request to your backend API endpoint
      const response = await axios.post('https://your-backend-server.com/api/contact', formData);
      // Handle success, display feedback to the user, etc.
      console.log('Message sent successfully:', response.data);
    } catch (error) {
      // Handle error, display feedback to the user, etc.
      console.error('Error sending message:', error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form field for name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-indigo-500"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </div>

      {/* Form field for email */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-indigo-500"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
        />
      </div>

      {/* Form field for message */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 resize-none focus:outline-none focus:border-indigo-500"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
        />
      </div>

      {/* Submit button */}
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
