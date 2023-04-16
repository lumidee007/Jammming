let accessToken = "";
const client_id = "515afab75355481fb08e078df7f3a36a";
const redirect_uri = "http://localhost:5173/";
const redirectUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      console.log(`accessToken`, accessToken);
      return accessToken;
    } else {
      window.location = redirectUrl;
    }
  },
  async search(term) {
    accessToken = Spotify.getAccessToken();
    console.log(`accessToken`, accessToken);
    let urlEndPoint = `https://api.spotify.com/v1/search?type=track&q=${term}`;

    try {
      let response = await fetch(urlEndPoint, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response.ok) {
        let termResults = await response.json();
        if (!response.ok) return [];
        return termResults.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  },

  // Save playlist to Spotify account.
  async savePlaylist(name, trackURIs) {
    if (!name || !trackURIs) {
      return;
    }
    let userID = "";
    let accessToken = Spotify.getAccessToken();
    let url = `https://api.spotify.com/v1/me`; //GET current user’s ID
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    let playlist_id = "";
    try {
      let res = await fetch(url, { headers: headers });
      if (res.ok) {
        let userResult = await res.json();
        userID = userResult.id;
        try {
          let playlistResponse = await fetch(
            `https://api.spotify.com/v1/users/${userID}/playlists`,
            {
              headers: headers,
              method: "POST",
              body: JSON.stringify({ name: name }),
            }
          );
          if (playlistResponse.ok) {
            let playlistResult = await playlistResponse.json();
            playlist_id = playlistResult.id;
            let res = await fetch(
              `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
              {
                headers: headers,
                method: "POST",
                body: JSON.stringify({ uris: trackURIs }),
              }
            );
            return res;
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (e) {
      console.log(e);
    }
  },
};

export default Spotify;
