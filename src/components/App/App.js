import React, { Component } from 'react';
import Description from '../Description/Description';
import StarList from '../StarList/StarList';
import StarForm from '../StarForm/StarForm';

class App extends Component {
  state = {
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

  // handleSubmit = (newStar) => (event) => {
  //   event.preventDefault();
  //   console.log('button clicked');
  //   this.setState({
  //     newStar: {
  //       name: '',
  //       diameter: '',
  //     },
  //     starList: [...this.state.starList, newStar],
  //   })
  // }

  addStar = (newStar) => {
    console.log('button clicked');
    this.setState({
      starList: [...this.state.starList, newStar],
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


  render() {

    // for (let i = 0; i < this.state.starList.length; i++) {
    //   const star = this.state.starList[i];
    // starsForShow.push(<li>{star}</li>);
    // }

    // const starsForShow = this.state.starList.map(star => <li>{star}</li>);

    return (
      <div>
        <Description />
        <StarForm addStar={this.addStar} />
        <StarList list={this.state.starList} /> {/* list is a keyword describing what the prop is */}
      </div>
    );
  }
}

export default App;
