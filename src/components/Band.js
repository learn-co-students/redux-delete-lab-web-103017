import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    });
  }

  render() {
    console.log("new band", this.props.id);
    return(
      <div>
        <li>
          {this.props.band.text}
          <button onClick={this.handleClick}/>
        </li>
      </div>
    );
  }
};

export default Band;
