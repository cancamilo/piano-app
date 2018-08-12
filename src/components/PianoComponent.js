import React, {Component} from 'react';
import PianoSequence from './PianoSequence';
import styled from 'styled-components';

const PianoWrapper = styled.div`
    border: 5px solid blue;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const PianoComponent = () => 
    <PianoWrapper>        
        <PianoSequence position={1}/>    
        <PianoSequence position={2}/>    
    </PianoWrapper>

export default PianoComponent;