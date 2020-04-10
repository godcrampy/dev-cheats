import React from "react";

import "./App.scss";
import Header from "./components/Header";
import Body from "./components/Body";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div id="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
