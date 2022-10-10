import React from "react";

export class DisplayValidCard extends React.Component{
    render(){
        return (
            <h1>{this.props.validCard}</h1>
        );
    }
}