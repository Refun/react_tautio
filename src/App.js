import React, { Component } from 'react';
import Toggle from './Toggle'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Category from './components/Category'
import PostDetails from './components/PostDetails'
import PostDetails2 from './components/PostDetails2'
import './components/css/style.css'




class App extends Component {
  render() {
    return <div>
     <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/postdetails" component={PostDetails} />
          <Route path="/postdetails2" component={PostDetails2} />
        </div>
      </Router>
     </div>; 
  }
}

export default App;
