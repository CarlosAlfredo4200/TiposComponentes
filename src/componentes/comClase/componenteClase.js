/*Se importa react y react-component*/

import React from 'react';
import { Component } from 'react';
import PokCard from '../ComFuncionales/comFuncional';

class PokApp extends Component {    
    state = {};
    constructor(props) {
        super(props);
        this.state = {  }
    }
    /*Siempre llevan render que retornan algo */
    render() { 
        return (      
            <div className="title">

                <PokCard   name = "Cosa"/>
            </div> 
        );
    }
}
export default PokApp;