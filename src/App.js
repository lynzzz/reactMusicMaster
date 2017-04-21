import React, {Component} from 'react';
import "./App.css"
import {FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap';

class App extends Component{

    render(){
        return(
           <div className="App">
               <div className="App-title">
               Music title
               </div>
               <FormGroup>
                   <InputGroup>
                       <FormControl
                           type="text"
                           placeholder="search an artiest"
                        />
                        <InputGroup.Addon>
                           <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                   </InputGroup>

               </FormGroup>
               <div>
                  <div>name</div>
                  <div>pic</div>
               </div>

           </div>
        );
    }
}

export default App;
