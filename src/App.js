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




  render() {
    return (
      <div className="App">
        <h1>Card number validator : {this.state.cardNumsArr}</h1>
        <form action="#">
          {/* <input type='tel'/> */}
          <CardInput onChange={this.handlerTakeInput} />
        </form>
        <h1>Display Validator</h1>
      </div>
    );
  }
}

export default App;
