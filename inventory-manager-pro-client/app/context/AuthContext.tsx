// AuthContextProvider.tsx
import React, { createContext, useContext } from "react";
import useFirebase, { FirebaseHook } from "../hooks/useFirebase";

interface AuthContextType extends FirebaseHook {}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const authValue = useFirebase();

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): FirebaseHook => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useTimeInterval must be used within a TimeIntervalContextProvider"
    );
  }

  return context;
};
