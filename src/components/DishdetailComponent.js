import React, { Component } from "react";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.props.dish}</p>
      </div>
    );
  }
}
export default DishDetail;
