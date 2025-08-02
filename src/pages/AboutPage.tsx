import React, { memo } from 'react';
import { HeartIcon, UsersIcon, ShieldIcon } from 'lucide-react';
export function AboutPage() {
  const team = [{
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Pet lover and tech entrepreneur with a passion for creating meaningful digital experiences.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: "Software engineer and pet parent who believes in technology's power to heal and connect.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    name: 'Olivia Rodriguez',
    role: 'Head of User Experience',
    bio: 'Designer and animal advocate focused on creating compassionate digital spaces.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    name: 'James Wilson',
    role: 'Community Director',
    bio: 'Former veterinary assistant who now helps build supportive communities for pet owners.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }];
  return <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-indigo-600">Tailyou</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to transform pet grief into lasting celebration
            through technology and compassion.
          </p>
        </div>
        {/* Our Story */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Tailyou was born from personal experience with pet loss. Our
                founder, Sarah, struggled to find meaningful ways to preserve
                memories of her beloved dog, Max, after his passing.
              </p>
              <p className="text-gray-600 mb-4">
                Recognizing that millions of pet parents face the same
                challenge, she assembled a team of technologists, designers, and
                grief counselors who shared her vision: to create a digital
                space that honors the unique bond between pets and their humans.
              </p>
              <p className="text-gray-600">
                Since our launch in 2020, we've helped thousands of pet parents
                transform their grief into celebration, creating beautiful
                digital memorials that capture the joy and love their pets
                brought into their lives.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-200 rounded-full opacity-50 mix-blend-multiply filter blur-xl"></div>
                <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="A woman hugging her dog" className="relative rounded-2xl shadow-lg z-10 w-full" />
              </div>
            </div>
          </div>
        </div>
        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-indigo-100">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <HeartIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Compassion First
              </h3>
              <p className="text-gray-600">
                We approach every interaction with empathy, understanding that
                pet loss is a profound grief experience that deserves respect
                and gentle support.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-indigo-100">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <UsersIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Community Connection
              </h3>
              <p className="text-gray-600">
                We believe in the healing power of shared experiences and create
                spaces for pet parents to connect, support each other, and
                celebrate their beloved companions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-indigo-100">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <ShieldIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Respectful Innovation
              </h3>
              <p className="text-gray-600">
                We use technology thoughtfully to enhance the memorial
                experience while maintaining the dignity and sacredness of the
                human-animal bond.
              </p>
            </div>
          </div>
        </div>
        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-indigo-100">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>)}
          </div>
        </div>
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Help us create a world where every pet is remembered, celebrated,
            and continues to bring joy even after they've crossed the rainbow
            bridge.
          </p>
          <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-colors">
            Create a Memorial
          </button>
        </div>
      </div>
    </div>;
}