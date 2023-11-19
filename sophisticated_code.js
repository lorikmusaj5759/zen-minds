/* filename: sophisticated_code.js */

// This code demonstrates a sophisticated and elaborate implementation of a music library system
// It allows users to add, remove, and search for songs, as well as create and manage playlists

class Song {
  constructor(id, title, artist, duration) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }

  play() {
    console.log(`Now playing ${this.title} by ${this.artist}`);
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong(songId) {
    this.songs = this.songs.filter((song) => song.id !== songId);
  }

  playAll() {
    console.log(`Playing all songs in playlist "${this.name}"`);
    this.songs.forEach((song) => song.play());
  }
}

class MusicLibrary {
  constructor(name) {
    this.name = name;
    this.songs = [];
    this.playlists = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong(songId) {
    this.songs = this.songs.filter((song) => song.id !== songId);
  }

  createPlaylist(name) {
    const playlist = new Playlist(name);
    this.playlists.push(playlist);
    return playlist;
  }

  removePlaylist(playlistName) {
    this.playlists = this.playlists.filter((playlist) => playlist.name !== playlistName);
  }

  searchSongs(keyword) {
    console.log(`Searching for songs matching "${keyword}"`);
    const matchedSongs = this.songs.filter((song) => {
      return song.title.toLowerCase().includes(keyword.toLowerCase()) || song.artist.toLowerCase().includes(keyword.toLowerCase());
    });
    matchedSongs.forEach((song) => console.log(`${song.title} by ${song.artist}`));
  }

  searchPlaylists(keyword) {
    console.log(`Searching for playlists matching "${keyword}"`);
    const matchedPlaylists = this.playlists.filter((playlist) => playlist.name.toLowerCase().includes(keyword.toLowerCase()));
    matchedPlaylists.forEach((playlist) => console.log(playlist.name));
  }
}

// Usage example:

// Create a music library
const myMusicLibrary = new MusicLibrary("My Music Library");

// Add songs to the music library
myMusicLibrary.addSong(new Song(1, "Song 1", "Artist 1", 180));
myMusicLibrary.addSong(new Song(2, "Song 2", "Artist 2", 220));
myMusicLibrary.addSong(new Song(3, "Song 3", "Artist 1", 200));
myMusicLibrary.addSong(new Song(4, "Song 4", "Artist 3", 240));

// Create a playlist
const playlist1 = myMusicLibrary.createPlaylist("Playlist 1");
const playlist2 = myMusicLibrary.createPlaylist("Playlist 2");

// Add songs to the playlist
playlist1.addSong(new Song(1, "Song 1", "Artist 1", 180));
playlist1.addSong(new Song(2, "Song 2", "Artist 2", 220));
playlist2.addSong(new Song(3, "Song 3", "Artist 1", 200));
playlist2.addSong(new Song(4, "Song 4", "Artist 3", 240));

// Play all songs in the playlist
playlist1.playAll();

// Remove a song from the playlist
playlist1.removeSong(1);

// Search for songs in the music library
myMusicLibrary.searchSongs("song");

// Search for playlists in the music library
myMusicLibrary.searchPlaylists("list")