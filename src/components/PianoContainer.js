import React, {Component} from 'react';

import {withContext}   from './SongsProvider';
import VerticalGrid    from './UI/VerticalGrid'
import Title           from './UI/Titles';
import PianoComponent  from './PianoComponent';
import RecordControls  from './RecordControls';
import RecordModal     from './RecordModal';

class PianoContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRecording: false,
            pressedKeys: [],
            showModal: false
        }

        this.onStartRecording = this.onStartRecording.bind(this);
        this.onStopRecording  = this.onStopRecording.bind(this);
        this.onPianoKeyPressed = this.onPianoKeyPressed.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.onSongSaved  = this.onSongSaved.bind(this);
    }

    onStartRecording() {
        this.setState({isRecording: true});
    }

    onStopRecording() {
        if(this.state.isRecording) {
            this.setState({isRecording: false, showModal: true});
        }
    }

    onPianoKeyPressed(keyId) {
        if(this.state.isRecording) {
            const pressedKeys = [...this.state.pressedKeys];
            pressedKeys.push(keyId);
            this.setState({pressedKeys});
        }
    }

    onModalClose() {
        this.setState({showModal: false})
    }

    onSongSaved(songName) {
        localStorage.setItem(songName, JSON.stringify(this.state.pressedKeys));        
        this.setState({showModal: false, pressedKeys: []});
    }

    render() {
        const {isRecording} = this.state;
        const titleText = isRecording ? 'Recording!' : 'Welcome';

        return(             
            <VerticalGrid >
                <Title isRecording={isRecording}>{titleText}</Title>
                <RecordModal 
                    show={this.state.showModal}
                    handleSave={this.onSongSaved}
                    handleClose={this.onModalClose}/>
                <PianoComponent 
                    pianoKeyHandler={this.onPianoKeyPressed} />        
                <RecordControls  
                    isRecording={isRecording}
                    recordHandler={this.onStartRecording} 
                    stopHandler={this.onStopRecording}/>
            </VerticalGrid>
        )
    }
}

export default withContext(PianoContainer);