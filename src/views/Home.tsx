import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
