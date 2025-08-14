# Authentication Architecture

## Overview

The authentication system has been refactored to separate concerns and improve maintainability:

- **`AuthContext`**: Manages user state and authentication state changes
- **`useSupabaseAuth`**: Provides authentication methods (sign in, sign out, etc.)
- **`useAuth`**: Hook to access user state from the context

## Usage

### 1. Wrap your app with AuthProvider

```tsx
// src/app/layout.tsx
import { AuthProvider } from "@/contexts/auth-context";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
```

### 2. Access user state

```tsx
import { useAuth } from "@/contexts/auth-context";

function MyComponent() {
  const { user, isLoading, isInitialized } = useAuth();
  
  if (!isInitialized || isLoading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <div>Please log in</div>;
  }
  
  return <div>Welcome, {user.email}!</div>;
}
```

### 3. Use authentication methods

```tsx
import { useSupabaseAuth } from "@/hooks/use-supabase-auth";

function LoginForm() {
  const { signInWithPassword } = useSupabaseAuth();
  
  const handleLogin = async () => {
    const error = await signInWithPassword(email, password);
    if (error) {
      // Handle error
    }
    // User state will be automatically updated by AuthContext
  };
}
```

## Benefits

- **Separation of concerns**: User state management vs. authentication methods
- **No more "Auth session missing!" errors**: Context handles initialization gracefully
- **Better performance**: No unnecessary API calls or re-renders
- **Cleaner code**: Each hook has a single responsibility
- **Easier testing**: Mock context or hook separately
- **Smart token refresh**: Automatic handling of expired tokens with fallback

## Token Refresh Handling

The system automatically handles token refresh in several ways:

### 1. **Automatic Token Refresh**
- Supabase automatically refreshes tokens before they expire
- `TOKEN_REFRESHED` event updates user state seamlessly
- No user interruption during normal operation

### 2. **Manual Token Refresh**
```tsx
const { refreshToken } = useAuth();

// Manually refresh token when needed
const success = await refreshToken();
if (success) {
  console.log("Token refreshed successfully");
} else {
  console.log("Token refresh failed - user needs to re-login");
}
```

### 3. **Fallback Handling**
- If token refresh fails, user is automatically signed out
- User state is cleared to prevent stale data
- Redirect to login page for re-authentication

### 4. **Error Scenarios**
- **Network issues**: Token refresh retries automatically
- **Invalid refresh token**: User is signed out gracefully
- **Server errors**: Fallback to manual refresh or re-login

## Migration

If you were using the old `useSupabaseAuth` hook:

**Before:**
```tsx
const { user, signOut, isLoading, isInitialized } = useSupabaseAuth();
```

**After:**
```tsx
const { user, isLoading, isInitialized } = useAuth();
const { signOut } = useSupabaseAuth();
```
