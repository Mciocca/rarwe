import Ember from 'ember';

const Band = Ember.Object.extend({
    name: ''
});

export default Ember.Route.extend({
    model(){
        const ledZepplin = Band.create({ name: 'Led Zepplin' });
        const pearlJam = Band.create({ name: 'Pearl Jam' });
        const fooFighters = Band.create({ name: 'Foo Fighter' });

        return [ledZepplin, pearlJam, fooFighters];
    }
});
