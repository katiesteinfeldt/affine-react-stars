import React, { Component } from 'react';
import Description from '../Description/Description';
import StarList from '../StarList/StarList';

class App extends Component {
  state = {
    newStar: {
      name: '',
      diameter: '',
    },
    starList: [
      {
        name: 'Antares',
        diameter: 123,
      },
      {
        name: 'Betelgeuse',
        diameter: 423,
      },
      {
        name: 'Rigel',
        diameter: 456,
      },
    ],
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
      newStar: {
      name: '',
      diameter: '',
      },
      starList: [...this.state.starList, this.state.newStar],
    })
  }

  render() {
    
    // for (let i = 0; i < this.state.starList.length; i++) {
    //   const star = this.state.starList[i];
    // starsForShow.push(<li>{star}</li>);
    // }

   // const starsForShow = this.state.starList.map(star => <li>{star}</li>);

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
       
       <StarList list={this.state.starList}/>
  {/* list is a keyword describing what the prop is */}

      </div>
    );
  }
}

export default App;
