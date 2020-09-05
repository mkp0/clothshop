import React from "react";
import "./menu-item.styles.scss";
export default function MenuItem(props) {
  return (
    <div className={`menu-item ${props.size}`}>
      <div
        className="background-image"
        style={{
          background: `url(${props.url})`,
        }}
      />
      <div className="content">
        <h1 className="title"> {props.title} </h1>{" "}
        <span className="subtitle"> SHOP NOW </span>{" "}
      </div>{" "}
    </div>
  );
}
