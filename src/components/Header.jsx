import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm"
      style={{ backgroundColor: "#14532d" }}
    >
      <div className="container-fluid">
        {/* Brand with Logo and Text */}
        <Link
          className="navbar-brand d-flex align-items-center fw-bold fs-3 text-white"
          to="/"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          <img
            src="/pnc-logo.png"
            alt="PNC Logo"
            style={{ height: "50px", marginRight: "10px", width: "50px" }}
          />
          Pamantasan ng Cabuyao
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link mx-2 text-white ${
                  location.pathname === "/"
                    ? "fw-bold text-decoration-underline"
                    : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link mx-2 text-white ${
                  location.pathname === "/about"
                    ? "fw-bold text-decoration-underline"
                    : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link mx-2 text-white ${
                  location.pathname === "/course"
                    ? "fw-bold text-decoration-underline"
                    : ""
                }`}
                to="/course"
              >
                Course
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link mx-2 text-white ${
                  location.pathname === "/admission"
                    ? "fw-bold text-decoration-underline"
                    : ""
                }`}
                to="/admission"
              >
                Admission
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link mx-2 text-white ${
                  location.pathname === "/gallery"
                    ? "fw-bold text-decoration-underline"
                    : ""
                }`}
                to="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link mx-2 text-white ${
                  location.pathname === "/contact"
                    ? "fw-bold text-decoration-underline"
                    : ""
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
