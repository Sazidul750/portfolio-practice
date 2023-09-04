import React from "react";

import "./Footer.scss";
import Section from "../shared/section/Section";
import { scroollToSection } from "../utils/helper";
import {
  FaYoutube,
  FaGithub,
  FaStackOverflow,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import logo from "../../images/logo.png";
import SocialIcons from "./social-icons/SocialIcons";
const Footer = () => {
  return (
    <Section className="footer" background="dark">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
          <img src={logo} alt="footer logo" />
        </div>
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scroollToSection("skill")}
          >
            Skill
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scroollToSection("portfolio")}
          >
            Portfolio
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scroollToSection("blog")}
          >
            Blogs & Articles
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scroollToSection("contact")}
          >
           Contact Me
          </li>
        </ul>
        <div className="social-icons">
           <SocialIcons className='social-icon' color="#ff0000" icon={<FaYoutube />} 
           link="https://www.youtube.com" />

           <SocialIcons className='social-icon'  color="#0d2636" icon={<FaGithub />} 
           link="https://www.github.com" />

           <SocialIcons className='social-icon' color="#0A66C2" icon={<
           FaLinkedinIn />} 
           link="https://www.linkedin.com" />

           <SocialIcons className='social-icon' color="#F2740d" icon={<FaStackOverflow />} 
           link="https://www.stackoverflow.com" />

           <SocialIcons className='social-icon' color="#E84C88" icon={<FaInstagram />} 
           link="https://www.instagram.com" />

        </div>
        <div className="bottom-bar">
            <div className="copyright-text">
                <p>Copyright 2023 Sazidul Islam
                </p>
            </div>
        </div>
      </div>
    </Section>
  );
};
 
export default Footer;
