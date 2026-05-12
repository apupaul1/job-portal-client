import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default RootLayout;
