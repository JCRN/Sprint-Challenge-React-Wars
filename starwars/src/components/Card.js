import React from "react";
import { Table } from "semantic-ui-react";

const Card = ({ person }) => (
  <Table.Row className="person-row">
    <Table.Cell className="name">{person.name}</Table.Cell>
    <Table.Cell className="gender">{person.gender}</Table.Cell>
    <Table.Cell className="year">{person.birth_year}</Table.Cell>
    <Table.Cell className="height">{person.height}</Table.Cell>
    <Table.Cell className="eyes">{person.eye_color}</Table.Cell>
  </Table.Row>
);

export default Card;
