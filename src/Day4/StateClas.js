import React,{ Component } from "react";
class StateClas extends Component
{
    state={
        color:"Yellow",
        price:121
    }
    handleChange=()=>{this.setState({color:"Red"})}
    render()
    {
        return(
            <div>
                <h1>The color I have select  is {this.state.color} the price is {this.state.price} </h1>
                <button onClick={this.handleChange}>Click me!!</button>
            </div>
        )
    }
}
export default StateClas;