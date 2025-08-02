import React from 'react';
import { useAuthStore } from '../stores/authStore';
import { Plus, Heart, Calendar, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function DashboardPage() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">歡迎回來，{user?.user_metadata?.full_name || '朋友'}</h1>
          <p className="text-gray-600 mt-2">在這裡，與您的毛孩永遠在一起</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <button
            onClick={() => navigate('/memorial-profile')}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Plus className="w-12 h-12 text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold">建立紀念頁</h3>
            <p className="text-gray-600 text-sm mt-1">為您的寵物建立永恆的紀念</p>
          </button>

          <button
            onClick={() => navigate('/memory-timeline')}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Calendar className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold">時光軸</h3>
            <p className="text-gray-600 text-sm mt-1">回顧美好的時光</p>
          </button>

          <button
            onClick={() => navigate('/rainbow-letters')}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Mail className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold">彩虹信</h3>
            <p className="text-gray-600 text-sm mt-1">寫信給在彩虹橋的牠</p>
          </button>

          <button
            onClick={() => navigate('/healing-rituals')}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Heart className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-lg font-semibold">療癒儀式</h3>
            <p className="text-gray-600 text-sm mt-1">點燭、獻花，表達思念</p>
          </button>
        </div>

        {/* Pet List */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">我的寵物</h2>
          <div className="text-center py-12 text-gray-500">
            <p className="mb-4">您還沒有建立任何寵物紀念頁</p>
            <button
              onClick={() => navigate('/memorial-profile')}
              className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
            >
              建立第一個紀念頁
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}