"use client";
import { FormSubmission } from "@/lib/httpClient/formSubmission";
import { FormData } from "@/lib/types/formData";
import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await FormSubmission.submitForm(formData);
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', company: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white flex flex-col items-center py-16 px-2"
      id="contactus">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Side: Headline */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:items-start items-center text-center md:text-left">
          <h2
            className="text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold leading-tight"
            style={{ color: "#ff355e", fontFamily: "'Playfair Display', serif" }}
          >
            Your<br />
            AI Momentum<br />
            Starts Here.
          </h2>
        </div>
        {/* Right Side: Form */}
        <form className="w-full md:w-1/2 flex flex-col gap-4 items-start" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Name*"
            className="w-full border rounded-md py-3 px-4 text-xl font-normal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            required
            placeholder="Company & Designation*"
            className="w-full border rounded-md py-3 px-4 text-xl font-normal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Email*"
            className="w-full border rounded-md py-3 px-4 text-xl font-normal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            placeholder="Message*"
            className="w-full border rounded-md py-3 px-4 text-xl font-normal min-h-[120px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 bg-[#ff355e] text-white text-xl font-normal rounded-md px-6 py-3 transition hover:bg-[#e62f5b] cursor-pointer"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {isSubmitting ? 'Sending...' : 'Let The Magic Begin'}
          </button>
          {submitMessage && (
            <p className={`mt-2 text-sm ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
