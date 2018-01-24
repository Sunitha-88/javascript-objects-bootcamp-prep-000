var playlist ={artistName:'songTitle'};


function updatePlaylist(playlist, artistName, songTitle){

	return Object.assign({},playlist,{[artistName]:songTitle});
	}
function removeFromPlaylist(playlist1,artistName){
	var ans=delete playlist.artistName;
	console.log(ans);
  return playlist1;
	}
