import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import PianoScreen from './Piano';
import SongsListScreen from './SongsList';

const ScreenRoot = () => 
    <BrowserRouter>
        <Home>
            <Switch>
                <Route exact path="/" component={PianoScreen}/>
                <Route exact path="/list" component={SongsListScreen}/>
                <Route exact path="/about" render={(props) => "About this app!"}/>
            </Switch>
        </Home>
    </BrowserRouter>

export default ScreenRoot;
