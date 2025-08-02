import React, { memo } from 'react';
export function CallToAction() {
  return <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-10 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Create a Forever Memorial for Your Beloved Pet
            </h2>
            <p className="text-pink-100 mb-8">
              Honor their memory, celebrate their life, and continue your bond
              in a beautiful digital space.
            </p>
            <button className="px-6 py-3 bg-white text-pink-500 font-medium rounded-md hover:bg-pink-50 transition-colors">
              Start Your Memorial
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" alt="Person hugging a dog with sunlight creating a heavenly glow" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
}