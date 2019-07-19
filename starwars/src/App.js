import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header, Image, Table } from "semantic-ui-react";
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
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Character</Table.HeaderCell>
            <Table.HeaderCell>Info</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {people.map((person, index) => {
            return <Card person={person} key={index} />;
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default App;
