import * as React from "react";
import { CardProps } from "../Card";

import "./Body.scss";

import git from "../../assets/images/git.png";
import npm from "../../assets/images/npm.png";
import docker from "../../assets/images/docker.png";
import gatsby from "../../assets/images/gatsby.png";
import markdown from "../../assets/images/markdown.png";
import regex from "../../assets/images/regex.png";
import vscode from "../../assets/images/vscode.png";
import yarn from "../../assets/images/yarn.png";
import Card from "../Card";

const data: CardProps[] = [
  {
    title: "Git",
    image: git,
    link: "https://github.com/godcrampy/cheat-sheets/blob/master/git/git-cheatsheet.pdf",
  },
  {
    title: "npm",
    image: npm,
    link: "https://github.com/godcrampy/cheat-sheets/blob/master/npm/npm-cheatsheet.pdf",
  },
  {
    title: "Yarn",
    image: yarn,
    link: "https://github.com/godcrampy/cheat-sheets/blob/master/yarn/yarn-cheatsheet.pdf",
  },
  {
    title: "Gatsby",
    image: gatsby,
    link: "https://github.com/godcrampy/cheat-sheets/blob/master/gatsby/gatsby-cheatsheet.pdf",
  },
  {
    title: "Docker",
    image: docker,
    link: "https://github.com/godcrampy/cheat-sheets/blob/master/docker/docker-cheatsheet.pdf",
  },
  {
    title: "VS Code",
    image: vscode,
    link: "https://github.com/godcrampy/cheat-sheets/blob/master/vscode/vscode-cheatsheet.pdf",
  },
  {
    title: "Markdown",
    image: markdown,
    link: "https://github.com/godcrampy/cheat-sheets/blob/master/markdown/markdown-cheatsheet.pdf",
  },
  {
    title: "Regex",
    image: regex,
    link: "https://github.com/godcrampy/cheat-sheets/blob/master/regex/regex-cheatsheet.pdf",
  },
];

export interface BodyProps {}

export interface BodyState {}

class Body extends React.Component<BodyProps, BodyState> {
  render() {
    return (
      <div className="Body">
        <div className="flex">
          {data.map((e) => {
            return <Card {...e} />;
          })}
        </div>
      </div>
    );
  }
}

export default Body;
