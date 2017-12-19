import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        const bands = this.modelFor('bands');
        return bands.findBy('slug', params.slug);
     }
});
