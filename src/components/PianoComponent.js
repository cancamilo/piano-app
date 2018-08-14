import React, {Component} from 'react';
import PianoSequence from './PianoSequence';
import styled from 'styled-components';

const PianoWrapper = styled.div`    
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60%;    
`;

const PianoComponent = (props) => 
    <PianoWrapper>        
        <PianoSequence position={2} pianoKeyHandler={props.pianoKeyHandler}/>    
        <PianoSequence position={3} pianoKeyHandler={props.pianoKeyHandler}/>  
        <PianoSequence position={4} pianoKeyHandler={props.pianoKeyHandler}/>  
    </PianoWrapper>

export default PianoComponent;