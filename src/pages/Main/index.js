import React, { Component } from "react";
import { FaSync } from "react-icons/fa";
import { Container, Form } from "./styles";

export default class Main extends Component {
  state = {
    newBinary: "",
    newDecimal: ""
  };

  handleInputChange = e => {
    const binaryValue = e.target.value;
    this.setState({ newBinary: binaryValue });
    this.setState({ newDecimal: binaryValue * 2 });
  };

  bin2dec(bin) {
    let result;
    for (let index = bin.lengh - 1; index >= 0; index--) {
      result += parseInt(bin[index]) * Math.pow(2, bin.lengh - 1 - index);
    }
    return result;
  }

  render() {
    const { newBinary, newDecimal } = this.state;

    return (
      <Container>
        <h1>
          <FaSync />
          Binary to Decimal
        </h1>
        <Form>
          <input
            type="text"
            placeholder="Binary value"
            value={newBinary}
            onChange={this.handleInputChange}
          />
          <input type="text" placeholder="Decimal result" value={newDecimal} />
        </Form>
      </Container>
    );
  }
}
