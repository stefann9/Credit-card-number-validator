import "./App.css";
import React from "react";
import { CardInput } from "./components/card-input.component";

class App extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      cardNumsArr: [],
    };
  }

  handlerTakeInput = (inputValue) => {
    const arr = inputValue.split("").map((el) => parseInt(el));
    this.setState({ cardNumsArr: arr });
  };

  validateCard = (arr) => {
    // use Luhn algorithm to check if credit card is valid
    let count = 1;
    let doubleDigits = [];
    if (arr.length >= 10 && arr.length <= 19) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (count === 1) {
          doubleDigits.push(arr[i]);
        } else if (count === 2) {
          let doubleDigit = arr[i] * 2;
          if (doubleDigit > 9) {
            doubleDigits.push(doubleDigit - 9);
          } else {
            doubleDigits.push(doubleDigit);
          }
        }
        count === 1 ? (count = 2) : (count = 1);
      }
      const sum = doubleDigits.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );

      return sum % 10 === 0;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Card number validator : {this.state.cardNumsArr}</h1>
        <form action="#">
          <CardInput onChange={this.handlerTakeInput} />
        </form>
        <h1>
          card is {this.validateCard(this.state.cardNumsArr) ? "true" : "false"}
        </h1>
      </div>
    );
  }
}

export default App;
