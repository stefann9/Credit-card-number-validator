import "./App.css";
import React from "react";
import { CardInput } from "./components/card-input.component";
import { DisplayValidCard } from "./components/display-valid-card";

class App extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      cardNumsArr: [],
      validCard: "",
    };
  }

  handlerTakeInput = (inputValue) => {
    const arr = inputValue.split("").map((el) => parseInt(el));
    const isValid = this.validateCard(arr);
    this.setState({ cardNumsArr: arr, validCard:isValid });
  };

  validateCard = (arr) => {
    // use Luhn algorithm to check if the credit card number is valid
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
      const isValid = sum % 10 === 0 ? "The card number is valid" : "The card number is invalid";
      return isValid
    } else {
      return 'Please enter a number with min 10 digits and max 19 digits'
    }
  };

  render() {

    return (
      <div className="App">
        <h1>Card number validator : {this.state.cardNumsArr}</h1>
        <form action="#">
          <CardInput onChange={this.handlerTakeInput} />
        </form>
          <DisplayValidCard validCard={this.state.validCard} />
      </div>
    );
  }
}

export default App;
