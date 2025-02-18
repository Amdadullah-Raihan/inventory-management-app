"use client";
import "./globals.css";
import React, { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Sidebar from "./components/SideBar/Sidebar";
import { AuthContextProvider } from "./context/AuthContext";
import { InvoiceContextProvider } from "./context/InvoiceContext";
import { TimeIntervalContextProvider } from "./context/TimeIntervalContext";
import SidebarContextProvider from "./context/SidebarContext";
import { motion } from "framer-motion";

const metadata = {
  title: "IMS - Inventory Management System",
  description: "Most Efficient Inventory Management System",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState<string>("");

  useEffect(() => {
    const savedMode = localStorage.getItem("isDark");
    if (savedMode) {
      setIsDark(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  return (
    <html lang="en">
      <body className={`${isDark === "dark" ? "dark" : ""}`}>
        <AuthContextProvider>
          <SidebarContextProvider>
            <TimeIntervalContextProvider>
              <InvoiceContextProvider>
                <div className="drawer lg:drawer-open dark:bg-secondary">
                  <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className=" overflow-hidden drawer-content flex flex-col items-center justify-center dark:bg-secondary">
                    {/* Page content here */}
                    <Navbar isDark={isDark} setIsDark={setIsDark} />
                    {children}
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer-2"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu w-72 min-h-full bg-secondary dark:bg-neutral text-accent">
                      <Sidebar />
                    </ul>
                  </div>
                </div>
              </InvoiceContextProvider>
            </TimeIntervalContextProvider>
          </SidebarContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
