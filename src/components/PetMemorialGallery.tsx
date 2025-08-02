import React, { memo } from 'react';
export function PetMemorialGallery() {
  const memorialPets = [{
    name: 'Max',
    years: '2010-2022',
    image: 'https://images.unsplash.com/photo-1583511655826-05700442b31b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Forever chasing tennis balls across the rainbow bridge'
  }, {
    name: 'Luna',
    years: '2015-2023',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Still purring in our hearts every day'
  }, {
    name: 'Buddy',
    years: '2012-2021',
    image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'The goodest boy who taught us unconditional love'
  }, {
    name: 'Daisy',
    years: '2014-2023',
    image: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Dancing in rainbow meadows forever'
  }, {
    name: 'Oliver',
    years: '2016-2022',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Our little explorer, now discovering the stars'
  }, {
    name: 'Bella',
    years: '2013-2022',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Forever wagging her tail in our memories'
  }];
  return <section className="py-16 px-6 relative overflow-hidden">
      {/* Rainbow arc background */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 via-blue-300 to-purple-400"></div>
      {/* Rainbow clouds */}
      <div className="absolute top-12 left-10 opacity-20 transform -rotate-12">
        <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
          <path d="M30,10 Q50,-10 70,10 T110,10 T150,10 T190,10 V40 Q170,60 150,40 T110,40 T70,40 T30,40 Z" fill="url(#rainbowGradient1)"></path>
          <defs>
            <linearGradient id="rainbowGradient1" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#F9A8D4" />
              <stop offset="25%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#A7F3D0" />
              <stop offset="75%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#C4B5FD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-12 right-10 opacity-20 transform rotate-12">
        <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
          <path d="M30,10 Q50,-10 70,10 T110,10 T150,10 T190,10 V40 Q170,60 150,40 T110,40 T70,40 T30,40 Z" fill="url(#rainbowGradient2)"></path>
          <defs>
            <linearGradient id="rainbowGradient2" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#C4B5FD" />
              <stop offset="25%" stopColor="#93C5FD" />
              <stop offset="50%" stopColor="#A7F3D0" />
              <stop offset="75%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#F9A8D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Rainbow Bridge <span className="text-pink-500">Memorial</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating the beloved companions who have crossed the rainbow
            bridge, forever living in our hearts and memories.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 via-blue-300 to-purple-400 mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {memorialPets.map((pet, index) => <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg transform transition-transform hover:-translate-y-1 hover:shadow-xl">
              {/* Rainbow gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 via-blue-300 to-purple-400"></div>
              {/* Rainbow arc at top */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 via-blue-300 to-purple-400 z-20"></div>
              <img src={pet.image} alt={`Memorial for ${pet.name}`} className="w-full h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white">{pet.name}</h3>
                <p className="text-white/80 text-sm mb-2">{pet.years}</p>
                <p className="text-white/90">{pet.description}</p>
              </div>
              {/* Subtle rainbow at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 via-blue-300 to-purple-400 z-20"></div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-md hover:opacity-90 transition-opacity">
            Create a Memorial for Your Pet
          </button>
          <div className="mt-4">
            <span className="text-gray-500 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="currentColor" />
                <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor" />
                <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="currentColor" />
              </svg>
              Join hundreds of pet parents honoring their beloved companions
            </span>
          </div>
        </div>
      </div>
      {/* Rainbow arc at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-purple-400 via-blue-300 via-green-300 via-yellow-300 to-pink-400"></div>
    </section>;
}