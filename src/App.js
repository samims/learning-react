import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Sam", age: 26 },
      { name: "John Doe", age: 29 },
      { name: "Johny Doe", age: 31 },
    ],
  });

  const [otherState, setOtherState] = useState("some other value");
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Sam", age: 26 },
        { name: "John Doe", age: 29 },
        { name: "Johny Doe", age: 35 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a react app!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      >
        {" "}
        My hobby is Reading{" "}
      </Person>
    </div>
  );
};

export default app;

// state = {
//     persons: [
//         {name: "Sam", age: 26},
//         {name: "John Doe", age: 29},
//         {name: "Johny Doe", age: 31},
//     ],
// };

// switchNameHandler = () => {
//     this.setState({
//         persons: [
//             {name: "Sam", age: 26},
//             {name: "John Doe", age: 29},
//             {name: "Johny Doe", age: 35},
//         ],
//     });
// };
