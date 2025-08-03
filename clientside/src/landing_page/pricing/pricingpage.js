import React from "react";
import Hero from "./hero";
import Brokerage from "./brokerage";
import OpenAccount from "../openacnt";
import Navbar from "../navbar";
import Footer from "../footer";

function PricingPage() {
  return (
    <>
      <Navbar/>
      <Hero />
      <OpenAccount />
      <Brokerage />
      <Footer/>
    </>
  );
}

export default PricingPage;