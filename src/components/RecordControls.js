import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import ControlsGrid from './UI/ControlsGrid';
import {Hseparator} from './UI/Separators';

const RecordControls = (props) =>        
    <ControlsGrid>                
        <Button 
            bsStyle='primary' 
            bsSize='large' 
            onClick={props.recordHandler}>
            Start 
        </Button>
        <Hseparator/>
        <Button 
            bsStyle='info'    
            bsSize='large' 
            onClick={props.stopHandler}
            disabled={!props.isRecording}>
                Stop
        </Button>          
        <Hseparator/>                              
        <Link to='/list'>        
            <Button 
                bsStyle='warning'    
                bsSize='large'>
                Saved Songs
            </Button>          
        </Link>                                         
    </ControlsGrid>
        

export default RecordControls;