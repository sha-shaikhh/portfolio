import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://api.whatsapp.com/send?phone=+91960606569&text=Hello, more information!"
        className="home__social-icon"
        target="_blank"
      >
        <li className="uil uil-whatsapp"></li>
      </a>

      <a
        href="https://www.linkedin.com/in/shahid-shaikh260992/"
        className="home__social-icon"
        target="_blank"
      >
        <li className="uil uil-linkedin"></li>
      </a>

      <a
        href="https://github.com/sha-shaikhh/"
        className="home__social-icon"
        target="_blank"
      >
        <li className="uil uil-github-alt"></li>
      </a>
    </div>
  );
};

export default Social;
