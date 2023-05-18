import React, { Component } from "react";
import { Routes, Route } from "react-router";
import Example from "./components/Example";

class Main extends Component {
  render () {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Example/>}/>
        </Routes>
      </div>
    );
  }
}

export default Main;