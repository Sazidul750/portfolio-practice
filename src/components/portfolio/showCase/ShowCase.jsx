import React from "react";
import "./StyleshowCase.scss";
import ArrowIcon from "../../shared/Arrow-icon/ArrowIcon";

function ShowCase({ data, transition }) {
  return (
    <div className="project-showCase">
      {data.map((project,index) => (
        <div key={index}
          className={`showCase-item ${
            transition === "zoomout"
              ? "zoomOut"
              : transition === "zoomin"
              ? "zoomIn"
              : ""
          } `}
        >
          <div className="meta-content">
            <h3>{project.name}</h3>
            <div className="go-to-cta">
              <span className="text">Preject Details</span>
              <ArrowIcon />
            </div>
          </div>

          <img src={project.media.thumbnail} alt="" />
        </div>
      ))}
    </div>
  );
}

export default ShowCase;
