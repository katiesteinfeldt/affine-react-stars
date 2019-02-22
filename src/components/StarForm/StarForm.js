import React, { Component } from 'react';


class StarForm extends Component {
    state = {
        newStar: {
            name: '',
            diameter: '',
        },
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

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addStar(this.state.newStar);
        this.setState({
            newStar: {
                name:'',
                diameter:'',
            }
        })
    }

    render() {

        return (
            <>
            <h3>{this.state.newStar.name} is {this.state.newStar.diameter} km in diameter</h3>
            <form onSubmit={ this.handleSubmit }>
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
            </>
        )
    }
}

export default StarForm;

