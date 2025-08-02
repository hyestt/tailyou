import React, { memo } from 'react';
import { FlameIcon, FlowerIcon, MoonIcon, SunIcon } from 'lucide-react';
export function HealingRitualsPage() {
  return <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Healing <span className="text-indigo-600">Rituals</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find comfort and connection through meaningful virtual ceremonies
            that honor your pet's memory and support your healing journey.
          </p>
        </div>
        {/* Main Feature */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl"></div>
                <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Candle light ceremony for pet remembrance" className="relative rounded-2xl shadow-lg z-10 w-full" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Finding Peace Through Ritual
              </h2>
              <p className="text-gray-600 mb-6">
                Rituals provide structure and meaning during times of grief. Our
                virtual healing ceremonies offer a way to honor your pet's
                memory, express your feelings, and find moments of peace and
                connection.
              </p>
              <p className="text-gray-600 mb-6">
                Each ritual is designed to help you process grief, celebrate
                your pet's life, and maintain your bond in a new form. You can
                participate in these ceremonies privately or invite loved ones
                to join you.
              </p>
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                Explore Healing Rituals
              </button>
            </div>
          </div>
        </div>
        {/* Ritual Types */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Our Healing Ceremonies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border border-indigo-100">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FlameIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Virtual Candle Lighting
              </h3>
              <p className="text-gray-600 mb-6">
                Light a virtual candle in memory of your pet. The flame remains
                lit for 24 hours, symbolizing the enduring light your pet
                brought to your life. You can add a personal message and invite
                others to light candles alongside yours.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="text-lg font-medium text-indigo-800 mb-2">
                  How It Helps
                </h4>
                <p className="text-gray-600">
                  This simple ritual provides a focal point for reflection and
                  remembrance, creating a sacred moment to honor your pet's
                  memory and the light they brought to your life.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-indigo-100">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FlowerIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Memorial Garden
              </h3>
              <p className="text-gray-600 mb-6">
                Create a virtual garden where you can plant flowers, trees, and
                other plants in your pet's memory. Each plant can represent a
                quality your pet embodied or a memory you shared together.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="text-lg font-medium text-indigo-800 mb-2">
                  How It Helps
                </h4>
                <p className="text-gray-600">
                  Tending to your virtual garden provides a sense of ongoing
                  care and connection. Watching your memorial garden grow
                  reflects how your pet's legacy continues to flourish in your
                  heart.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-indigo-100">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <MoonIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Starlight Remembrance
              </h3>
              <p className="text-gray-600 mb-6">
                Name a virtual star after your pet in our night sky
                visualization. On special anniversaries, your pet's star shines
                brighter, symbolizing their continued presence in your life.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="text-lg font-medium text-indigo-800 mb-2">
                  How It Helps
                </h4>
                <p className="text-gray-600">
                  This celestial ritual connects your pet to the eternal beauty
                  of the stars, offering comfort in the idea that they continue
                  to shine down on you from the heavens.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-indigo-100">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <SunIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Sunrise Reflection
              </h3>
              <p className="text-gray-600 mb-6">
                Participate in a guided meditation at virtual sunrise, releasing
                messages to your pet as the sun rises. This ceremony symbolizes
                new beginnings while honoring your enduring connection.
              </p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="text-lg font-medium text-indigo-800 mb-2">
                  How It Helps
                </h4>
                <p className="text-gray-600">
                  This peaceful ritual encourages mindfulness and provides a
                  regular practice for processing grief while embracing hope and
                  the ongoing journey of healing.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial */}
        <div className="mb-20 bg-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <svg className="w-12 h-12 text-indigo-400 mx-auto" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <blockquote className="text-xl text-gray-700 text-center mb-6">
              The candle lighting ceremony helped me mark the one-year
              anniversary of losing my cat, Milo. Being able to invite family
              members who loved him too made it feel like we were all together,
              honoring his memory. It gave me a sense of peace I hadn't felt
              since he passed.
            </blockquote>
            <div className="flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Testimonial author" className="w-12 h-12 rounded-full object-cover mr-4" />
              <div>
                <p className="font-medium text-gray-800">Jennifer R.</p>
                <p className="text-indigo-600 text-sm">Premium Member</p>
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Begin Your Healing Journey
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Our healing rituals provide comfort, meaning, and connection as you
            honor your pet's memory and navigate your grief.
          </p>
          <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-colors">
            Explore Rituals
          </button>
        </div>
      </div>
    </div>;
}