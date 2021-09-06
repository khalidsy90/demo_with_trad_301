import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Books from "./Books";

export class BestBooks extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.getBooksByName}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Book Name plz" name='bookName'/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Books books={this.props.books} addToMyFavorite={this.props.addToMyFavorite}/>
      </div>
    );
  }
}

export default BestBooks;
