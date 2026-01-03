import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import CustomerDetails from "./pages/CustomerDetails";
import Header from "./components/Header";  
import Footer from "./components/Footer";   
import Memoexample from "./pages/memoexample";
import { createContext } from "react";
 import ApexchartsBarchart  from "./pages/ApexchartsBarchart";

function App() {
 
  const userContext= createContext();

  return (
    <div style={{margin:"5% 0% 5% 0%"}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  path="/Home" index element={<Home />} />
          <Route path="/Product" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="CustomerDetails" element={<CustomerDetails />} />
             <Route path="memoexample" element={<Memoexample />} />
   
            <Route path="ApexchartsBarchart" element={<ApexchartsBarchart />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
