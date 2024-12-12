
import React, { Component } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class HeaderMobileLastDropDown extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      activeDropDown: this.props.activeDropDown ,
    };
  }


  // handleDropDown fun
  handleDropDown () {
    this.setState({
      activeDropDown: !this.state.activeDropDown,
    });
  };
  render() {
    const { activeDropDown } = this.state;
    return (
      <div >
        <div onClick={this.handleDropDown.bind(this)} className="sideBarItem ">
          <span style={{fontSize:'24px'}}> {this.props.title}</span>
          <FontAwesomeIcon
            icon={activeDropDown ? faAngleUp : faAngleDown}
          ></FontAwesomeIcon>
        </div>
        {activeDropDown && this.props.children}
      </div>
    );
  }
}
