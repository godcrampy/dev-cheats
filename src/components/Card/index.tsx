import * as React from "react";

import "./Card.scss";

export interface CardProps {
  image: string;
  title: string;
  link: string;
}

export interface CardState {}

class Card extends React.Component<CardProps, CardState> {
  render() {
    return (
      <div className="Card">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={this.props.image} alt="Logo" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{this.props.title}</p>
                <p className="subtitle is-6">
                  <a href={this.props.link}>Download</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
