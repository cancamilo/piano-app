import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomeFrame from './HomeFrame';
import PianoScreen from './Piano';
import SongsListScreen from './SongsList';


const ScreenRoot = () => 
    <BrowserRouter>
        <HomeFrame>
            <Switch>
                <Route exact path="/" component={PianoScreen}/>
                <Route exact path="/list" component={SongsListScreen}/>
                <Route exact path="/about" render={(props) => "About this app!"}/>
            </Switch>
        </HomeFrame>
    </BrowserRouter>

export default ScreenRoot;
