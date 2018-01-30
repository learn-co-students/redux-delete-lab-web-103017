import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const bands = this.props.store.getState().bands.map((band, i) => {
      return <Band band={band} key={i} store={this.props.store} />
    });

    return(
      <ul>
        {bands}
      </ul>
    );
  }
};

export default Bands;
