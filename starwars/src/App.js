import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Card from "./components/CharacterCard/Card";

const App = () => {
  const [people, setPeople] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(result => setPeople(result.data.results))
      .catch(error => console.log("ERROR: ", error));
  }, []);

  console.log("People line 22: ", people);

  return (
    <div className="App">
      <div className="card-container">
        {people.map((person, index) => (
          <Card person={person} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
