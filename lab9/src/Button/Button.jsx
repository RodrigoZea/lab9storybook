import React, { Component } from 'react'
import '../main.css'

export default class Button extends Component {
    constructor() {
        super()
    }
    render() {
        const { onClick, active } = this.props

        return (
            <div className={`${this.props.btnClass} ${active ? "active" : ""}`} onClick={(e) => onClick(e)}>
                <span className="navigation-tab__icon">
                    <div className={this.props.iconClass} />
                </span>
                {active ? <span className="navigation-tab__txt">{this.props.tabText}</span> : null}
                
            </div>
        );
    }
}