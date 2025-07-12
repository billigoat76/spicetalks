import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUs() {

   const[queryObj,setQueryObj] = useState({
    name : "",
    email : "",
    message : "",
   });
   
   function handleInputChange(e){
        console.log(e.target);  
        setQueryObj(prevState => {
          return {
            ...prevState,
            [e.target.name] : e.target.value
            }
        })
   }    
  return (
    <section className="bg-red-50 min-h-screen py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Information */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-red-600">Get in Touch</h2>
          <p className="text-gray-700 text-lg">
            Have a question, feedback, or partnership inquiry? We’d love to hear from you!
          </p>

          <div className="space-y-4 text-gray-600">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="mt-1 text-red-500" />
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <p>+91-9876543210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="mt-1 text-red-500" />
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <p>support@spicetalks.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1 text-red-500" />
              <div>
                <p className="font-medium text-gray-800">Address</p>
                <p>123 Flavor Street, Delhi, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">Send us a message</h3>

          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              value={queryObj.name}
              name='name'
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:red-red-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name='email'
              value={queryObj.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium text-gray-600">Message</label>
            <textarea
              id="message"
              rows="4"
              name='message'
              placeholder="Your message..."
              onChange={handleInputChange}
              value={queryObj.message}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition"
            onClick={()=> {alert('data submitted succesfully')}}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
