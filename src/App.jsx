import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Course from "./pages/Course";
// import About from "./pages/About";
// import Admission from "./pages/Admission";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        {/* Main content section */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
