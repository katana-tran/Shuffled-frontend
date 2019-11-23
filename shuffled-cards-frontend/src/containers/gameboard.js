import React, { Component } from "react";
import "../style/gameboard.css";
import gameImg from "../images/FULLBOARD.png";

class Gameboard extends Component {
  render() {
    return (
      <div className="gameboard">
        <div className="gameImg"></div>
      </div>
    );
  }
}

export default Gameboard;
