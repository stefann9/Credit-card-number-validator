import React from "react";

export class CardInput extends React.Component{
    onChange = (e)=>{
        const input = e.target.value;
        this.props.onChange(input)
    }
    render(){
        return (<input type="tel" onChange={this.onChange} inputmode="numeric" pattern="[0-9\s]{13,19}"  maxlength="19" placeholder="xxxx xxxx xxxx xxxx"/>)
    }
}