import React from "react";

import hand from "../../../images/hand.png";
import girl from "../../../images/girl.png";
import "./IntroContent.scss";
import CalltoAction from "../../shared/callToAction/CalltoAction";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { scroollToSection } from "../../utils/helper";

function IntroContent({action}) {
  return (
    <div className="intro-content">
      <div className="lay-out">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={hand} alt="" />
              </span>
              <span className="text">,I Am </span>
            </span>
            <span className="big-text">JS Dev Hindi</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            quisquam sunt molestiae dolor illum optio quae{" "}
          </p>
          <CalltoAction text={"Get Started"} action={() => scroollToSection("contact")} />
        </div>
        <div className="right-col">
          <img src={girl} alt="girl" />
          <div className="highlights horigontal">
            <div className="icon">
              <BsAwardFill />
            </div>
            <div className="text">Best Design Award</div>
          </div>
          <div className="highlights vartical">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <span>4k+</span>
              Happy Customers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroContent;
