import React from "react";

import "./App.scss";
import Header from "./components/Header";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div id="App">
        <Header />
      </div>
    );
  }
}

export default App;
