import * as React from "react";

import "./MailBox.scss";

export interface MailBoxProps {}

export interface MailBoxState {}

class MailBox extends React.Component<MailBoxProps, MailBoxState> {
  render() {
    return (
      <div className="MailBox">
        <label className="label">Get updates when I post new Cheat-Sheet</label>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input className="input is-rounded" placeholder="Email" />
          </p>
          <p className="control">
            <button className="button is-rounded">Search</button>
          </p>
        </div>
        <p className="help">I don't spam.</p>
      </div>
    );
  }
}

export default MailBox;
