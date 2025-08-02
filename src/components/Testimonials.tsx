import React, { memo } from 'react';
export function Testimonials() {
  const testimonials = [{
    quote: "Tailyou gave me a beautiful way to honor my dog Max. The Rainbow Letters feature has been especially healing - it's like he's still with me in spirit.",
    author: 'Sarah K.',
    pet: 'Max, Golden Retriever',
    image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    quote: 'After losing my cat Luna so suddenly, I was lost. Creating her memorial helped me process my grief and celebrate the joy she brought to my life.',
    author: 'Michael T.',
    pet: 'Luna, Siamese Cat',
    image: 'https://images.unsplash.com/photo-1492370284958-c20b15c692d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }, {
    quote: "The community aspect of Tailyou helped me realize I wasn't alone. Connecting with others who understand this special kind of loss has been invaluable.",
    author: 'Emma R.',
    pet: 'Buddy, Labrador',
    image: 'https://images.unsplash.com/photo-1551730459-92db2a308d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }];
  return <section id="testimonials" className="py-16 px-6 bg-pink-50 relative overflow-hidden">
      {/* Rainbow arc background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-2 bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 via-blue-300 to-purple-400 rounded-b-full opacity-70"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Stories from Our <span className="text-pink-500">♥</span> Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from pet parents who have found comfort and healing through
            Tailyou.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white rounded-xl p-8 shadow-sm relative">
              <div className="flex items-center mb-6">
                <div className="bg-pink-100 rounded-full p-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.13456 9H5.37956C5.14756 9 4.94156 9.15 4.87956 9.373C4.09256 12.171 4.09456 16.347 4.87956 19.134C4.94156 19.357 5.14856 19.507 5.37956 19.507H8.23956C8.47156 19.507 8.67756 19.357 8.73956 19.134C9.00156 18.001 9.13456 16.017 9.13456 14.254C9.13456 12.49 9.00156 10.507 8.73956 9.373C8.67756 9.15 8.47156 9 8.23956 9" fill="#F472B6" />
                    <path d="M19.1346 9H15.3796C15.1476 9 14.9416 9.15 14.8796 9.373C14.0926 12.171 14.0946 16.347 14.8796 19.134C14.9416 19.357 15.1486 19.507 15.3796 19.507H18.2396C18.4716 19.507 18.6776 19.357 18.7396 19.134C19.0016 18.001 19.1346 16.017 19.1346 14.254C19.1346 12.49 19.0016 10.507 18.7396 9.373C18.6776 9.15 18.4716 9 18.2396 9" fill="#F472B6" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <p className="font-medium text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.pet}</p>
                </div>
              </div>
              {/* Small paw print in corner */}
              <div className="absolute bottom-3 right-3 opacity-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-pink-500">
                  <path d="M12,8.5A3.5,3.5 0 0,1 8.5,5A3.5,3.5 0 0,1 12,1.5A3.5,3.5 0 0,1 15.5,5A3.5,3.5 0 0,1 12,8.5M12,10A5,5 0 0,0 7,5A5,5 0 0,0 12,0A5,5 0 0,0 17,5A5,5 0 0,0 12,10M12,14.5C15.31,14.5 18.5,15.29 18.5,16.5V18H5.5V16.5C5.5,15.29 8.69,14.5 12,14.5M12,13A8,8 0 0,0 4,16.5V20H20V16.5A8,8 0 0,0 12,13Z" />
                </svg>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}