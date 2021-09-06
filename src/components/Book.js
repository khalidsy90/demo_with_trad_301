import React, { Component } from 'react'
import {Button, Card, Col} from 'react-bootstrap'

export class Book extends Component {

    render() {
        return (
            <Col>
            <Card>
                <Card.Img variant="top" src={this.props.item.image} />
                <Card.Body>
                <Card.Title>Title : {this.props.item.title}</Card.Title>
                <Card.Text>{this.props.item.subtitle}</Card.Text>
                <Card.Text>Price : {this.props.item.price}</Card.Text>
                <Button onClick={()=>this.props.addToMyFavorite(this.props.item)}>Add to favorite</Button>
                </Card.Body>
            </Card>
            </Col>
        )
    }
}

export default Book
