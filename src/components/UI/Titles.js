import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

const glowAnimation = keyframes`
    from {
        color: rgb(0, 0, 0);        
    }
    to {
        color: red;        
    }
`;

const Title = styled.h3`
    color: rgb(0, 0, 50);    
    text-align: center;    
    animation ${props => props.isRecording? glowAnimation + ' 2s linear infinite' : 'none'};
`;

export default Title;