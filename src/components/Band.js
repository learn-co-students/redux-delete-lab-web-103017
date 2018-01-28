import React, { Component } from 'react';

class Band extends Component {

  handleDelete = () => {
    this.props.store.dispatch({type: "DELETE_BAND", id: this.props.band.id})
  }

  render() {
      console.log("in band", this.props)
    return(
      <div>
        <li>NAme: {this.props.band.text}</li>
        <button onClick={this.handleDelete}>Delete</button>
        <br />
      </div>
    );
  }
};

export default Band;
