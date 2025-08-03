import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landing_page/home/homepage";
import Signup from "./landing_page/pages/signup";
import AboutPage from "./landing_page/about/aboutpage";
import ProductPage from "./landing_page/product/productpage";
import PricingPage from "./landing_page/pricing/pricingpage";
import SupportPage from "./landing_page/support/supportpage";
import Login from "./landing_page/pages/login";
import Dashboard from "./dashboard/dashboard";

import NotFound from "./landing_page/notfound";
import './index.css'



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
   
  </BrowserRouter>
);