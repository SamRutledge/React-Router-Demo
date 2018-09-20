import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="App"> 

         <Link to="/candidate">
           <button>
              Candidate Page
           </button>
         </Link>
         
         <br />

        <Link to="/about">
          <button>
            About page
          </button>
        </Link>
        
      </div>
    );
  }
}

export default Home;
