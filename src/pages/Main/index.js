import React, { Component } from "react";
import { FaSync } from "react-icons/fa";
import { Container, Form, SubmitButton } from "./styles";

export default class Main extends Component {
  state = {
    newBinary: ""
  };

  handleInputChange = e => {
    const binaryValue = e.target.value;
    this.setState({
      newBinary: binaryValue
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { newBinary, newDecimal } = this.state;

    return (
      <Container>
        <h1>Binary to Decimal</h1>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Binary value"
            value={newBinary}
            onChange={this.handleInputChange}
          />
          <SubmitButton>
            <FaSync />
          </SubmitButton>
          <input type="text" placeholder="Decimal value" value={newDecimal} />
        </Form>
      </Container>
    );
  }
}
