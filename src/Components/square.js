import React, { Component } from "react";
import a from "./square.css"
class Square extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <button className="sbutton" onClick={this.props.onClick}>
        { this.props.value ? this.props.value : (this.props.winner ? "game finished" : "fill up")}
      </button>
    );
  }
}

export default Square;