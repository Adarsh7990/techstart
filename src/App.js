import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Deader from "./components/Deader";

import "./styles/App.scss";
import "./styles/deader.scss";
import "./styles/Home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/services.scss";
import "./styles/mediaquery.scss";

import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";

function App() {
  return (
    <Router>
      <Deader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
