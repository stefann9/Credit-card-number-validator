import React from "react";

export class CardInput extends React.Component{
    onChange = (e)=>{
        const input = e.target.value;
        this.props.onChange(input)
    }
    render(){
        return (<div>
            <label htmlFor="credit-card">Credit card </label>
        <input id="credit-card"type="tel" onChange={this.onChange} inputMode="numeric" pattern="[0-9\s]{13,19}"  maxLength="19" placeholder="xxxx xxxx xxxx xxxx"/>
        </div>)
    }
}