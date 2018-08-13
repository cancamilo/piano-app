import React, {Component} from 'react';
import './Piano.css'
import styled from 'styled-components';

export const PianoKey = styled.li`
    margin: 0;
    padding: 0;
    border-radius: 5px;
    position: relative;
    float: left;    
    transform: translateY(0px);
`;

export const BlackKey = PianoKey.extend`
    width: 30px;
    height: 100px;
    background: black;
    margin-left: -15px;
    z-index: 100;      
    box-shadow: 2px 5px 0px 0px rgb(70,70,70);
    transition: all 0.2s;
    &:active {
        box-shadow: 2px 1px 1px 0px;
        transform: translateY(2px);
    };
`;

export const WhiteKey = PianoKey.extend`
    width: 50px;
    height: 200px;
    background: white;
    border: solid 1px grey;    
    box-shadow: 2px 5px 0px 0px rgb(40,40,40);
    transition: all 0.2s;
    &:hover {
        background: rgb(230,230,230);
    }
    &:active {
        box-shadow: 2px 1px 1px 0px;
        transform: translateY(3px);
    };
    margin-left: ${ (props) => props.join? '0px' : '-15px'}
`;