import * as React from "react";

import "./Header.scss";
import macImage from "../../assets/images/tools.png";
import MailBox from "../MailBox";

export interface HeaderProps {}

export interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return (
      <div className="Header">
        <div className="columns">
          <div className="column flex">
            <h1 className="title is-1 mono large">Dev Cheats</h1>
            <h3 className="subtitle is-3">Technical Cheat Sheets for Devs in Hurry</h3>
          </div>
          <div className="column">
            <img src={macImage} alt="mac computer" />
            <MailBox />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
