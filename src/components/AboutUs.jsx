import React from 'react';
import { FaUtensils, FaMotorcycle, FaSmile } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section className="bg-white text-gray-800 min-h-screen py-16 px-6 sm:px-10 lg:px-20">
      {/* Hero section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-red-500 mb-4">Welcome to SpiceTalks 🍽️</h1>
        <p className="text-lg sm:text-xl text-gray-600">
          A food journey where flavors meet convenience. We connect you to your favorite restaurants with just a tap.
        </p>
      </div>

      {/* Feature grid */}
      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center mb-24">
        <div className="p-6 rounded-2xl shadow-lg bg-red-50 hover:shadow-xl transition-all">
          <FaUtensils className="text-4xl mx-auto mb-4 text-red-500" />
          <h3 className="text-xl font-semibold mb-2">Curated Restaurants</h3>
          <p className="text-gray-600">
            Only the best-rated kitchens make it to your screen. Quality, hygiene & taste come first.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg bg-red-50 hover:shadow-xl transition-all">
          <FaMotorcycle className="text-4xl mx-auto mb-4 text-red-500" />
          <h3 className="text-xl font-semibold mb-2">Lightning-fast Delivery</h3>
          <p className="text-gray-600">
            Our fleet ensures hot, fresh food reaches your doorstep in record time — always.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg bg-red-50 hover:shadow-xl transition-all">
          <FaSmile className="text-4xl mx-auto mb-4 text-red-500" />
          <h3 className="text-xl font-semibold mb-2">Customer First</h3>
          <p className="text-gray-600">
            We’re here for you 24/7. Your happiness and satisfaction are our top priority.
          </p>
        </div>
      </div>

      {/* Our story */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Our Story</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          SpiceTalks was born out of a love for good food and great people. We wanted to make high-quality, diverse cuisines accessible to everyone — from local gems to luxury dining. 
          Today, we partner with 1,000+ restaurants and serve thousands of customers every day with joy, speed, and care.
        </p>
        <p className="text-red-600 font-semibold text-xl">Spice up your cravings with us.</p>
      </div>
    </section>
  );
}
