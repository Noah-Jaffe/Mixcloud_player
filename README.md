# Mixcloud_player
This is a simplified usage for a custom built, light(er) weight mixcloud playlist player.
Due to the Embedded mixcloud player being limited to only loading 19 songs from any specific playlist, I made this to bypass that issue by the following:
 - dynamically generate your own playlist
 - dynamically get the audio source urls for the song to be played
 - set the source to this hidden audio source url and play!


## How to use: 
- override function update_playlist_songs so that you populate PLAYLIST_SONGS with names and source keys to match the follow json pattern:
PLAYLIST_SONGS = [
  {name: "<song name>", key:"<mixcloud key>"},
  ...
];



Opening the file in a webbrowser will load all the songs into a playlist, then start on a random song.  

I have supplied a .bat file that you can use to open the html file in ms edge inprivate (for lower memory usage bc no extentions and whatnot). 
