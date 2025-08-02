import React, { useState, memo } from 'react';
import { EyeIcon, EyeOffIcon, LockIcon, GlobeIcon } from 'lucide-react';
interface PrivacyToggleProps {
  initialValue?: 'private' | 'public';
  onChange?: (value: 'private' | 'public') => void;
  showLabel?: boolean;
  className?: string;
}
export function PrivacyToggle({
  initialValue = 'private',
  onChange,
  showLabel = true,
  className = ''
}: PrivacyToggleProps) {
  const [isPrivate, setIsPrivate] = useState(initialValue === 'private');
  const handleToggle = () => {
    const newValue = !isPrivate;
    setIsPrivate(newValue);
    if (onChange) {
      onChange(newValue ? 'private' : 'public');
    }
  };
  return <div className={`flex items-center ${className}`}>
      {showLabel && <div className="flex items-center mr-3">
          {isPrivate ? <>
              <LockIcon className="w-4 h-4 text-pink-500 mr-1.5" />
              <span className="text-sm font-medium text-gray-700">Private</span>
            </> : <>
              <GlobeIcon className="w-4 h-4 text-green-500 mr-1.5" />
              <span className="text-sm font-medium text-gray-700">Public</span>
            </>}
        </div>}
      <button onClick={handleToggle} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1 ${isPrivate ? 'bg-pink-500' : 'bg-green-500'}`} type="button" role="switch" aria-checked={isPrivate}>
        <span className="sr-only">{isPrivate ? 'Private' : 'Public'}</span>
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isPrivate ? 'translate-x-1' : 'translate-x-6'}`} />
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {isPrivate ? <EyeOffIcon className="w-3 h-3 text-white" /> : <EyeIcon className="w-3 h-3 text-white" />}
        </span>
      </button>
      {showLabel && <div className="ml-3">
          <span className="text-xs text-gray-500">
            {isPrivate ? 'Only you and people you invite can view this memorial' : 'Anyone with the link can view this memorial'}
          </span>
        </div>}
    </div>;
}