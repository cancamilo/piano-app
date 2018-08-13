import React, { Component } from 'react'
import SongsListComponent from './SongsListComponent';
import ListControls from './ListControls';
import SongPlayer from '../common/SongPlayer';

const player = new SongPlayer();

export default class SonsgListContainer extends Component {
  state = {
    loadedSongs : [],
    selectedIdx : -1,
    selectedSong: ''
  }

  constructor(props) {
    super(props);
    this.onSongSelected = this.onSongSelected.bind(this);
    this.onPlaySelected = this.onPlaySelected.bind(this);
    this.onStopSelected = this.onStopSelected.bind(this);
  }

  componentDidMount() {
    const songs = [];
    for(var i = 0; i < localStorage.length; i ++) {
      songs.push(localStorage.key(i));
    }
    this.setState({loadedSongs: songs})
    console.log(songs);
  }

  onSongSelected(idx) {
    this.setState({
      selectedIdx: idx,
      selectedSong: this.state.loadedSongs[idx]
    });
  }

  onPlaySelected() {
    const data = JSON.parse(localStorage.getItem(this.state.selectedSong));
    player.startSequence(data);
  }

  onStopSelected() {
    player.stopSequence();
  }

  render() {
    return (
      <div>
          <SongsListComponent 
              savedSongs = {this.state.loadedSongs}
              selected = {this.state.selectedIdx}
              selectionHandler = {this.onSongSelected}
          />
          <ListControls             
            playHandler = {this.onPlaySelected}
            stopHandler = {this.onStopSelected}
            selectedSong={this.state.selectedSong}
          />
      </div>
    )
  }
}
