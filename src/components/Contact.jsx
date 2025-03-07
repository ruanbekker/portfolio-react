import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Feel free to send me a message.</p>
      
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Name</span>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Email</span>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Message</span>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full mt-2 p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            required
          ></textarea>
        </label>

        <button 
          type="submit"
          className="w-full bg-turquoise text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;


