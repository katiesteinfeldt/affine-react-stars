import React, { Component } from 'react';

class StarItem extends Component {


    render() {

        return (
            <li>
                {this.props.star.name} is {this.props.star.diameter}km in diameter
            </li>
        );
    }
}

export default StarItem;

