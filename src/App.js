import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Sam", age: 26 },
      { name: "John Doe", age: 29 },
      { name: "Johny Doe", age: 31 },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: "John Doe", age: 29 },
        { name: "Johny Doe", age: 35 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        {/* <button onClick={this.switchNameHandler.bind(this, "Sammyyy")}> */}#
        {/* shouldn't use the below one */}
        <button onClick={() => this.switchNameHandler("Sammyyy")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "XXXX")}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler}
        >
          My hobby is Reading
        </Person>
      </div>
    );
  }
}

export default App;
