import Ember from 'ember';

export default Ember.Component.extend({
  addNewAuthor: false,
  actions: {
    newAuthorFormShow(){
      this.set('addNewAuthor', true);
    },
    saveAuthor() {
      var params= {
        first: this.get('first'),
        last: this.get('last'),
      };
      this.set('addNewAuthor', false);
      this.sendAction('saveAuthor', params);
    }
  }
});
