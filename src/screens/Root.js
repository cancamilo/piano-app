import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PianoScreen from './Piano';
import SongListScreen from './SongsList';

const ScreenRoot = () => 
    <BrowserRouter>
        <Switch>
            <Route path="/" component={PianoScreen}/>
            <Route path="/list" component={SongListScreen}/>
            <Route path="/about" render={() => "About this app!"}/>
        </Switch>
    </BrowserRouter>

export default ScreenRoot;
