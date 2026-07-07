import { createContext, useContext, useState } from "react";
import type { User } from "../types/User";

interface AuthContextType {
  user: User | null;
  signIn: () => void;
  signUp: () => void;
  signOut: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const signIn = () => {};
  const signUp = () => {};
  const signOut = () => {};

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("authContext must be used within AuthProvider");
  }
  return ctx;
};
