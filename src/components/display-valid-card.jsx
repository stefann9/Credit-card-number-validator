import React from "react";

export class DisplayValidCard extends React.Component{
    
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
          const isValid = sum % 10 === 0 ? "valid" : "invalid";
          return `The card number is ${isValid}`
        } else {
          return 'Please enter a number between 10 digits and 19 digits'
        }
      };
    
    render(){
        return (
            <p>{this.validateCard(this.props.cardNumsArr)}</p>
        );
    }
}