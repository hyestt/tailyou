import React, { useState } from 'react';
import { MenuIcon, X as CloseIcon, LogOut } from 'lucide-react';
import { Logo } from './Logo';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuthStore();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm py-2 px-6 shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-pink-500 transition-colors">
            首頁
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-pink-500 transition-colors">
            關於
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-pink-500 transition-colors">
            價格
          </Link>
          {user && (
            <>
              <Link to="/dashboard" className="text-gray-600 hover:text-pink-500 transition-colors">
                我的空間
              </Link>
              <Link to="/rainbow-letters" className="text-gray-600 hover:text-pink-500 transition-colors">
                彩虹信
              </Link>
            </>
          )}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-gray-600">你好，{user.user_metadata?.full_name || '朋友'}</span>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-pink-500 transition-colors"
              >
                <LogOut size={18} />
                登出
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-pink-500 hover:text-pink-600 transition-colors"
              >
                登入
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                註冊
              </Link>
            </>
          )}
        </div>

        <button 
          className="md:hidden text-gray-600" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              首頁
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              關於
            </Link>
            <Link 
              to="/pricing" 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              價格
            </Link>
            {user && (
              <>
                <Link 
                  to="/dashboard" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  我的空間
                </Link>
                <Link 
                  to="/rainbow-letters" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  彩虹信
                </Link>
              </>
            )}
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              {user ? (
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-2 text-gray-600 hover:text-pink-500 transition-colors"
                >
                  <LogOut size={18} />
                  登出
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 text-center text-pink-500 hover:text-pink-600 transition-colors"
                  >
                    登入
                  </Link>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 text-center bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-md hover:opacity-90 transition-opacity"
                  >
                    註冊
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}