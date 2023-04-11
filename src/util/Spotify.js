let accessToken = "";
const client_id = "515afab75355481fb08e078df7f3a36a";
const redirect_uri = "http://localhost:5174/";
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
      console.log(accessToken);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      window.location = redirectUrl;
    }
  },
  async search(term) {
    accessToken = Spotify.getAccessToken();
    let urlEndPoint = `https://api.spotify.com/v1/search?type=track&q=${term}`;

    try {
      let response = await fetch(urlEndPoint, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response.ok) {
        let termResults = await response.json();
        console.log(termResults);
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
};

export default Spotify;
