import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";

import "./App.css";
import "./stylesheets/main.scss";
import Card from "./components/Card";

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(result => {
        console.log(result);
        const data = result.data.results;
        setPeople(data);
      })
      .catch(error => console.log("ERROR: ", error));
  }, []);

  return (
    <div className="app-container">
      <Table celled>
        <Table.Header>
          <Table.Row className="header-row">
            <Table.HeaderCell className="header-name">Name</Table.HeaderCell>
            <Table.HeaderCell className="header-gender">
              Gender
            </Table.HeaderCell>
            <Table.HeaderCell className="header-year">
              Birth Year
            </Table.HeaderCell>
            <Table.HeaderCell className="header-height">
              Height
            </Table.HeaderCell>
            <Table.HeaderCell className="header-eyes">
              Eye Color
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {people.map((person, index) => (
            <Card person={person} key={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default App;
