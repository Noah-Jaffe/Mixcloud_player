# Mixcloud_player
This is a simplified usage for a custom built, light(er) weight mixcloud playlist player.
Due to the Embedded mixcloud player being limited to only loading 19 songs from any specific playlist, I made this to bypass that issue by the following:
 - dynamically generate your own playlist
 - dynamically get the audio source urls for the song to be played
 - set the source to this hidden audio source url and play!


## How to use: 
- override function update_playlist_songs so that you populate PLAYLIST_SONGS with names and source keys to match the follow json pattern:
```js
PLAYLIST_SONGS = [
 {
  name: "<song name>", 
  key:  "<mixcloud key>"
 },
 ...
]; 
```
#### Alternative to overriding PLAYLIST_SONGS:
You can just update the [custom.js](custom.js) file if you want to reuse my mixcloud source, but customize your search. 

Opening the file in a webbrowser will load all the songs into a playlist, then start on a random song.  

I have supplied a .bat file that you can use to open the html file in ms edge inprivate (for lower memory usage bc no extentions and whatnot). 

---------------
## Feature: **Custom playlist** _(via Mixcloud)_
In [custom.js](custom.js), you can edit the `CUSTOM_PLAYLISTS_TO_LOAD`, `INDIVIDUAL_TRACKS_TO_LOAD`, and `BAN_LIST` arrays to customize your available playlists.
```js
var CUSTOM_PLAYLISTS_TO_LOAD = [
    { 
        mixcloud_search_key: <(string) MIXCLOUD SEARCH KEY>, 
        mixcloud_match_regex: <(string | RegExp) FILTER SEARCH RESULTS FOR MATCHING SONG NAME BY REGEX>, 
        name_to_replace: <(string | RegExp) FORMAT DISPLAY NAME WITH REGEX/STRING MATCHING>, 
        name_replace_with: <(string) REPLACE FORMAT DISPLAY NAME>
    },
    ...
]
```
```js
var INDIVIDUAL_TRACKS_TO_LOAD = [
    { 
        name: <(string) DISPLAY NAME>, 
        key: <(string) MIXCLOUD KEY> 
    },
    ...
]
```
```js
var BAN_LIST = [
    <(string) MIXCLOUD KEY>,
    ...
]
```

---------------

## Feature: **Screen wake lock**
On devices that have this feature (mobile/tablet/etc) a slide toggle will appear in the main button bar. 

Turning this on will allow you to prevent the screen from sleeping while the webpage is the foremost screen.

*Note: Screen wake lock is a tad finicky, it will attempt to retry to aquire the wake lock if you accidentally release it (automatic by tabbing out, turning off screen, etc). Sometimes if you attempt to disable the lock manually it won't actually release unless you tab out*

---------------

## Feature: **GESTURES** 

- LEFT: restart song
- UP: toggle shuffle/sequential
- RIGHT: skip
- DOWN: skip (might get overridden by the pulldown to refresh on some mobile browsers)

enable the gestures by navigating to any `?...` or `#...` endpoint after your url:

**No gestures**: [`https://raw.githack.com/Noah-Jaffe/Mixcloud_player/main/MUSICPLAYER.html`](https://raw.githack.com/Noah-Jaffe/Mixcloud_player/main/MUSICPLAYER.html)

**Gestures enabled**: [`https://raw.githack.com/Noah-Jaffe/Mixcloud_player/main/MUSICPLAYER.html?`](https://raw.githack.com/Noah-Jaffe/Mixcloud_player/main/MUSICPLAYER.html?)

**Gestures enabled**: [`https://raw.githack.com/Noah-Jaffe/Mixcloud_player/main/MUSICPLAYER.html#`](https://raw.githack.com/Noah-Jaffe/Mixcloud_player/main/MUSICPLAYER.html#)


Recommend that mobile devices save a link to the playerwith a `?` or `#` in the URL so that you can use a relatively more "handsfree" mode. 


---------------

## Feature: **Persistent data storage**

Checkbox at the bottom of the page to enable persistent storage of the loaded playlist, and the song source urls.

I reccomend keeping this checked.

