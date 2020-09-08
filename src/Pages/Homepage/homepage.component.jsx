import React from "react";
import "./homepage.style.scss";
import Directory from "../../Components/directory/directory.component";

export default function Homepage({ history }) {
  return (
    <div className="homepage">
      <Directory history={history} />
    </div>
  );
}
