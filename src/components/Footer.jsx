import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const FooterStyle = {
    color: "white",
  };

  return (
    <footer
      className="bg-dark text-center py-3 fixed-bottom w-100"
      style={FooterStyle}
    >
      © 2025 Pickles Company. All rights reserved.
    </footer>
  );
};

export default Footer;
