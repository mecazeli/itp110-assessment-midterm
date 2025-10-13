import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer
      className="text-white text-center py-3 mt-auto"
      style={{ backgroundColor: "#14532d" }} // PnC green
    >
      <p className="mb-0 small">
        &copy; {currentYear} Pamantasan ng Cabuyao. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
