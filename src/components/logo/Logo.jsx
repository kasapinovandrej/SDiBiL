import React from "react";
import "./logo.scss";
import { ReactComponent as LogoSvg } from "../../assets/images/sdibil-logo@3x.svg";
import { withRouter } from "react-router-dom";

const Logo = ({ history }) => {
  return (
    <div className="svg-logo" onClick={() => history.push("/")}>
      <LogoSvg />
    </div>
  );
};

export default withRouter(Logo);
