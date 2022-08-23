# Mixcloud_player
This is a simplified usage for a custom built, light(er) weight mixcloud playlist player.
Due to the Embedded mixcloud player being limited to only loading 19 songs from any specific playlist, I made this to bypass that issue by the following:


## How to use: 
- In MIXCLOUD.com: create a bunch of playlists that are up to 19 songs long.  
- IN MUSICPLAYER.html -> function setup_doc -> const playlist_src_queue -> This variable will pull out all playlists under the given playlist api url. (Replace "noah-jaffe" with your own mixcloud account name).


Opening the file in a webbrowser will load all the playlists from that user. Then it will start on a random playlist. Chosing one of the playlists from the dropdown will load in that new playlist into the embedded player. 

I have supplied a .bat file that you can use to open the html file in ms edge inprivate (for lower memory usage bc no extentions and whatnot). 
