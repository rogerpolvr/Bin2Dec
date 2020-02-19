import React from "react";
import { FaSync } from "react-icons/fa";
import { Container, Form } from "./styles";

export default function Main() {
  return (
    <Container>
      <h1>
        <FaSync />
        Binary to Decimal
      </h1>
      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Binary value" />
        <input type="text" placeholder="Decimal result" />
      </Form>
    </Container>
  );
}
