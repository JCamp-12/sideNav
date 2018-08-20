import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="sidenav">
          <div className="sidenav-header"> 
            <div className="sidenav-header-border">
              EAP Work in Progress
            </div>
          </div>
          <div className="sidenav-label">about</div>
          <div className="sidenav-label">Services</div>
          <div className="sidenav-label">Clients</div>
          <div className="sidenav-label">Contact</div>
          
        {/* <Button color="secondary">Test</Button> */}
        </div>

       


        <div class="main">
          ...
        </div>
      </div>
    );
  }
}

export default App;
