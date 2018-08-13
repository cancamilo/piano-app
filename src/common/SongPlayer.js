const loadSounds = () => {
    const cachedSounds = {};
    var imports = require.context('../piano-sounds', true, /\.mp3$/);    
    imports.keys().forEach( key => cachedSounds[key] = imports(key));    
    return cachedSounds;  
}

const keySounds = loadSounds();

export default class SongPlayer {
    constructor(interval = 500) {
        this.index = 0;
        this.interval = interval;        
        this.currentAudio = {};
        this.ticker = {};       

        this.startSequence = this.startSequence.bind(this);
        this.stopSequence  = this.stopSequence.bind(this);
        this.playSong = this.playSong.bind(this);                
    }

    startSequence(keyArray) {

        this.keyArray = keyArray;
        this.ticker = setInterval(this.playSong, this.interval);
    }

    stopSequence() {
        clearInterval(this.ticker);
        this.currentAudio.pause();
        this.index = 0;
    }

    playSong() {
        if(this.index < this.keyArray.length) {

            const keyId = this.keyArray[this.index];            
            const audio = keySounds[keyId];
            this.currentAudio = new Audio(audio);
            this.currentAudio.play();
            this.index += 1;
        } else {
            clearInterval(this.ticker);
            this.index = 0;
        }
    }    
}