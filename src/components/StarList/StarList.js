import React, { Component } from 'react';
import StarItem from '../StarItem/StarItem';

class StarList extends Component {


    render() {

        return (
            <div>
                <ul>
                    {/* in this case, list is the keyword from the app.js to import the right item */}
                    {this.props.list.map(star => 
                       <StarItem key={star.name} star={star} />
                    )}
                </ul>
            </div>
        );
    }
}

export default StarList;

