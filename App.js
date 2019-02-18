import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import styles from './App.css'
import game from "./Components/game"

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
          
    }
    //this.=this..bind(this)
  }

  
 
  
  render() {
    const { data } = this.state
    const { props } = this.props

      return( 
        
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={game} exact/>
                
                
            </Switch>
          </div>
        </BrowserRouter>
        

      );

  }
}
export default App;