import React, { Component } from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Relationships from './components/Relationships/Relationships';
import Requirements from './components/Requirements/Requirements';
import UsersList from './components/Users/UsersList/UsersList';
// import SignUp from './components/SignUp/SignUp';
import Form from './components/SignUp/Form';
import Footer from './components/Footer/Footer';

export default class App extends Component {

  render() {
    return (
    	<div>
        <Header/>
    		<Banner/>
    		<About/>
        <Relationships/>
        <Requirements/>
        <UsersList />
      {/*<SignUp />*/}
        <Form/>
        <Footer/>
    	</div>
      )
  }
}
