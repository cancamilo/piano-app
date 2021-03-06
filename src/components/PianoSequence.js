import React, {Component} from 'react';
import './Piano.css'
import styled from 'styled-components';
import KeyControl from './KeyControl';

const rawSequence =  ['C', 'Db', 'D', 'Eb', 'E',  'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const keySequence =  
[{letter:'C',  type: 'white', join: true},
 {letter:'Db', type: 'black', join: false}, 
 {letter:'D',  type: 'white', join: false},
 {letter:'Eb', type: 'black', join: false}, 
 {letter:'E',  type: 'white', join: false}, 
 {letter:'F',  type: 'white', join: true},
 {letter:'Gb', type: 'black', join: false}, 
 {letter:'G',  type: 'white', join: false},
 {letter:'Ab', type: 'black', join: false}, 
 {letter:'A',  type: 'white', join: false},
 {letter:'Bb', type: 'black', join: false}, 
 {letter:'B',  type: 'white', join: false}
]

const parseProps = (item, index, position) => {

    let {letter, type, join} = item;    
    const keyId = `${letter}${position}`;
    return { keyId, type, join}
}

const SequenceWrapper =styled.ul`    
    position: relative;
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const PianoSequence = (props) => 
     <SequenceWrapper>        
            {keySequence.map((item, index) => 
                <KeyControl 
                    key={index}  
                    pianoKeyHandler={props.pianoKeyHandler}
                    {...parseProps(item, index, props.position)}/> 
            )}        
     </SequenceWrapper>     


export default PianoSequence;

