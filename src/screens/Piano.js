import React from 'react';
import styled from 'styled-components';
import PianoContainer  from '../components/PianoContainer';


const ScreenWrapper = styled.div`    
    height: 500px;
`;

const PianoScreen = () =>
    <ScreenWrapper>        
        <PianoContainer/>
    </ScreenWrapper>

export default PianoScreen;