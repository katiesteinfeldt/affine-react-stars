import React, { Component } from 'react';
import Description from '../Description/Description';

class App extends Component {
  state = {
    newStar: {
      name: '',
      diameter: '',
    }
  }

  handleChangeFor = (propertyName) => (event) => {
    console.log('handleChange is running');
    this.setState({
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value,
      },
    });
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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('button clicked');
    this.setState({
      ...this.state.newStar,
      name: '',
      diameter: '',
    })
    console.log(this.state.newStar);
  }


  render() {
    return (
      <div>
        <Description />
        <h3>{this.state.newStar.name} is {this.state.newStar.diameter} km in diameter</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Star Name"
            value={this.state.newStar.name}
            type="text"
            onChange={this.handleChangeFor('name')}
          />
          <input
            placeholder="Diameter"
            value={this.state.newStar.diameter}
            type="number"
            onChange={this.handleChangeFor('diameter')}
          />
          <button type="submit">Add Star</button>
        </form>
      </div>
    );
  }
}

export default App;
