import React from "react";
import Footer from "./Footer";
import Header from "./Header";
 

export default function Layout({ children }) {
  return (
    <div className="max-h-screen">
      <Header />
      <section className="grid place-content-center h-screen -mt-36">
        {children}
      </section>
      <Footer />
    </div>
  );
}
