"use client";
import { BACKEND_BASE_URL } from "@/utils/Constant";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";
axios.defaults.withCredentials = true;

type User = {
  name: string;
  email: string;
};

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
};
const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(true);

  const login = async (email: string, password: string) => {
    const payload = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        `${BACKEND_BASE_URL}/user/login`,
        payload
      );
      router.push("/");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const signup = async (name: string, email: string, password: string) => {
    const payload = {
      email,
      password,
      name,
    };
    console.log(payload);

    try {
      const response = await axios.post(
        `${BACKEND_BASE_URL}/user/signup`,
        payload
      );
      console.log(response);
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };
  const logout = async () => {};

  const value = {
    user,
    loggedIn,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
