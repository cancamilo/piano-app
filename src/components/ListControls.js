import React, { Component } from 'react';
import {Button, ButtonToolbar, Label} from 'react-bootstrap';
import {Vseparator} from './UI/Separators';

const ListControls = (props) => 
    <div>
        <Vseparator/>
        <h3>
            <Label>{props.selectedSong}</Label>
        </h3>
        <Vseparator/>
        <ButtonToolbar>
            <Button 
                bsStyle='success' 
                onClick={props.playHandler}
                disabled={props.selectedSong.length < 1}>
                Play
            </Button>
            <Button 
                bsStyle='danger'
                onClick={props.stopHandler}>
                Stop
            </Button>
        </ButtonToolbar>
    </div>

export default ListControls;