"use client";

import useSWR from "swr";
import { createClient } from "@/utils/supabase/client";
import type { User } from "@supabase/supabase-js";

const supabase = createClient();

async function fetchUser(): Promise<{ user: User | null; error?: string }> {
  const { data, error } = await supabase.auth.getUser();
  return { user: data.user ?? null, error: error?.message };
}

export function useSupabaseAuth() {
  const { data, error, isLoading, mutate } = useSWR("supabase-user", fetchUser, {
    revalidateOnFocus: true,
  });

  async function signInWithPassword(email: string, password: string) {
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (!signInError) await mutate();
    return signInError?.message;
  }

  async function signUpWithPassword(email: string, password: string, firstName: string, lastName: string) {
    const { error: signUpError } = await supabase.auth.signUp({ email, password, options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    } });
    if (!signUpError) await mutate();
    return signUpError?.message;
  }

  async function signOut() {
    const { error: signOutError } = await supabase.auth.signOut();
    await mutate();
    return signOutError?.message;
  }

  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: typeof window !== "undefined" ? `${window.location.origin}/dashboard` : undefined,
      },
    });
    return error?.message;
  }

  return {
    user: data?.user ?? null,
    isLoading,
    error: error?.message ?? data?.error,
    signInWithPassword,
    signUpWithPassword,
    signInWithGoogle,
    signOut,
    refresh: mutate,
  } as const;
}


