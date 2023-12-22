import React, {Component} from 'react'
export default class PropsClass extends Component
{
    render()
    {
        return(
            <div>
                <h1>Hello I am studiyng in{this.props.college}</h1>
            </div>
        )
    }
}