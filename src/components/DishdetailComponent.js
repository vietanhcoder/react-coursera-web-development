import React, { Component } from "react";

import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

class DishDetail extends Component {
  render() {
    const { dish } = this.props;
    return (
      <Card>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}
export default DishDetail;
