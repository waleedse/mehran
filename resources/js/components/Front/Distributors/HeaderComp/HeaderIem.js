import React, { Component } from "react";

export default class HeaderIem extends Component {
 constructor(props) {
   super(props);
   this. state = {
    activeDropDown: false,
  };
  
 }
 
  dropDownHandler  () {
    this.setState({
      activeDropDown: !this.state.activeDropDown,
    });
  };
  render() {
    const { activeDropDown } = this.state;
    return (
      <div
      style={this.props.styles}
        className="navBarItem"
        onMouseEnter={this.dropDownHandler.bind(this)}
        onMouseLeave={this.dropDownHandler.bind(this)}
      >
        {this.props.title}
        {activeDropDown &&
          React.cloneElement(this.props.children, {
            dropDownHandler: this.dropDownHandler.bind(this),
          })}
      </div>
    );
  }
}
