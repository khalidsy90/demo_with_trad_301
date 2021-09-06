import React, { Component } from 'react'
import {Card, Col, Button} from 'react-bootstrap'

export class FavBook extends Component {
    
    render() {
        return (
            <Col>
            <Card>
                <Card.Img variant="top" src={this.props.item.image} />
                <Card.Body>
                <Card.Title>Title : {this.props.item.title}</Card.Title>
                <Card.Text>{this.props.item.subtitle}</Card.Text>
                <Card.Text>Price : {this.props.item.price}</Card.Text>
                <Card.Text>Email : {this.props.item.email}</Card.Text>
                <Button onClick={()=>this.props.delBook(this.props.item._id)}>Delete</Button>
                <Button onClick={()=>this.props.showUpdateModal(this.props.item)}>Update</Button>
                </Card.Body>
            </Card>
            </Col>
        )
    }
}

export default FavBook
