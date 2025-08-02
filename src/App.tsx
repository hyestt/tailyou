import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { RainbowLetters } from './components/RainbowLetters';
import { MemorialProfilePage } from './pages/MemorialProfilePage';
import { MemoryTimelinePage } from './pages/MemoryTimelinePage';
import { HealingRitualsPage } from './pages/HealingRitualsPage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { AuthCallback } from './pages/AuthCallback';
import { useAuthStore } from './stores/authStore';
import { supabase } from './lib/supabase';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthStore();

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export function App() {
  const { checkUser } = useAuthStore();

  useEffect(() => {
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      useAuthStore.setState({ user: session?.user ?? null, loading: false });
    });

    return () => subscription.unsubscribe();
  }, [checkUser]);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            
            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } />
            <Route path="/rainbow-letters" element={
              <ProtectedRoute>
                <RainbowLetters />
              </ProtectedRoute>
            } />
            <Route path="/memorial-profile" element={
              <ProtectedRoute>
                <MemorialProfilePage />
              </ProtectedRoute>
            } />
            <Route path="/memory-timeline" element={
              <ProtectedRoute>
                <MemoryTimelinePage />
              </ProtectedRoute>
            } />
            <Route path="/healing-rituals" element={
              <ProtectedRoute>
                <HealingRitualsPage />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}