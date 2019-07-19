import React from "react";
import { Container, Header, Image } from "semantic-ui-react";

const Card = ({ person }) => (
  <Container className="card-container" text>
    <div>
      <Image src="../assets/luke-skywalker.svg" />
      <Header as="h1">{person.name}</Header>
    </div>
    <div className="gender-container">
      <Header as="h4">Gender:</Header>
      <span className="gender">
        {person.gender === "n/a" ? "droids don't have gender!" : person.gender}
      </span>
    </div>
    <div className="year-container">
      <Header as="h4">Birth Year:</Header>
      <span className="year">{person.birth_year}</span>
    </div>
    <div className="height-container">
      <Header as="h4">Height:</Header>
      <span className="height">{person.height}</span>
    </div>
    <div className="hair-color-container">
      <Header as="h4">Hair Color:</Header>
      <span className="hair-color">
        {person.hair_color === "n/a" ? "bald and shiny" : person.hair_color}
      </span>
    </div>
    <div className="eye-color-container">
      <Header as="h4">Eye Color:</Header>
      <span className="eye-color">{person.eye_color}</span>
    </div>
  </Container>
);

export default Card;
