import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>sajid-awal-designⓒ{year}</p>
    </footer>
  );
}

export default Footer;
