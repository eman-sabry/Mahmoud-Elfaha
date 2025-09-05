import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState(null); // success | error

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',   // 🔁 حط ID هنا
        'YOUR_TEMPLATE_ID',  // 🔁 حط ID هنا
        form.current,
        'YOUR_PUBLIC_KEY'    // 🔁 حط المفتاح هنا
      )
      .then(
        (result) => {
          console.log('✅ Email sent:', result.text);
          setStatus('success');
          form.current.reset();
        },
        (error) => {
          console.error('❌ Email error:', error.text);
          setStatus('error');
        }
      );
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-gray-800 text-4xl sm:text-5xl font-extrabold mb-10 text-center">
        Contact <span className="text-blue-600">Me</span>
      </h1>

      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 p-2 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>

        {/* Show success or error message */}
        {status === 'success' && (
          <p className="mt-4 text-green-600 text-center font-medium">
            ✅ Message sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600 text-center font-medium">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
