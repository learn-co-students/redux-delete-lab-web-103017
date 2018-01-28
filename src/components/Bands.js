import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
    console.log(this.props.store.getState().bands)
    return(
      <ul>
        {this.props.store.getState().bands.map((band, i) => <Band store={this.props.store} key={i} id={band.id} band={band}/>)}
      </ul>
    );
  }
};

export default Bands;
