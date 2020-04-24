import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Col } from "reactstrap";

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

  // componentDidMount() {
  //   console.log("Menu component didmount is invoked");
  // }

  renderComments() {
    const { selectedDish } = this.state;
    return (
      <>
        {Object.keys(selectedDish).length > 0 ? (
          <div>
            <h4>Comments</h4>
            {selectedDish.comments.map((comment) => {
              return (
                <ul className="list-unstyled">
                  <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                      --{comment.author}, {comment.date}
                    </p>
                  </li>
                </ul>
              );
            })}
          </div>
        ) : null}
      </>
    );
  }

  renderMenu() {
    return this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-md-5 col-sm-12 m-1">
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
    console.log(selectedDish);
    return (
      <div className="container">
        <div className="row">{this.renderMenu()}</div>
        <div className="row">
          <Col className="col-md-5 col-sm-12 m-1">
            {Object.keys(selectedDish).length > 0 && (
              <DishDetail dish={selectedDish} />
            )}
          </Col>
          <Col className="col-md-5 col-sm-12 m-1">
            {Object.keys(selectedDish).length > 0 && (
              <div>{this.renderComments()}</div>
            )}
          </Col>
        </div>
      </div>
    );
  }
}

export default Menu;
