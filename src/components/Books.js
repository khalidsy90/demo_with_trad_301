import React, { Component } from 'react'
import {Row} from 'react-bootstrap'
import Book from './Book'
export class Books extends Component {
    render() {
        return (
                <Row xs={1} md={2} className="g-4">
                    {
                        this.props.books.map((item,idx) =>
                        <Book item={item} key={idx} addToMyFavorite={this.props.addToMyFavorite}/>
                        )
                    }
                </Row>
        )
    }
}

export default Books
