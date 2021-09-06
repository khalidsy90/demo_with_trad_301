import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
export class ModalUpdate extends Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.closeModal}>

    

        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.props.updateBook}>
          <Form.Group className="mb-3" controlId="formBasictitle">
            <Form.Label>Title :</Form.Label>
            <Form.Control
              type="text"
              name="title"
              defaultValue={this.props.selectedBook.title}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicsubtitle">
            <Form.Label>subtitle :</Form.Label>
            <Form.Control
              type="text"
              name="subtitle"
             defaultValue={this.props.selectedBook.subtitle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicprice">
            <Form.Label>price :</Form.Label>
            <Form.Control
              type="text"
              name="price"
              defaultValue={this.props.selectedBook.price}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicimage">
            <Form.Label>Image URL :</Form.Label>
            <Form.Control
              type="text"
              name="image"
              defaultValue={this.props.selectedBook.image}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalUpdate;
