import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let xCord = event.clientX;
    let yCord = event.clientY;
    return drawChromeBoiAtCoords(xCord, yCord);
  }

  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  handleKeyPress = (event) => {
    if (event.key === 'a'){
      return resize('+');
    } else if (event.key == 's'){
      return resize('-');
    }
  }
  render() {
    return (
      <canvas 
        onKeyPress={this.handleKeyPress}
        onClick={toggleCycling}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
