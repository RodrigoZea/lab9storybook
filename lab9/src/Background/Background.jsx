import React, { Component } from 'react'
import '../main.css'

export default class Background extends Component {
    render() {

        return (
            <div className="rounded-container">
                {this.props.titleText}
            </div>
        );
    }
}