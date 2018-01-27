import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {

    const bands = this.props.store.getState().bands.map((band, index) => {
    return <Band band={band} key={index} store={this.props.store}/>
  });

    console.log('Bands Props', this.props.store.getState().bands);
    console.log('Band Object', bands);
    return(
        <ul>
          {bands}
        </ul>
    );
  }
};

export default Bands;
