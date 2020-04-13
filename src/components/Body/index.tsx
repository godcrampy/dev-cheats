import * as React from "react";
import { CardProps } from "../Card";

import "./Body.scss";

import git from "../../assets/images/git.webp";
import npm from "../../assets/images/npm.webp";
import docker from "../../assets/images/docker.webp";
import gatsby from "../../assets/images/gatsby.webp";
import markdown from "../../assets/images/markdown.webp";
import regex from "../../assets/images/regex.webp";
import vscode from "../../assets/images/vscode.webp";
import yarn from "../../assets/images/yarn.webp";
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
          {data.map((e, i) => {
            return <Card {...e} key={i} />;
          })}
        </div>
        <h3 id="bottom" className="title is-4">
          Cheat-sheet request? Open an{" "}
          <a href="https://github.com/godcrampy/dev-cheats/issues/new">issue</a>
        </h3>
      </div>
    );
  }
}

export default Body;
