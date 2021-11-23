import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Feature from "./components/Feature";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto">
        {/* Hero */}
        <Hero />
        {/* Search */}
        <Search />
        {/* Feature */}
        <Feature />
        {/* FAQ */}
        <Faq />
      </div>
      <Footer />
    </>
  );
}
