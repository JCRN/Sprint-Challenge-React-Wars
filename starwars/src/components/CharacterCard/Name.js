import React from "react";
import styled from "styled-components";

export default function Name({ person }) {
  console.log("hi from Name: ", person);
  return (
    <div className="name-container">
      <h2 className="name">{person.name}</h2>
    </div>
  );
}
