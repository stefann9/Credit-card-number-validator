import React from "react";
import "./display-valid-card.style.css";

export class DisplayValidCard extends React.Component {
  

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
      const isValid = sum % 10 === 0 ? true : false;
      return isValid;
    }
  };

  render() {
    const cardNumsArr = this.props.cardNumsArr;
    const isValid = this.validateCard(cardNumsArr) ? "valid" : "invalid";
    return cardNumsArr.length >= 10 ? (
      <p className={isValid}>{`The credit card number is ${isValid}`} </p>
    ) : (
      <p>
        We'll check your credit card number against the Luhn Algorithm to see if
        it is a valid number.
      </p>
    );
  }
}
