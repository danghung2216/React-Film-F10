import React, { Fragment, useState } from "react";
import { CiFacebook } from "react-icons/ci";
import { SiZalo } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import PopUpZalo from "../../Component/PopUpZalo";

const Footer = () => {
  const [openZalo, setOpenZalo] = useState(false);
  const handleOpenZalo = () => {
    setOpenZalo(!openZalo);
  };
  return (
    <Fragment>
      <div className="footer-container">
        {openZalo ? <PopUpZalo /> : undefined}
        <div className="contact-wrap">
          <h2>Liên hệ:</h2>
          <a href="https://www.facebook.com/daghug2216/" target="_blank">
            {" "}
            <CiFacebook size="2rem" />
          </a>
          <a href="https://github.com/danghung2216">
            <FaGithub size="2rem" />
          </a>
          <button onClick={handleOpenZalo}>
            <SiZalo size="2rem" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
