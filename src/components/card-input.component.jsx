import React from "react";

export class CardInput extends React.Component{
    onChange = (e)=>{
        const input = e.target.value;
        this.props.onChange(input)
    }
    render(){
        return (<input type="tel" onChange={this.onChange}/>)
    }
}