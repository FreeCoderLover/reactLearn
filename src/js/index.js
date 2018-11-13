import React from 'react';
import {render} from 'react-dom';
import App from './App.js';
import Clock from './Clock.js';
import Props from './Props.js';
import Event from './Event';
import Condition from './Condition'
import List from './List'

render( 
    <div>
        <App></App>
        <Clock date={new Date()}></Clock>
        <Props name="REACT HELLO!"></Props>
        <Event></Event>
        <Condition isIn={false} isShow={true}></Condition>
        <List></List>
    </div>,
    document.getElementById('app')
)
