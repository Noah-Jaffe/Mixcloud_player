// sample file, follow the patterns
var CUSTOM_PLAYLISTS_TO_LOAD = [
	{mixcloud_search_key:"rons%20podcast%20%23", mixcloud_match_regex:/RONS.*?Podcast.*?\d{3,4}/i, name_to_replace:/RONS:? Podcast #?(\w+)/gmi, name_replace_with:`RONS: Podcast #$1`},
	{mixcloud_search_key:"Liquid%20DnB%20Mix%20-%20Vol", mixcloud_match_regex:/Liquid DnB Mix - Vol 6[12469]/i, name_to_replace:" - ", name_replace_with:": "},
	{mixcloud_search_key:"Lys_InTheMix", mixcloud_match_regex:/^lys_$/gmi, name_to_replace:/lys[_-]{1,2}|^(?!.*?lys[_-]{1,2})/gmi, name_replace_with:"Lys: "},
	{mixcloud_search_key:"Frankie%203000", mixcloud_match_regex:/^FrankAndreasen$/gmi, name_to_replace:/^/gmi, name_replace_with:"Frankie 3000: "}
];
var INDIVIDUAL_TRACKS_TO_LOAD = [
	{name:'>>: Hudson921 2000s 2010s mix 2323',key:'/Hudson921/2000s-2010s-mix-2323/'},
	{name:'>>: robert toombs throwback e15 - 2000s 2010s', key:'/robert-toombs/that-throwback-show-ep-15-2000s-2010s/'},
	{name:'>>: scotty fox friends of tom',key:'/scotty-fox/friends-of-tom/'},
	{name:'>>: scotty fox grad mix 2021',key:'/scotty-fox/grad-mix-2021/'},
	{name:'>>: scotty fox pumpkin spice season 2 never too latte',key:'/scotty-fox/pumpkin-spice-season-2-never-too-latte/'},
	{name:'>>: scotty fox songs you might hear at a supermarket',key:'/scotty-fox/songs-you-might-hear-at-a-supermarket/'},
	{name:'>>: scotty fox clarity',key:'/scotty-fox/clarity/'},
	{name:'>>: scotty fox occupational therapy', key:'/scotty-fox/occupational-therapy/'},
	{name:'>>: scotty fox the rhythm of the night',key:'/scotty-fox/the-rhythm-of-the-night/'},
	{name:'frankie3000: L: DjJEM2 1069 latin julio mix 72023', key:'/DjJEM2/djjem-1069-latin-julio-mix-72023/'},
];
