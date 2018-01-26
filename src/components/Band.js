import React, { Component } from "react";

class Band extends Component {
  constructor(props) {
    super(props);
    console.log("Band props", this.props.band);
  }
  handleDelete = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: "DELETE_BAND",
      id: this.props.band.id
    });
  };
  render() {
    return (
      <li>
        {this.props.band.text}
        <button onClick={this.handleDelete} />
      </li>
    );
  }
}

export default Band;
