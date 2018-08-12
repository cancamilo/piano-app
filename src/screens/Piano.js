import React from 'react';
import styled from 'styled-components';
import PianoComponent  from '../components/PianoComponent';

const ScreenWrapper = styled.div`
    background: rgb(200,200,200);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: auto;
    border: 1px solid pink;        
`;

// TODO: should have other elements such as buttons to start recording

const PianoScreen = () =>
    <ScreenWrapper>        
        <div>Welcome!</div>
        <PianoComponent/>        
        <div>record button</div>
        <div>stop button</div>
    </ScreenWrapper>

export default PianoScreen;