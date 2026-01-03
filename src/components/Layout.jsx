import React from "react";
import Header from "./Header";
import Footer from "./Footer";  // fix: Footer should be capitalized for React to recognize it as component
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header /> {/* Render header/navigation here */}
      <main className="container mt-4">
        <Outlet /> {/* This renders matched route's component */}
      </main>
      <Footer /> {/* Render footer here */}
    </>
  );
};

export default Layout;
