import * as React from "react";

import "./MailBox.scss";
import firebase from "../../config/firebase-config";

export interface MailBoxProps {}

export interface MailBoxState {}

class MailBox extends React.Component<MailBoxProps, MailBoxState> {
  state = { subscribed: false, mail: "" };

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ mail: e.target.value });
  };

  validateEmail = (email: string) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  subscribe = () => {
    const mail = this.state.mail;
    if (!this.validateEmail(mail)) return;

    const db = firebase.firestore();
    db.collection("emails").add({
      mail: this.state.mail,
      source: "dev-cheats",
    });
    this.setState({ subscribed: true });
  };

  render() {
    return (
      <div className="MailBox">
        <label className="label">Get updates when I post new Cheat-Sheet</label>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input
              className="input is-rounded"
              value={this.state.mail}
              onChange={this.handleInput}
              placeholder="Email"
              type="email"
            />
          </p>
          <p className="control">
            <button onClick={this.subscribe} className="button is-rounded">
              Subscribe
            </button>
          </p>
        </div>
        <p className="help">
          I'll mail using my personal email. No Spam. No Automations.
          {this.state.subscribed && <p className="help center">Subscribed!</p>}
        </p>
      </div>
    );
  }
}

export default MailBox;
