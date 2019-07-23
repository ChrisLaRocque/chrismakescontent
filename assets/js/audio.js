// Songs array for audio page
var songs = [
  { id: 'pillars', artist: 'Grandview', title: 'Pillars', services: 'Engineering, Production, Mixing', site:'https://grandview.bandcamp.com/',
    description: 'Pillars - Lorem ipsum dolor sit amet, fabulas apeirian periculis ne eam. Ridens forensibus interesset duo ad, vel dolorum copiosae id. Ut homero tibique his, ei mediocrem expetenda ius. Augue explicari corrumpit vel cu, te praesent scripserit his, mei postea cotidieque no.' },
  { id: 'dawn', artist: 'Jonesing', title: 'Dawn', services: 'Engineering, Production, Mixing', site:'https://jonesing.bandcamp.com/album/dad-jokes',
    description: 'Dawn - Lorem ipsum dolor sit amet, fabulas apeirian periculis ne eam. Ridens forensibus interesset duo ad, vel dolorum copiosae id. Ut homero tibique his, ei mediocrem expetenda ius. Augue explicari corrumpit vel cu, te praesent scripserit his, mei postea cotidieque no.' },
  { id: 'theygaveuplooking', artist: 'Pray For Sound', title: 'They Gave Up Looking', services: 'Engineering, Mixing', site:'http://prayforsound.com/',
    description: 'They Gave Up - Lorem ipsum dolor sit amet, fabulas apeirian periculis ne eam. Ridens forensibus interesset duo ad, vel dolorum copiosae id. Ut homero tibique his, ei mediocrem expetenda ius. Augue explicari corrumpit vel cu, te praesent scripserit his, mei postea cotidieque no.' },
  { id: 'tothesun', artist: 'Grandview', title: 'To The Sun', services: 'Engineering, Production, Mixing, Mastering', site:'https://grandview.bandcamp.com/',
    description: 'To the sun - Lorem ipsum dolor sit amet, fabulas apeirian periculis ne eam. Ridens forensibus interesset duo ad, vel dolorum copiosae id. Ut homero tibique his, ei mediocrem expetenda ius. Augue explicari corrumpit vel cu, te praesent scripserit his, mei postea cotidieque no.' },
  { id: 'mood', artist: 'Shiver.', title: 'Mood', services: 'Assistant Engineering, Mixing', site:'https://shiverma.bandcamp.com/album/evergreen',
    description: 'Mood - Lorem ipsum dolor sit amet, fabulas apeirian periculis ne eam. Ridens forensibus interesset duo ad, vel dolorum copiosae id. Ut homero tibique his, ei mediocrem expetenda ius. Augue explicari corrumpit vel cu, te praesent scripserit his, mei postea cotidieque no.' },
  { id: 'team', artist: 'The Color and Sound', title: 'Team', services: 'Engineering, Mixing, Mastering', site:'https://thecolorandsound.com',
    description: 'Team - Lorem ipsum dolor sit amet, fabulas apeirian periculis ne eam. Ridens forensibus interesset duo ad, vel dolorum copiosae id. Ut homero tibique his, ei mediocrem expetenda ius. Augue explicari corrumpit vel cu, te praesent scripserit his, mei postea cotidieque no.' },
  { id: 'please', artist: 'Barricades', title: 'Please', services: 'Engineering', site:'https://losbarricados.bandcamp.com/',
    description: 'Please - Lorem ipsum dolor sit amet, fabulas apeirian periculis ne eam. Ridens forensibus interesset duo ad, vel dolorum copiosae id. Ut homero tibique his, ei mediocrem expetenda ius. Augue explicari corrumpit vel cu, te praesent scripserit his, mei postea cotidieque no.' },
  { id: 'washout', artist: 'Donna Bummer', title: 'Washout', services: 'Engineering, Production, Mixing, Mastering', site:'https://donnabummerma.bandcamp.com/releases',
    description: 'Washout - Lorem ipsum dolor sit amet, fabulas apeirian periculis ne eam. Ridens forensibus interesset duo ad, vel dolorum copiosae id. Ut homero tibique his, ei mediocrem expetenda ius. Augue explicari corrumpit vel cu, te praesent scripserit his, mei postea cotidieque no.' },
  { id: 'simple', artist: 'LFF', title: 'Simple', services: 'Engineering, Mixing', site:'https://lfftheband.bandcamp.com/album/everywhere-ive-left-myself',
    description: 'Simple - Lorem ipsum dolor sit amet, fabulas apeirian periculis ne eam. Ridens forensibus interesset duo ad, vel dolorum copiosae id. Ut homero tibique his, ei mediocrem expetenda ius. Augue explicari corrumpit vel cu, te praesent scripserit his, mei postea cotidieque no.' }
];

// All scripts post-window load
 window.onload = function(){

   // Loads all songs from the songs array
   var songsList = function(songs) {
      for (var i = 0; i < songs.length; i++){
        var currentSong = songs[i];
        var template = '<td class="text-center"><img class="table-thumb" src="assets/img/artwork/thumbnails/' + currentSong.id + '.jpg" /></td><td>' + currentSong.artist + '</td><td><em>' + currentSong.title + '</em></td><td>' + currentSong.services + '</td>';
        var table = document.getElementById("table");
        var row = table.insertRow(-1);

        row.innerHTML = template;
        row.id = currentSong.id;
      }
    };
    songsList(songs);

    // Featured song loader
    $("tr").on('click', function() {
        var id = this.id;
        var featuredSong = songs.filter(function(song) {return song.id === id;})[0];
        var template = '<div class="col-lg-4 col-12"><img class="img-fluid song-artwork" src="assets/img/artwork/' + id + '-artwork.jpg" /></div><div class="col-lg-8 col-12 song-text"><h4 class="song-title mb-2">' + featuredSong.title + '</h4><h5 class="song-artist">' + featuredSong.artist + '</h5><hr class="dark"><audio controls><source src="assets/audio/' + id + '.m4a" type="audio/mpeg"></audio><h5 class="services">' + featuredSong.services + '</h5><a href="' + featuredSong.site + '"><p class="artist-site"><em>' + featuredSong.site + '</em></p></a><p class="song-description">' + featuredSong.description + '</p></div>';

        document.getElementById("featured-song").innerHTML = template;
    });


// // End of window.onload wrap
};