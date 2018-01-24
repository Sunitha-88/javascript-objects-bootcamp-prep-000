var playlist ={};
playlist = {'Phil Ochs': "Here's to the State of Mississippi", Kanye: "Gold Digger"};

function updatePlaylist(playlist, artistName, songTitle){

	return Object.assign({},playlist,{[artistName]:songTitle});
	}
function removeFromPlaylist(playlist1,artistName){
	var ans=delete playlist.artistName;
	console.log(ans);
  return playlist1;
	}
console.log(removeFromPlaylist({'kanye':'Gold Digger','sam': 'John'}, 'sam'));