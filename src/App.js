import React,{ Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Index from './components/index';

class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path='/Contact' component={Contact} />
      </BrowserRouter>
    );
  }
}

export default App;
