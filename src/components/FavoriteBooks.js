import React, { Component } from 'react'
import {Row} from 'react-bootstrap'
import FavBook from './FavBook'
import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';
import ModalUpdate from './ModalUpdate'
class FavoriteBooks extends Component {
    constructor(props){
        super(props);
        this.state={
            favBooks:this.props.favBooks,
            show:false,
            selectedBook:{}
        }
    }
    async componentDidMount(){
        console.log(' ',this.props.auth0.user.email);
        let favBooks= await axios.get(`${process.env.REACT_APP_SERVER}/favbooks?email=${this.props.auth0.user.email}`)
        
        this.state.favBooks.length === 0 && this.setState({favBooks:favBooks.data});
      }
    delBook=async(bookid)=>{
        let email=this.props.auth0.user.email
        let del=await axios.delete(`${process.env.REACT_APP_SERVER}/books/${bookid}/${email}`)
        this.setState({
            favBooks:del.data,
        })

    }
    showUpdateModal=(item)=>{
        this.setState({
            show:true,
            selectedBook:item
        })

    }
    closeModal=()=>{
        this.setState({
            show:false,
        })
    }
    updateBook=async(event)=>{
        event.preventDefault();
        let info={
            title:event.target.title.value,
            subtitle:event.target.subtitle.value,
            price:event.target.price.value,
            image:event.target.image.value,
            email:this.props.auth0.user.email
        }
        
        let updateOne=await axios.put(`${process.env.REACT_APP_SERVER}/books/${this.state.selectedBook._id}`,info)
        this.setState({
            favBooks:updateOne.data,
            show:false
        })
    }

    render() {
        return (
            <>
            <ModalUpdate show={this.state.show} selectedBook={this.state.selectedBook} closeModal={this.closeModal} updateBook={this.updateBook}/>
            <Row xs={1} md={2} className="g-4">
            {
               this.state.favBooks.map((item,idx) =>{
                return <FavBook item={item} key={idx} delBook={this.delBook} showUpdateModal={this.showUpdateModal}/>
               })
            }
            </Row>
            </>
        )
    }
}

export default withAuth0(FavoriteBooks)
