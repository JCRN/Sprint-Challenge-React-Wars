import React from "react";
import Name from "./Name";

export default function Card({ person }) {
  return (
    <div>
      <Name person={person} />
    </div>
  );
}
