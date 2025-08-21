"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { createClient } from "@/utils/supabase/client";
import type { User } from "@supabase/supabase-js";

const supabase = createClient();

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isInitialized: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Set up auth state change listener (outside initializeAuth for better performance)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Auth state changed:", event);
        
        // Handle all auth events with unified logic
        if (session?.user) {
          // User exists - update user state
          console.log(`${event} for user:`, session.user.id);
          setUser(session.user);
        } else {
          // No user - clear user state (session expired, user signed out, etc.)
          console.log(`${event} - clearing user state`);
          setUser(null);
        }
      }
    );

    // Initialize auth state
    const initializeAuth = async () => {
      try {
        // Check initial user without triggering errors
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (user) {
            console.log("Initial user found:", user.id);
            setUser(user);
          }
          
        } catch (error) {
          // Silently ignore auth errors during initialization
          console.log("No valid session found during initialization");
        }
        
        setIsInitialized(true);
        setIsLoading(false);
      } catch (error) {
        console.error("Error initializing auth:", error);
        setIsInitialized(true);
        setIsLoading(false);
      }
    };

    initializeAuth();

    // Cleanup subscription
    return () => subscription.unsubscribe();
  }, []);



  const value = {
    user,
    isLoading,
    isInitialized,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
