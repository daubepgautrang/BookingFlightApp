import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import './components/style.css';
import Home from './components/home';
import ticket from './components/ticket';
function App() {
  return (
    <Router>
      <body>
        <div className="container">
            <Navbar></Navbar>
            <Route path = "/" exact component= {Home} ></Route>
            <Route path = "/search" exact component = {ticket}></Route>
        </div>
      </body>
    </Router>
    
  );
}

export default App;
