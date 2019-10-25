import React, { Component } from 'react';
import logo from './logo.svg';
import './main.scss';
import Background from './Background/Background';
import Button from './Button/Button';
import Container from './Container/Container';

class App extends Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)

    this.state = {
      activeDivs = []
    }
  }

  onClick(div) {
    div.classList.add("active")
    (".navigation-tab-overlay").css({
      left: (this).prevAll().length * 130 + "px"
    })
  }

  render() {
    return (
      <div className="App">
        <Background titleText="React Nav Bar"/>
        <Container onClick={this.onClick} active={1}/>
      </div>
    );
  }
}

export default App;
