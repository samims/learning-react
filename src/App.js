import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <Person name="Sam" age="26"/>
        <Person name="John Doe" age="29"/>
        <Person name="Johny Doe" age="30"> My hobby is Reading </Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement("h1", null, "Now This works"))
  }
}

export default App;
