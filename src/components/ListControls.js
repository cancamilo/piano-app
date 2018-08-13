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
            <Button bsStyle='success'>Play</Button>
            <Button bsStyle='danger'>Stop</Button>
        </ButtonToolbar>
    </div>

export default ListControls;