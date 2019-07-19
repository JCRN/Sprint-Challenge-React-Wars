import React from "react";
import { prependOnceListener } from "cluster";
import { Header, Image, Table } from "semantic-ui-react";

export default function Card({ person }) {
  return (
    <Table.Row>
      <Table.Cell>
        <Header as="h4">
          <Header.Content>{person.name}</Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>
        <Table.Cell.Content>{person.name}</Table.Cell.Content>
      </Table.Cell>
    </Table.Row>
  );
}
