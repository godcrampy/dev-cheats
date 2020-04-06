import React from "react";

import "./App.scss";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return <div id="App">App</div>;
  }
}

export default App;
