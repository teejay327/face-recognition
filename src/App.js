import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { input: ''}
  }
  onInputChange = (event) => {
    console.log(event);
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <ImageLinkForm onInputChange={ this.onInputChange }/>
      {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;