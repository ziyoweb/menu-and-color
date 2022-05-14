import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [color, setColor] = useState(null);

  useEffect(() => {
    const data = async () => {
      const data = await axios
        .get("https://54.uz/rang.php")
        .then((res) => {
          setColor(res.data.status);
        })
        .catch((err) => console.log(err, "err"));
    };
    data();
  }, []);

  return (
    <div className="App container">
      <Router>
        <Navbar type={color} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
