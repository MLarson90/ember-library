import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    destroyBook(book){
      this.sendAction('destroyBook', book);
    }
  }
});
