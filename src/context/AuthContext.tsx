import { createContext, useContext, useState } from "react";
import type { User } from "../types/User";

interface AuthContextType {
  user: userType | null;
  signIn: (data: User) => { success: boolean; error?: string };
  signUp: (data: User) => { success: boolean; error?: string };
  signOut: () => void;
}
type userType = {
  email: string | null;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userType | null>(() =>
    localStorage.getItem("currentUserEmail")
      ? { email: localStorage.getItem("currentUserEmail") }
      : null,
  );
  const signIn = (data: User) => {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (u) => u.email === data.email && u.password === data.password,
    );

    if (!user) {
      return { success: false, error: "Incorrect email or password!" };
    }
    localStorage.setItem("currentUserEmail", data.email);
    setUser({ email: data.email });
    return { success: true };
  };
  const signUp = (data: User) => {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((user) => user.email === data.email)) {
      return { success: false, error: "Email already exists!" };
    }
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", data.email);
    setUser({ email: data.email });
    return { success: true };
  };
  const signOut = () => {
    localStorage.removeItem("currentUserEmail");
    setUser(null);
  };

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
