function songs(playlist) {
    let numberToSongs = playlist.shift();
    let typeSong = playlist.pop();
    let songs = [];

    class Song {
        constructor(type,name,time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
        
    }


    for(let i = 0; i < numberToSongs; i++){
        let listSong = playlist[i].split('_');
        let type = listSong[0];
        let name = listSong[1];
        let time = listSong[2];
        let song = new Song(type,name,time);
        songs.push(song);
        

    }
   
    if(typeSong === 'all'){
        songs.forEach((i) => console.log(i.name));
         }else {
          let filtered = songs.filter((i) => i.type === typeSong);
          filtered.forEach((i) => console.log(i.name));
         }

    
}
songs([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite'])