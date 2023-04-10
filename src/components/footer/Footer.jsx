import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer section" id="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Shahid Shaikh</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://api.whatsapp.com/send?phone=+91960606569&text=Hello, more information!"
            className="footer__social-link"
            target="_blank"
          >
            <li className="bx bxl-whatsapp"></li>
          </a>

          <a
            href="https://www.linkedin.com/in/shahid-shaikh260992/"
            className="footer__social-link"
            target="_blank"
          >
            <li className="bx bxl-linkedin"></li>
          </a>

          <a
            href="https://github.com/sha-shaikhh/"
            className="footer__social-link"
            target="_blank"
          >
            <li className="bx bxl-github"></li>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Shahid Shaikh. All rights reserved
        </span>
      </div>
    </section>
  );
};

export default Footer;
