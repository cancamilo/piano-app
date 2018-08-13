import React, { Component } from 'react'
import SongsListComponent from './SongsListComponent';
import ListControls from './ListControls';

export default class SonsgListContainer extends Component {
  state = {
    loadedSongs : [],
    selectedIdx : -1,
    selectedSong: "empty"
  }

  constructor(props) {
    super(props);
    this.onSongSelected = this.onSongSelected.bind(this);
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

  render() {
    return (
      <div>
          <SongsListComponent 
              savedSongs = {this.state.loadedSongs}
              selected = {this.state.selectedIdx}
              selectionHandler = {this.onSongSelected}
          />
          <ListControls             
            selectedSong={this.state.selectedSong}
          />
      </div>
    )
  }
}
