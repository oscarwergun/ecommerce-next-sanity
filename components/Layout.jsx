import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// head contains some meta data
import Head from "next/head";
//whenever we wrap component in app.js with layout we have access to children as prop
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Fullstack e-commerce app with CodeGuruOzzy</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main >{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
