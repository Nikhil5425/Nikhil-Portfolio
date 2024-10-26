// src/components/Contact.js
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("All fields are required!");
      return;
    }
    // Handle form submission logic here
    console.log({ name, email, message });
    setError("");
    // Reset fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-16 w-full flex flex-col items-center justify-center bg-white text-gray-700 px-6 sm:px-10">
      <h2 className="text-3xl font-bold mb-6 animate-fade-in">Contact Me</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="space-y-4 max-w-lg" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-400 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
