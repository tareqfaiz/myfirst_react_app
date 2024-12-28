import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightText = `© ${currentYear} Tareq Faiz.`;

  return <p>{copyrightText}</p>;
}

export default Footer;
