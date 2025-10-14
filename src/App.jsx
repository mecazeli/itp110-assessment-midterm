import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
// import Admission from "./pages/Admission";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        {/* Main content section */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<Course />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/admission" element={<Admission />} /> */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
