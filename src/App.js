import "./App.css";
import React from "react";


class App extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      cardNumsArr: [],
    };
  }
  

  render() {
    return (
      <div className="App">
        <h1>Card number validator : {this.state.cardNumsArr}</h1>
        <form action="#">
          <input type='tel'/>
        </form>
        <h1>Display Validator</h1>
      </div>
    );
  }
}

export default App;
