import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Supabase will handle the callback automatically
    // Just redirect to dashboard after a short delay
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">正在登入...</h2>
        <p className="text-gray-600">請稍候，我們正在為您準備一切</p>
      </div>
    </div>
  );
}