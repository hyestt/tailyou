import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import type { User } from '@supabase/supabase-js'

interface AuthState {
  user: User | null
  loading: boolean
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
  checkUser: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  signInWithGoogle: async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })
      if (error) throw error
    } catch (error) {
      console.error('Error signing in:', error)
    }
  },

  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      set({ user: null })
    } catch (error) {
      console.error('Error signing out:', error)
    }
  },

  checkUser: async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      set({ user, loading: false })
    } catch (error) {
      console.error('Error checking user:', error)
      set({ loading: false })
    }
  }
}))