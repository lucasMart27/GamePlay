import React, { createContext, useContext, useState, ReactNode } from "react";
import * as AuthSession from "expo-auth-session";

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

type AuthContextData = {
  user: User;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  function SignIn() {
    try {
      setLoading(true);
      const authUrl =
        "https://discord.com/api/oauth2/authorize?client_id=1182149210376777738&response_type=code&redirect_uri=https%3A%2F%2Fauth.expo.io%2Fgameplay&scope=identify+email+connections+guilds";

      AuthSession.startAsync({ authUrl });
    } catch (error) {}
  }

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
