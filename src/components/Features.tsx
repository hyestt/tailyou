import React, { memo } from 'react';
import { Calendar, MessageSquare, Heart, BookOpen, Users, Gift } from 'lucide-react';
export function Features() {
  const features = [{
    icon: <Calendar className="w-8 h-8 text-pink-500" />,
    title: 'Memorial Profile',
    description: "Create a beautiful tribute with photos, stories, and milestones to celebrate your pet's life journey."
  }, {
    icon: <BookOpen className="w-8 h-8 text-blue-400" />,
    title: 'Memory Timeline',
    description: "Organize precious moments chronologically with photos, videos, and audio that tell your pet's story."
  }, {
    icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
    title: 'Rainbow AI Letters',
    description: 'Write to your pet and receive thoughtful AI-generated responses that provide comfort and connection.'
  }, {
    icon: <div className="w-8 h-8 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#60A5FA" />
            <path d="M15 7H9V9H15V7Z" fill="#60A5FA" />
            <path d="M15 11H9V13H15V11Z" fill="#60A5FA" />
            <path d="M13 15H9V17H13V15Z" fill="#60A5FA" />
          </svg>
        </div>,
    title: 'Healing Rituals',
    description: 'Find peace through virtual ceremonies with candles, flowers, and other meaningful offerings.'
  }, {
    icon: <Heart className="w-8 h-8 text-pink-500" />,
    title: 'Emotional Support',
    description: 'Access guided healing practices and journaling tools designed to help navigate grief.'
  }, {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: 'Community Connection',
    description: 'Share your memorial and connect with others who understand the special bond with a beloved pet.'
  }, {
    icon: <Gift className="w-8 h-8 text-yellow-400" />,
    title: 'Virtual Tributes',
    description: 'Send virtual gifts and tributes to honor pets in the community on special remembrance days.'
  }];
  return <section id="features" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            A Space for Remembrance &{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-blue-300 to-purple-400">
              Healing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailyou offers thoughtful features designed to preserve memories and
            provide comfort during your healing journey.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 via-blue-300 to-purple-400 mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-pink-50 rounded-xl p-8 transition-all hover:shadow-md hover:bg-pink-100 relative overflow-hidden group">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
              {/* Small tail on hover */}
              <div className="absolute -right-6 -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2C2 2 5.5 2.5 8 6C10.5 9.5 13 21 19 22C25 23 27 22 27 22" stroke="#F9A8D4" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}