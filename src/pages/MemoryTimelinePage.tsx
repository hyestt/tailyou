import React, { memo } from 'react';
import { CalendarIcon, ImageIcon, VideoIcon, MusicIcon } from 'lucide-react';
export function MemoryTimelinePage() {
  return <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Memory <span className="text-indigo-600">Timeline</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preserve and organize your pet's precious moments chronologically,
            creating a beautiful visual journey of your time together.
          </p>
        </div>
        {/* Feature Overview */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tell Your Pet's Story
              </h2>
              <p className="text-gray-600 mb-6">
                The Memory Timeline allows you to create a chronological journey
                of your pet's life—from their first day home to their favorite
                adventures and quiet moments of connection.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                    <CalendarIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Organized Chronologically
                    </h3>
                    <p className="text-gray-600">
                      Arrange memories by date to create a flowing narrative of
                      your pet's life journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                    <ImageIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Rich Media Support
                    </h3>
                    <p className="text-gray-600">
                      Add photos, videos, and audio clips to create a multimedia
                      experience of cherished moments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                    <VideoIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Milestone Markers
                    </h3>
                    <p className="text-gray-600">
                      Highlight special occasions like birthdays, adoption
                      anniversaries, and memorable adventures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                    <MusicIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Interactive Storytelling
                    </h3>
                    <p className="text-gray-600">
                      Add context, emotions, and stories to each memory,
                      creating a rich narrative tapestry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl"></div>
                <img src="https://images.unsplash.com/photo-1536809188428-e8ecf663d0be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Memory timeline example showing a dog's life journey" className="relative rounded-2xl shadow-lg z-10 w-full" />
              </div>
            </div>
          </div>
        </div>
        {/* Timeline Example */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            How It Works
          </h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200 transform -translate-x-1/2"></div>
            {/* Timeline Events */}
            <div className="space-y-12 relative">
              {/* Event 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-sm inline-block">
                    <span className="text-sm text-indigo-600 block mb-2">
                      April 15, 2018
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      The Day We Met
                    </h3>
                    <p className="text-gray-600">
                      The moment we brought Bella home from the shelter. She was
                      so tiny and nervous, but quickly made herself at home.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full border-4 border-white"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <img src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Puppy coming home" className="rounded-xl shadow-md" />
                </div>
              </div>
              {/* Event 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0 md:order-2">
                  <div className="bg-white p-6 rounded-xl shadow-sm inline-block">
                    <span className="text-sm text-indigo-600 block mb-2">
                      July 4, 2019
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      First Beach Trip
                    </h3>
                    <p className="text-gray-600">
                      Bella discovered the ocean and couldn't get enough! She
                      spent hours chasing waves and digging in the sand.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full border-4 border-white"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:order-1">
                  <img src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Dog at the beach" className="rounded-xl shadow-md" />
                </div>
              </div>
              {/* Event 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-sm inline-block">
                    <span className="text-sm text-indigo-600 block mb-2">
                      October 12, 2021
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Hiking Adventures
                    </h3>
                    <p className="text-gray-600">
                      Our favorite hiking trail became Bella's kingdom. She
                      loved leading the way and exploring new scents.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full border-4 border-white"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <img src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Dog hiking on a trail" className="rounded-xl shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Building Your Timeline
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Create a beautiful chronological journey of your pet's life,
            preserving precious moments and memories for years to come.
          </p>
          <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-colors">
            Create Your Timeline
          </button>
        </div>
      </div>
    </div>;
}