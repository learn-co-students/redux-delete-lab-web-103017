import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    console.log('deleting');
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id,
    })
  }

  render() {
    console.log('Band Props', this.props.band.text);
    return(
      <div>
        <li>{this.props.band.text}<button onClick={this.handleOnClick}>x</button></li>

      </div>
    );
  }
};

export default Band;
