import "./App.css";
import React from "react";
import { CardInput } from "./components/card-input/card-input.component";
import { DisplayValidCard } from "./components/display-valid-card/display-valid-card.component";

class App extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      cardNumsArr: [],
    };
  }

  handlerTakeInput = (inputValue) => {
    const arr = inputValue.split("").map((el) => parseInt(el));
    this.setState({ cardNumsArr: arr});
  };

  render() {

    return (
      <div className="App">
        <h1>Credit card number validator</h1>
        <form action="#">
          <CardInput onChange={this.handlerTakeInput} />
        </form>
          <DisplayValidCard cardNumsArr={this.state.cardNumsArr} />
      </div>
    );
  }
}

export default App;
