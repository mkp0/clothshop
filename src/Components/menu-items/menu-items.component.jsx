import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";
function MenuItem(props) {
  return (
    <div
      className={`menu-item ${props.size}`}
      onClick={() => {
        props.history.push(`${props.match.url}${props.linkUrl}`);
      }}
    >
      <div
        className="background-image"
        style={{
          background: `url(${props.imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title"> {props.title.toUpperCase()} </h1>
        <span className="subtitle"> SHOP NOW </span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
