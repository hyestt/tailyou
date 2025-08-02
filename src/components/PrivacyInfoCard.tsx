import React, { memo } from 'react';
import { LockIcon, GlobeIcon, UsersIcon } from 'lucide-react';
import { PrivacyToggle } from './PrivacyToggle';
export function PrivacyInfoCard() {
  return <div className="bg-white rounded-xl p-6 shadow-sm border border-pink-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Privacy Options
      </h3>
      <div className="mb-6">
        <PrivacyToggle className="mb-6" />
        <p className="text-gray-600 mb-4">
          Choose who can view your pet's memorial. You can change this setting
          at any time.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-pink-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
            <LockIcon className="w-5 h-5 text-pink-500" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-1">
              Private Memorial
            </h4>
            <p className="text-gray-600">
              Only you and people you specifically invite can view your pet's
              memorial. Perfect for those who prefer to keep memories within a
              close circle.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-green-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
            <GlobeIcon className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-1">
              Public Memorial
            </h4>
            <p className="text-gray-600">
              Anyone with the link can view your pet's memorial. Your memorial
              may also appear in our community section for others experiencing
              pet loss.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
            <UsersIcon className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-1">
              Invite Collaborators
            </h4>
            <p className="text-gray-600">
              Regardless of your privacy setting, you can invite family and
              friends to contribute stories, photos, and memories to your pet's
              memorial.
            </p>
          </div>
        </div>
      </div>
    </div>;
}