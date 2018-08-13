import {BlackKey, WhiteKey}  from './PainoParts';
import React, {Component} from 'react';

const loadSounds = () => {
    const cachedSounds = {};
    var imports = require.context('../piano-sounds', true, /\.mp3$/);    
    imports.keys().forEach( key => cachedSounds[key] = imports(key));    
    return cachedSounds;  
}

class KeyControl extends Component {
    constructor(props) {
        super(props);
        this.onTouchkey = this.onTouchkey.bind(this);
        this.sounds = loadSounds();
    }

    onTouchkey(e) {
        const keyString = `./${this.props.keyId}.mp3`
        const audio = this.sounds[keyString];
        new Audio(audio).play();
        this.props.pianoKeyHandler(keyString);
    }

    render() {
        const {type, join} = this.props;
        if(type === 'black') {
            return  <BlackKey onMouseDown={this.onTouchkey}/>
        }
        else {
            return  <WhiteKey onMouseDown={this.onTouchkey} join={join}/>
        }
    }
} 

export default KeyControl;