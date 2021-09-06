import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import React ,{ Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './auth0_components/LoginButton';
import BestBooks from './components/BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Profile from './auth0_components/Profile'
import FavoriteBooks from './components/FavoriteBooks'
import axios from 'axios'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      books:[],
      favBooks:[],
    }
  }
  getBooksByName=async (event)=>{
    event.preventDefault();
    let bookName=event.target.bookName.value
    console.log(bookName);
    console.log(process.env.REACT_APP_SERVER);
    let books=await axios.get(`${process.env.REACT_APP_SERVER}/books?bookName=${bookName}`)
     await this.setState({
      books:books.data
    })
    console.log(this.state.books);
  }
  addToMyFavorite=async(book)=>{
    let email=this.props.auth0.user.email
    book.email=email;
    let favBooks=await axios.post(`${process.env.REACT_APP_SERVER}/books`,book)
    this.setState({
      favBooks:favBooks.data,
    })
  }

  render(){
    const {isAuthenticated} = this.props.auth0;
    return (
      <div className="App">
      <BrowserRouter>
      <Header/>
          <Switch>    
            <Route exact path='/'>{isAuthenticated ? <BestBooks books={this.state.books} getBooksByName={this.getBooksByName} addToMyFavorite={this.addToMyFavorite}/> : <LoginButton/>}</Route>
            <Route exact path ='/profile'> <Profile/> </Route>
            <Route exact path='/fav'><FavoriteBooks favBooks={this.state.favBooks} /></Route>
          </Switch>
      </BrowserRouter>
      </div>
  );
}
}

export default withAuth0(App);
