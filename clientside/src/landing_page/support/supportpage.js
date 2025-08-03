import React from "react";

import Hero from "./hero";
import CreateTicket from "./createticket";
import Navbar from "../navbar";
import Footer from "../footer";

function PricingPage() {
  return (
    <>
    <Navbar/>
      <Hero />
      <CreateTicket />
      <Footer/>
    </>
  );
}

export default PricingPage;