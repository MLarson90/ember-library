import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      authors: this.store.findAll('author'),
      books: this.store.findAll('book')
    });
  },
  actions:{
    destroyBook(book){
      book.destroyRecord();
      this.transitionTo('books');
    }
  }
});
