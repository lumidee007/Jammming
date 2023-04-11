import "./App.css";
import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";
import Spotify from "../../util/Spotify";

export default class App extends Component {
  constructor(props) {
    super(props);
    (this.state = {
      searchResults: [],
      playlistName: "Def Jamz",
      playlistTracks: [],
    }),
      (this.addTrack = this.addTrack.bind(this)),
      (this.removeTrack = this.removeTrack.bind(this)),
      (this.updatePlaylistName = this.updatePlaylistName.bind(this)),
      (this.savePlaylist = this.savePlaylist.bind(this)),
      (this.search = this.search.bind(this));
  }

  addTrack(track) {
    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    } else {
      const newPlaylist = [...this.state.playlistTracks, track];
      this.setState({ playlistTracks: newPlaylist });
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
    console.log(trackURIs);
    console.log("Its working");
  }

  search(term) {
    Spotify.search(term).then((result) => {
      this.setState({ searchResults: result });
    });
    console.log("Searching for", term);
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              addTrack={this.addTrack}
            />
            <PlayList
              playlistTracks={this.state.playlistTracks}
              playlistName={this.state.playlistName}
              removeTrack={this.removeTrack}
              updatePlaylistName={this.updatePlaylistName}
              savePlaylist={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}
