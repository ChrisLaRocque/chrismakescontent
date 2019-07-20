Vue.component('song-item', {
  props: ['song'],
  template: "<tr><td><img src='//via.placeholder.com/50' /></td><td>{{ song.artist }}</td><td><em>{{ song.title }}</em></td><td>{{ song.services }}</td></tr>"
})

var app7 = new Vue({
  el: '#song-list',
  data: {
    songs: [
      { artist: 'Grandview', title: 'Pillars', services: 'Engineering, Production, Mixing', artwork: '/assets/img/artwork/thumbnails/grandview.jpg' },
      { artist: 'Jonesing', title: 'Dawn', services: 'Engineering, Production, Mixing' },
      { artist: 'Pray For Sound', title: 'They Gave Up Looking', services: 'Engineering, Mixing' },
      { artist: 'Grandview', title: 'To The Sun', services: 'Engineering, Production, Mixing, Mastering' },
      { artist: 'Shiver.', title: 'Mood', services: 'Assistant Engineering, Mixing' },
      { artist: 'The Color and Sound', title: 'Team', services: 'Engineering, Mixing, Mastering' },
      { artist: 'Barricades', title: 'Please', services: 'Engineering' },
      { artist: 'Donna Bummer', title: 'Washout', services: 'Engineering, Production, Mixing, Mastering' },
      { artist: 'LFF', title: 'Simple', services: 'Engineering, Mixing' }
    ]
  }
})