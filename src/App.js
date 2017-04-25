import React, {Component} from 'react';
import "./App.css"
import {FormGroup, InputGroup, FormControl, Glyphicon} from 'react-bootstrap';

class App extends Component{
    
	constructor(props){
	    super(props);
		this.state = {
		    query : ''
			
		}
	}
	
	search(){
	    console.log(this.state.query);
		const BASE_URL = 'https://api.spotify.com/v1/search?'
	    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
		console.log(FETCH_URL);
	}

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
						   onChange={event => this.setState({query : event.target.value})}
						   onKeyPress={
						       event =>{
						           if( event.key === "Enter"){
								       this.search();
								   }
						       }
						   
						   }
                        />
                        <InputGroup.Addon onClick={()=>this.search()}>
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
