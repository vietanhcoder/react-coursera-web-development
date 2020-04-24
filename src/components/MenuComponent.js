import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

import DishDetail from "./DishdetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: {},
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  componentDidMount() {
    console.log("Menu component didmount is invoked");
  }

  renderMenu() {
    return this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 m-5 col-md-5">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
  }

  render() {
    const { selectedDish } = this.state;
    return (
      <div className="container">
        <div className="row">{this.renderMenu()}</div>
        <div className="row">
          {Object.keys(selectedDish).length > 0 && (
            <DishDetail dish={selectedDish} />
          )}
        </div>
      </div>
    );
  }
}

export default Menu;
