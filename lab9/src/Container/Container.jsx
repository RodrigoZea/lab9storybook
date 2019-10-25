import React, { Component } from 'react'
import Button from '../Button/Button';
import '../main.css';

export default class Container extends Component {
    render() {
        const { onClick } = this.props

        return(
            <nav className="navigation-tab">
                <Button iconClass="listIcon" tabText="List" onClick={onClick} btnClass="navigation-tab-item" active={this.props.active == 1}/>
                <Button iconClass="tagIcon" tabText="Tags" onClick={onClick} btnClass="navigation-tab-item" active={this.props.active == 2}/>
                <Button iconClass="bagIcon" tabText="Bag" onClick={onClick} btnClass="navigation-tab-item" active={this.props.active == 3}/>
                <Button iconClass="bellIcon" tabText="Notifications" onClick={onClick} btnClass="navigation-tab-item" active={this.props.active == 4}/>
            </nav>
        );
    }
}