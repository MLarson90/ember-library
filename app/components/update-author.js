import Ember from 'ember';

export default Ember.Component.extend({
  updateAuthor: false,
  actions:{
    delete(author){
      this.sendAction('deleteAuthor', author);
    },
    update(author){
      var params = {
        first: this.get('edit_first'),
        last: this.get('edit_last'),
      };
      this.set('updateAuthor',false);
      this.sendAction('update', author, params);
    },
    showAuthor(){
      this.set('updateAuthor', true);
    }
  }
});
