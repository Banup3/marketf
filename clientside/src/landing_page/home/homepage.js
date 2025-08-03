import React from "react";
import Hero from "./hero";
import Awards from "./awards";
import Stats from "./stats";
import Pricing from "./pricing";
import Education from "./education";

import OpenAccount from "../openacnt";
import Navbar from "../navbar";
import Footer from "../footer";


function HomePage() {
  return (
    <>
      <Navbar />
       <Hero />
      <Awards />
       <Stats />
       <Pricing />
      <Education /> 
       <OpenAccount /> 
      
       <Footer /> 
       
    </>
  );
}

export default HomePage;