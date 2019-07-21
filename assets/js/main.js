// HTML Loader
var ids = $('.load').map(function(){
  return $(this).attr('id');
  });
var idLength = ids.length;

for (var i = 0; i < idLength; i++) {
  const id = ids[i];
  $.get( id + ".html", function(data){
    $("#" + id ).replaceWith(data);
  });
}

// All scripts post-window load
window.onload = function(){

  // Generates current year for footer
  var year = new Date().getFullYear();
  $('.year').html(year);

  // Adds page specific CSS based on selected path
  var url = window.location.pathname;
  var path = (url.slice(1)).slice(0,url.length - 6);
  document.getElementById('swap').setAttribute("href", "assets/css/" + path + ".css");

  // Audio player
  // Vue components
  // Featured songs
  Vue.component('featured-item', {
    props: ['song'],
    template: '<div class="row mb-2"><div class="col-lg-4 col-12"><img class="img-fluid song-artwork" v-bind:src="song.artwork" /></div><div class="col-lg-8 col-12 song-text"><h4 class="song-title mb-2">{{ song.title }}</h4><h5 class="song-artist">{{ song.artist }}</h5><hr class="dark"><audio controls><source type="audio/mpeg"></audio><h5 class="services">{{ song.services }}</h5><p class="artist-site"><em>{{ song.site }}</em></p><p class="song-description">{{ song.description }}</p></div></div>'
  })
  // Song list
  Vue.component('song-item', {
    props: ['song'],
    template: "<tr v-bind:id='song.id'><td class='text-center'><img class='table-thumb' v-bind:src='song.thumb' /></td><td>{{ song.artist }}</td><td><em>{{ song.title }}</em></td><td>{{ song.services }}</td></tr>"
  })
  
  // Song list
  var app7 = new Vue({
    el: '#song-list',
    data: {
      songs: [
        { id: 'pillars', artwork: 'assets/img/artwork/pillars-artwork.jpg', thumb: 'assets/img/artwork/thumbnails/pillars.jpg', artist: 'Grandview', title: 'Pillars', services: 'Engineering, Production, Mixing' },
        { id: 'dawn', artwork: 'assets/img/artwork/dawn-artwork.jpg', thumb: 'assets/img/artwork/thumbnails/dawn.jpg', artist: 'Jonesing', title: 'Dawn', services: 'Engineering, Production, Mixing' },
        { id: 'theygaveuplooking', artwork: 'assets/img/artwork/theygaveuplooking-artwork.jpg', thumb: 'assets/img/artwork/thumbnails/theygaveuplooking.jpg', artist: 'Pray For Sound', title: 'They Gave Up Looking', services: 'Engineering, Mixing' },
        { id: 'tothesun', artwork: 'assets/img/artwork/tothesun-artwork.jpg', thumb: 'assets/img/artwork/thumbnails/tothesun.jpg', artist: 'Grandview', title: 'To The Sun', services: 'Engineering, Production, Mixing, Mastering' },
        { id: 'mood', artwork: 'assets/img/artwork/mood-artwork.jpg', thumb: 'assets/img/artwork/thumbnails/mood.jpg', artist: 'Shiver.', title: 'Mood', services: 'Assistant Engineering, Mixing' },
        { id: 'team', artwork: 'assets/img/artwork/team-artwork.jpg', thumb: 'assets/img/artwork/thumbnails/team.jpg', artist: 'The Color and Sound', title: 'Team', services: 'Engineering, Mixing, Mastering' },
        { id: 'please', artwork: 'assets/img/artwork/please-artwork.jpg', thumb: 'assets/img/artwork/thumbnails/please.jpg', artist: 'Barricades', title: 'Please', services: 'Engineering' },
        { id: 'washout', artwork: 'assets/img/artwork/washout-artwork.jpg', thumb: 'assets/img/artwork/thumbnails/washout.jpg', artist: 'Donna Bummer', title: 'Washout', services: 'Engineering, Production, Mixing, Mastering' },
        { id: 'simple', artwork: 'assets/img/artwork/simple-artwork.jpg', thumb: 'assets/img/artwork/thumbnails/simple.jpg', artist: 'LFF', title: 'Simple', services: 'Engineering, Mixing' }
      ],
      featuredSongs: [
        { id: 'pillars', artwork: 'assets/img/artwork/pillars-artwork.jpg', thumb: 'assets/img/artwork/thumbnails/pillars.jpg', artist: 'Grandview', title: 'Pillars', services: 'Engineering, Production, Mixing', site: 'party.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
      ]
    }
  })

// End of window.onload wrap
};

 
