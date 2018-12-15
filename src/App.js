import React, { Component } from 'react';
import NavBar from './components/navbar';
import './fontAwesome/css/font-awesome.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
      </div>
    );
  }
}

export default App;
