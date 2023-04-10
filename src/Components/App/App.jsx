import "./App.css";
import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

// function App() {

//   return (
//     <div>
//       <h1>
//         Ja<span className="highlight">mmm</span>ing
//       </h1>
//       <div className="App">
//         <SearchBar />
//         <div className="App-playlist">
//           <SearchResults />
//           <Playlist />
//         </div>
//       </div>
//     </div>
//   );
// }

export default class App extends Component {
  constructor(props) {
    super(props);
    (this.state = {
      searchResults: [
        {
          id: 1,
          name: "Califonia gangster",
          artist: "Sean Combs",
          album: "Back to life",
          uri: "spotify:track:1",
        },
        {
          id: 2,
          name: "Damiduro",
          artist: "Davido",
          album: "Easy life",
          uri: "spotify:track:2",
        },
        {
          id: 17,
          name: "Califonia gangster",
          artist: "Nelly Futardo",
          album: "Back to life",
          uri: "spotify:track:3",
        },
        {
          id: 18,
          name: "City of fun",
          artist: "Sean Combs",
          album: "Back to life",
          uri: "spotify:track:4",
        },
        {
          id: 27,
          name: "Califonia gangster",
          artist: "James Brown",
          album: "Back to life",
          uri: "spotify:track:5",
        },
        {
          id: 35,
          name: "Califonia gangster",
          artist: "Sean Combs",
          album: "Back to life",
          uri: "spotify:track:6",
        },
      ],
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
    console.log(term);
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

// export default App;
