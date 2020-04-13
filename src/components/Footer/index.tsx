import * as React from "react";

import github from "../../assets/icons/github.svg";
import instagram from "../../assets/icons/instagram.svg";
import dev from "../../assets/icons/dev-dot-to.svg";
import gmail from "../../assets/icons/gmail.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";

import "./Footer.scss";

export interface FooterProps {}

export interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  render() {
    return (
      <footer className=" footer Footer">
        <p>baked by godcrampy</p>
        <a href="https://github.com/godcrampy">
          <img alt="icon" src={github}></img>
        </a>
        <a href="https://dev.to/godcrampy">
          <img alt="icon" src={dev}></img>
        </a>
        <a href="https://instagram.com/godcrampy">
          <img alt="icon" src={instagram}></img>
        </a>
        <a href="mailto:sahilbondre@gmail.com">
          <img alt="icon" src={gmail}></img>
        </a>
        <a href="https://www.linkedin.com/in/sahil-bondre-571a8416a/">
          <img alt="icon" src={linkedin}></img>
        </a>
        <a href="https://twitter.com/godcrampy">
          <img alt="icon" src={twitter}></img>
        </a>
        <br />
        <p>
          This website is{" "}
          <a href="https://github.com/godcrampy/dev-cheats">
            open sourced{" "}
            <span role="img" aria-label="heart">
              💖
            </span>
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
