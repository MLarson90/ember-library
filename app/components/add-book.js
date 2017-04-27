import Ember from 'ember';

export default Ember.Component.extend({
  addNewBook: false,
  actions: {
    showBookForm(){
      this.set('addNewBook',true);
    },
    saveBook(){
      var params = {
        title: this.get('title'),
        author: this.get('author')
      };
      this.set('addNewBook', false);
      this.sendAction('saveBook',params);
    }
  }
});
