"use client";

import useFirebase from "@/app/hooks/useFirebase";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  console.log("test", useAuth());

  const router = useRouter();

  useEffect(() => {
    if (!user?.email) {
      // Redirect to the login page if the user is not authenticated
      router.push("/auth/login");
    }
  }, [router, user?.email]);

  // Render children only if the user is authenticated
  return <>{user?.email ? children : null}</>;
};

export default ProtectedRoute;
