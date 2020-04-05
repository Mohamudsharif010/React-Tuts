import React, { Component } from 'react';
import Naim from './Naim'


class App extends  Component {
  render(){
    return (
      <div className="App">
          <h1>My First React App</h1>
          <p>Welcome to my world</p>
          <Naim name="Naim" age="14" belt="White"/>
          <Naim name="Mudezz" age="24" belt="Black"/>
       </div>
    );
  }
}
export default App;
