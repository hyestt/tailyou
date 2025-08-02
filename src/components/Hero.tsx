import React from 'react';
export function Hero() {
  return <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Let their tail tell your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-blue-300 to-purple-400">
              forever bond
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            A heartfelt digital space to honor, remember, and continue the
            connection with your beloved pet companions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-300 text-white rounded-md hover:opacity-90 transition-opacity">
              Create a Memorial
            </button>
            <button className="px-6 py-3 border border-pink-400 text-pink-500 rounded-md hover:bg-pink-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-pink-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-4 left-20 w-64 h-64 bg-yellow-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            <div className="relative grid grid-cols-2 gap-2 z-10">
              <img src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" alt="Happy dog with sunlight creating a heavenly glow" className="rounded-tl-2xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Cat with beautiful blue eyes in sunlight" className="rounded-tr-2xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Cat looking up with loving expression" className="rounded-bl-2xl shadow-lg" />
              <img src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Dog with heart-shaped nose" className="rounded-br-2xl shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-pink-400/10 rounded-2xl"></div>
            </div>
            {/* Rainbow overlay */}
            <div className="absolute -bottom-4 -right-4 w-full h-4 bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 via-blue-300 to-purple-400 rounded-full opacity-70 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>;
}