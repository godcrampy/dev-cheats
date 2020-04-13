import React from "react";

import "./App.scss";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div id="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
