import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';

class Main extends Component {
  render() {
    return (
      
          
            <BrowserRouter> 
              <div>
                  <Header/>
                   
                    <Switch>
                          <Route path="/" component={Home} exact />
                          
                    </Switch>

                  <Footer/>
              </div>
            </BrowserRouter>      
     
        
      

    );
  }
}

export default Main;
