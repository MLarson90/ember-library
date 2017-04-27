import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      authors: this.store.findAll('author'),
      books: this.store.findAll('book')
    });
  },
    actions: {
      saveAuthor(params) {
        var newAuthor = this.store.createRecord('author', params);
        newAuthor.save();
        this.transitionTo('authors');
      }
    }
});
