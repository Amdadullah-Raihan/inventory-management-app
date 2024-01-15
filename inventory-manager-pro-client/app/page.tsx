// Import the necessary types and modules from Next.js
import { useRouter } from "next/navigation";
import type { NextPage } from "next";

// Import components
import HomePage from "./components/Home/HomePage";
import React from "react";

// Define the Home page component with NextPage type
const Home: NextPage = () => {
  return <HomePage />;
};

// Export the Home component
export default Home;
