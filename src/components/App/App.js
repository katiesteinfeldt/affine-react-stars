import React, { Component } from 'react';
import Description from '../Description/Description';

class App extends Component {
  state = {
    name: '',
    diameter: '',
  }

handleChangeFor = (propertyName) => (event) => {
  console.log('handleChange is running');
  this.setState({
    [propertyName]: event.target.value,
  })
}

//function above does the same as the two below

  // handleNameChange = (event) => {
  //   this.setState({
  //    name: event.target.value,
  //    diameter: this.state.diameter,
  //   })
  // }

  // handleNumberChange = (event) => {
  //   this.setState({
  //     name: this.state.name,
  //     diameter: event.target.value,
  //   })
  // }

  handleButtonClick = (event) => {
    console.log('button clicked');
  }


  render() {
    return (
      <div>
        <Description />
        <h3>{this.state.name}</h3><h3>{this.state.diameter}</h3>
        <input
          placeholder="Star Name"
          value={this.state.name}
          type="text"
          onChange={this.handleChangeFor('name')}
        />
        <input
          placeholder="Diameter"
          value={this.state.diameter}
          type="number"
          onChange={this.handleChangeFor('diameter')}
        />
        <button onClick={this.handleButtonClick}>Add Star</button>
      </div>
    );
  }
}

export default App;
