import React from 'react';
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <div className="relative pt-16">
      {/* Text Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Smart Travel Budgeting Made Simple
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Take control of your travel expenses with our comprehensive budgeting tool. 
            Plan smarter, track better, and travel with confidence knowing your finances 
            are well-managed.
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors flex items-center mx-auto">
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative h-[500px] mt-8">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/50" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center max-w-4xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Perfect Travel Companion
            </h2>
            <p className="text-lg md:text-xl">
              Track expenses, set budgets, and make informed decisions throughout your journey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;