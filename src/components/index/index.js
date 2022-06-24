import React,{ Component } from 'react';
import Home from './../Home';
import Portfolio from './../portfolio';
import Profile from './../profile';
import Work from './../Work';
import Socail from './../SocialMedia';
import About from './../About';
import Footer from "../Footer";


class Index extends Component {
  render() { 
    return (
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <Socail />
        <Footer />
      </div>
    );
  }
}

export default Index;
