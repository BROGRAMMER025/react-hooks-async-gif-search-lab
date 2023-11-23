import React, { Component } from 'react';
import NavBar from './NavBar';
import GifListContainer from './GifListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <GifListContainer />
      </div>
    );
  }
}

export default App;
