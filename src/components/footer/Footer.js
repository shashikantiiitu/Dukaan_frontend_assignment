import React from "react";
import "../../allcss.css";
import FooterLogo from "../../assets/footer/footer-logo.png";
import MadeIn from "../../assets/footer/made-in.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-top-section">
        <div className="logo-div">
          <img src={FooterLogo} alt=""></img>
        </div>
        <div className="footer-content">
          <div className="footer-links">
            <p>Contact</p>
            <p>FAQ's</p>
          </div>
          <div className="footer-links">
            <p>Tutorials</p>
            <p>Blog</p>
          </div>
          <div className="footer-links">
            <p>Privacy</p>
            <p>Banned Items</p>
          </div>
          <div className="footer-links">
            <p>About</p>
            <div><p>jobs</p></div>
          </div>
          <div className="footer-links">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <div>
          <p>Dukaan 2020, All rights reserved.</p>
        </div>
        <div>
          <img src={MadeIn} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
