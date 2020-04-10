import React, { Component } from 'react';
import Naim from './Naim'


class App extends  Component {
  state = {
    ninjas : [
      { name : 'Naim', age:14, belt:'green', id:1},
      { name : 'Mudezz', age:24, belt:'black', id:2},
      { name : 'Jennifer', age:40, belt:'red', id:3}
    ]
  }
  render(){
    return (
      <div className="App">
          <h1>My First React App</h1>
          <p>Welcome to my world</p>
          <Naim ninjas = {this.state.ninjas} />
       </div>
    );
  }
}
export default App;
