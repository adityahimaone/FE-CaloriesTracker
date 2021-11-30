import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Feature from "./components/Feature";
import Faq from "./components/Faq";
import GqlHome from "../../graphql/GqlHome";

export default function Home() {
  const { onGetData, DataFood } = GqlHome();
  console.log("data", onGetData);
  return (
    <>
      <Header />
      <div className="mx-auto">
        {/* Hero */}
        <Hero />
        {/* Search */}
        <Search
          searchHandle={GqlHome().onGetData}
          searchResult={GqlHome().DataFood}
        />
        {/* Feature */}
        <Feature />
        {/* FAQ */}
        <Faq />
      </div>
      <Footer />
    </>
  );
}
