import React, { memo } from 'react';
import { CalendarIcon, ImageIcon, PenIcon, ShareIcon } from 'lucide-react';
import { PrivacyInfoCard } from '../components/PrivacyInfoCard';
export function MemorialProfilePage() {
  return <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Memorial <span className="text-indigo-600">Profiles</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create a beautiful digital space to honor and celebrate your pet's
            unique life and the special bond you shared.
          </p>
        </div>
        {/* Feature Showcase */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl"></div>
                <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Memorial profile example showing a dog's profile" className="relative rounded-2xl shadow-lg z-10 w-full" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                A Beautiful Tribute to Your Pet
              </h2>
              <p className="text-gray-600 mb-6">
                Your pet's memorial profile is more than just a page—it's a
                living tribute that captures their personality, celebrates the
                joy they brought to your life, and preserves their memory for
                years to come.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                    <CalendarIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Key Life Moments
                    </h3>
                    <p className="text-gray-600">
                      Record birthdays, adoption dates, and other significant
                      milestones that tell your pet's unique story.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                    <ImageIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Photo & Video Gallery
                    </h3>
                    <p className="text-gray-600">
                      Upload unlimited photos and videos to create a visual
                      celebration of your pet's life and personality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                    <PenIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Personal Stories
                    </h3>
                    <p className="text-gray-600">
                      Share favorite memories, funny quirks, and heartwarming
                      stories that capture your pet's unique spirit.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                    <ShareIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Shared Tributes
                    </h3>
                    <p className="text-gray-600">
                      Invite family and friends to contribute their own memories
                      and messages to enrich the memorial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Privacy Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Your Memorial, Your <span className="text-indigo-600">Privacy</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Control Who Sees Your Pet's Memorial
              </h3>
              <p className="text-gray-600 mb-4">
                We understand that grief is personal, and you may want to keep
                your pet's memorial private. That's why we offer flexible
                privacy options that put you in control.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you want to share your pet's story with the world or
                keep it as a personal tribute visible only to close family and
                friends, our simple privacy controls make it easy to choose.
              </p>
              <p className="text-gray-600">
                You can change your privacy settings at any time, and even set
                different privacy levels for different sections of your
                memorial.
              </p>
            </div>
            <div>
              <PrivacyInfoCard />
            </div>
          </div>
        </div>
        {/* Example Profiles */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Memorial Profile Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-indigo-100 relative">
                <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Dog memorial profile" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">Max</h3>
                  <p className="text-white/90">2010 - 2022</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  "My loyal companion for 12 wonderful years. Max loved beach
                  runs, tennis balls, and stealing socks."
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-indigo-600">
                    Golden Retriever
                  </span>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-indigo-100 relative">
                <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Cat memorial profile" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">Luna</h3>
                  <p className="text-white/90">2015 - 2023</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  "My sassy little queen who ruled the house. Luna enjoyed
                  sunbeams, bird watching, and midnight zoomies."
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-indigo-600">Siamese Cat</span>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-indigo-100 relative">
                <img src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Rabbit memorial profile" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">Oreo</h3>
                  <p className="text-white/90">2018 - 2023</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  "The sweetest bunny who brought joy to our family. Oreo loved
                  carrot treats, gentle pets, and hopping in the garden."
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-indigo-600">
                    Holland Lop Rabbit
                  </span>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Create Your Pet's Memorial
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Honor your beloved companion with a beautiful digital tribute that
            celebrates their life and preserves their memory for years to come.
          </p>
          <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-colors">
            Start Your Memorial
          </button>
        </div>
      </div>
    </div>;
}