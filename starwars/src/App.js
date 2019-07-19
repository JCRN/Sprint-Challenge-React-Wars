import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [people, setPeople] = useState();
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/10/`)
      .then(result => setPeople(result.data))
      .catch(error => console.log("ERROR: ", error));
  }, []);
  console.log(people);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
};

export default App;
