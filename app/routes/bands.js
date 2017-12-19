import Ember from 'ember';

const Band = Ember.Object.extend({
  name: ''
});

var Song = Ember.Object.extend({
  title: '',
  rating: 0,
  band: ''
});

export default Ember.Route.extend({
  model() {
    
    var blackDog = Song.create({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3
    });

    var yellowLedbetter = Song.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    });

    var pretender = Song.create({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2
    });

    var daughter = Song.create({
      title: 'Daughter',
      band: 'Pearl Jam',
      rating: 5
    });

    const ledZepplin = Band.create({
      name: 'Led Zepplin',
      songs: [blackDog]
    });

    const pearlJam = Band.create({
      name: 'Pearl Jam',
      songs: [yellowLedbetter, daughter]
    });

    const fooFighters = Band.create({
      name: 'Foo Fighter',
      songs: [pretender]
    });

    return [ledZepplin, pearlJam, fooFighters];
  }
});
