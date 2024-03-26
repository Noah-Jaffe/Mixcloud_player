// sample file, follow the patterns
var CUSTOM_PLAYLISTS_TO_LOAD = [
	// { mixcloud_search_key:<MIXCLOUD SEARCH KEY>, mixcloud_match_regex: <FILTER SEARCH RESULTS FOR MATCHING SONG NAME BY REGEX>, name_to_replace: <FORMAT DISPLAY NAME WITH REGEX/STRING MATCHING>, name_replace_with: <RE-FORMAT DISPLAY NAME>}
	{mixcloud_search_key:"rons%20podcast%20%23", mixcloud_match_regex:/RONS.*?Podcast.*?\d{3,4}/i, name_to_replace:/RONS:? Podcast #?(\w+)/gmi, name_replace_with:`RONS: Podcast #$1`},
	{mixcloud_search_key:"Liquid%20DnB%20Mix%20-%20Vol", mixcloud_match_regex:/Liquid DnB Mix - Vol 6[12469]/i, name_to_replace:" - ", name_replace_with:": "},
	{mixcloud_search_key:"Lys_InTheMix", mixcloud_match_regex:/^lys_$/gmi, name_to_replace:/lys[_-]{1,2}|^(?!.*?lys[_-]{1,2})/gmi, name_replace_with:"Lys: "},
	{mixcloud_search_key:"Frankie%203000", mixcloud_match_regex:/^FrankAndreasen$/gmi, name_to_replace:/^/gmi, name_replace_with:"Frankie 3000: "},
	{mixcloud_search_key:"djfrankiespodcast", mixcloud_match_regex:/^djfrankiespodcast$/gmi, name_to_replace:/^/gmi, name_replace_with:"Frankie 3000 pod: "},
];
var INDIVIDUAL_TRACKS_TO_LOAD = [
	// { name : <DISPLAY NAME>, key : <MIXCLOUD KEY> }
	{name:'Hudson921: 2000s 2010s mix 2323',key:'/Hudson921/2000s-2010s-mix-2323/'},
	{name:'Robert toombs: throwback e15 - 2000s 2010s', key:'/robert-toombs/that-throwback-show-ep-15-2000s-2010s/'},
	{name:'Scotty fox: friends of tom',key:'/scotty-fox/friends-of-tom/'},
	{name:'Scotty fox: grad mix 2021',key:'/scotty-fox/grad-mix-2021/'},
	{name:'Scotty fox: pumpkin spice season 2 never too latte',key:'/scotty-fox/pumpkin-spice-season-2-never-too-latte/'},
	{name:'Scotty fox: songs you might hear at a supermarket',key:'/scotty-fox/songs-you-might-hear-at-a-supermarket/'},
	{name:'Scotty fox: clarity',key:'/scotty-fox/clarity/'},
	{name:'Scotty fox: occupational therapy', key:'/scotty-fox/occupational-therapy/'},
	{name:'Scotty fox: the rhythm of the night',key:'/scotty-fox/the-rhythm-of-the-night/'},
	{name:'DjJEM2: 1069 latin julio mix 72023', key:'/DjJEM2/djjem-1069-latin-julio-mix-72023/'},
];
var BAN_LIST = [
	// BAN BY MIXCLOUD KEY or MIXCLOUD DISPLAY NAME
	'/therealrons/rons-podcast-665/',
	'/FrankAndreasen/the-best-of-2018-the-dance-mixes/'
];
