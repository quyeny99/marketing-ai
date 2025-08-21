"use client";

import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export function useSupabaseAuth() {

  async function signInWithPassword(email: string, password: string) {
    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({ 
        email, 
        password 
      });
      
      if (signInError) {
        console.error("Sign in error:", signInError);
        return signInError.message;
      }
      
      if (data.user) {
        console.log("Sign in successful:", data.user.id);
      }
      
      return undefined;
    } catch (error) {
      console.error("Unexpected sign in error:", error);
      return "An unexpected error occurred during sign in";
    }
  }

  async function signUpWithPassword(
    email: string, 
    password: string, 
    firstName: string, 
    lastName: string, 
    newsletter: boolean = false, 
    terms: boolean = false
  ) {
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({ 
        email, 
        password, 
        options: {
          data: {
            firstName: firstName,
            lastName: lastName,
            newsletter: newsletter,
            terms: terms,
          },
        },
      });
      
      if (signUpError) {
        console.error("Sign up error:", signUpError);
        return signUpError.message;
      }
      
      if (data.user) {
        console.log("Sign up successful:", data.user.id);
      }
      
      return undefined;
    } catch (error) {
      console.error("Unexpected sign up error:", error);
      return "An unexpected error occurred during sign up";
    }
  }

  async function signOut() {
    try {
      const { error: signOutError } = await supabase.auth.signOut();
      
      if (signOutError) {
        console.error("Sign out error:", signOutError);
        return signOutError.message;
      }
      
      // User state will be updated by AuthContext
      console.log("Sign out successful");
      return undefined;
    } catch (error) {
      console.error("Unexpected sign out error:", error);
      return "An unexpected error occurred during sign out";
    }
  }

  async function signInWithGoogle() {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: typeof window !== "undefined" ? `${window.location.origin}/dashboard` : undefined,
        },
      });
      
      if (error) {
        console.error("Google sign in error:", error);
        return error.message;
      }
      
      return undefined;
    } catch (error) {
      console.error("Unexpected Google sign in error:", error);
      return "An unexpected error occurred during Google sign in";
    }
  }



  return {
    signInWithPassword,
    signUpWithPassword,
    signInWithGoogle,
    signOut,
  } as const;
}


