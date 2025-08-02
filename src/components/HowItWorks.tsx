import React, { memo } from 'react';
import { PrivacyToggle } from './PrivacyToggle';
export function HowItWorks() {
  const steps = [{
    number: '01',
    title: 'Create a Memorial',
    description: 'Begin by setting up a personalized memorial page for your beloved pet with photos and key information.'
  }, {
    number: '02',
    title: 'Add Memories & Stories',
    description: "Upload photos, videos, and write stories to build a beautiful timeline of your pet's life journey."
  }, {
    number: '03',
    title: 'Set Privacy Preferences',
    description: 'Choose whether your memorial is private (visible only to you and invited guests) or public (shareable with the community).'
  }, {
    number: '04',
    title: 'Engage with Healing Tools',
    description: 'Utilize our AI letters, virtual rituals, and guided journaling to find comfort in your grief journey.'
  }, {
    number: '05',
    title: 'Connect & Share',
    description: 'Optionally share your memorial with friends or connect with a community who understands your experience.'
  }];
  return <section id="how-it-works" className="py-16 px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How Tailyou Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Creating a lasting memorial for your pet is simple and meaningful
            with these steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                <div className="text-4xl font-bold text-pink-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index === 2 && <div className="mt-4 pt-4 border-t border-gray-100">
                    <PrivacyToggle showLabel={false} className="justify-center" />
                  </div>}
              </div>
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F9A8D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>}
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <img src="https://images.unsplash.com/photo-1583512603834-01a3a1e56241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" alt="Happy dog in a field with sunlight creating a heavenly atmosphere" className="rounded-xl shadow-lg mx-auto max-w-full md:max-w-3xl" />
        </div>
      </div>
    </section>;
}