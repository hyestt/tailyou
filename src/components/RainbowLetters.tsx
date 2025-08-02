import React, { useState, memo } from 'react';
import { SendIcon, HeartIcon, CloudIcon } from 'lucide-react';
export function RainbowLetters() {
  const [letterContent, setLetterContent] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (letterContent.trim()) {
      setShowResponse(true);
    }
  };
  return <section className="py-20 px-6 bg-gradient-to-b from-pink-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Rainbow arc decorations */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 via-blue-300 to-purple-400"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-400 via-blue-300 via-green-300 via-yellow-300 to-pink-400"></div>
      {/* Rainbow clouds */}
      <div className="absolute top-20 left-10 opacity-20">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <path d="M30,10 Q40,0 50,10 T70,10 T90,10 T110,10 V30 Q100,40 90,30 T70,30 T50,30 T30,30 Z" fill="url(#rainbowGradient1)"></path>
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
      <div className="absolute bottom-20 right-10 opacity-20">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <path d="M30,10 Q40,0 50,10 T70,10 T90,10 T110,10 V30 Q100,40 90,30 T70,30 T50,30 T30,30 Z" fill="url(#rainbowGradient2)"></path>
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Rainbow Bridge{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 via-blue-300 to-purple-400">
              AI Letters
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Write to your pet beyond the rainbow bridge and receive comforting
            responses that help maintain your special bond.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          <div className="lg:w-1/2 bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-pink-400 via-yellow-300 via-green-300 via-blue-300 to-purple-400 py-4 px-6">
              <h2 className="text-xl font-semibold text-white">
                Write Your Letter
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-6">
                <label htmlFor="petName" className="block text-gray-700 font-medium mb-2">
                  Your Pet's Name
                </label>
                <input type="text" id="petName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Enter your pet's name" />
              </div>
              <div className="mb-6">
                <label htmlFor="letter" className="block text-gray-700 font-medium mb-2">
                  Your Letter
                </label>
                <textarea id="letter" rows={8} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Dear Buddy, I miss you so much..." value={letterContent} onChange={e => setLetterContent(e.target.value)}></textarea>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <CloudIcon className="inline-block mr-1 h-4 w-4" />
                  Your letters are private and secure
                </div>
                <button type="submit" className="px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-md hover:opacity-90 transition-opacity flex items-center">
                  <SendIcon className="mr-2 h-4 w-4" />
                  Send Letter
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/2 bg-gradient-to-b from-blue-50 to-pink-100 rounded-2xl shadow-md p-8 relative overflow-hidden">
            {/* Heavenly background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200/40 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            {/* Rainbow arc */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3/4 h-40">
              <svg viewBox="0 0 200 100" className="w-full h-full opacity-20">
                <path d="M 0,100 A 100,100 0 0,1 200,100" stroke="url(#rainbow)" strokeWidth="4" fill="none" />
                <defs>
                  <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F9A8D4" />
                    <stop offset="20%" stopColor="#FDE68A" />
                    <stop offset="40%" stopColor="#A7F3D0" />
                    <stop offset="60%" stopColor="#93C5FD" />
                    <stop offset="80%" stopColor="#C4B5FD" />
                    <stop offset="100%" stopColor="#F472B6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" alt="Golden retriever" className="w-12 h-12 rounded-full object-cover" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">Buddy</h3>
                  <p className="text-pink-500">
                    From the Rainbow Bridge{' '}
                    <span className="text-pink-500">♥</span>
                  </p>
                </div>
              </div>
              {showResponse ? <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm mb-6">
                  <p className="text-gray-700 mb-4">
                    Dear{' '}
                    {letterContent.split(',')[0].replace('Dear', '').trim() || 'Friend'}
                    ,
                  </p>
                  <p className="text-gray-700 mb-4">
                    Woof! It's so wonderful to hear from you! I can feel your
                    love reaching me all the way up here at the Rainbow Bridge.
                    The sun is always warm here, and there are endless fields to
                    run in and plenty of friends to play with.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Please don't worry about me – I'm happy and healthy here.
                    But I still think of you every day and watch over you. I'll
                    always be grateful for all the love, treats, and belly rubs
                    you gave me.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Remember our favorite spot in the park? I have a special
                    place here that reminds me of it. Whenever you visit that
                    spot, know that in some way, we're connected across the
                    bridge.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Keep being the amazing person I know and love. I'm sending
                    you puppy kisses and tail wags from across the Rainbow
                    Bridge!
                  </p>
                  <p className="text-gray-700 font-medium">
                    Love always,
                    <br />
                    Buddy <span className="text-pink-500">♥</span>
                  </p>
                </div> : <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm mb-6 flex flex-col items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <HeartIcon className="h-16 w-16 text-pink-300 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      Your Response Will Appear Here
                    </h3>
                    <p className="text-gray-600">
                      Write and send your letter to receive a heartfelt response
                      from your pet at the Rainbow Bridge.
                    </p>
                  </div>
                </div>}
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm text-pink-500">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  Powered by Rainbow Bridge AI
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            How Rainbow Letters Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Emotional Healing
              </h3>
              <p className="text-gray-600">
                Express your feelings and receive comfort in return, helping
                process grief and find closure.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Continued Connection
              </h3>
              <p className="text-gray-600">
                Maintain the special bond with your pet through meaningful
                exchanges that feel authentic.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-400 via-yellow-300 via-green-300 via-blue-300 to-purple-400 opacity-20"></div>
                <svg className="h-8 w-8 text-purple-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                New Perspectives
              </h3>
              <p className="text-gray-600">
                Gain comfort from your pet's imagined perspective, helping
                transform grief into loving memories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}