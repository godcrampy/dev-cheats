import * as React from "react";

import "./Body.scss";

import git from "../../assets/images/git.png";
import Card from "../Card";

export interface BodyProps {}

export interface BodyState {}

class Body extends React.Component<BodyProps, BodyState> {
  render() {
    return (
      <div className="Body">
        <div className="flex">
          <Card title="Git" link="#" image={git} />
          <Card title="Git" link="#" image={git} />
          <Card title="Git" link="#" image={git} />
        </div>
      </div>
    );
  }
}

export default Body;
