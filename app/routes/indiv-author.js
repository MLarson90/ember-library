import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('author', params.author_id);
  },
  actions:{
    saveBook(params){
    var newBook = this.store.createRecord('book', params);
    var author = params.author;
    author.get('books').addObject(newBook);
    newBook.save().then(function(){
      return author.save();
    });
    this.transitionTo('indiv-author',author);
  },
  deleteAuthor(author){
    var book_deletions = author.get('books').map(function(book){
      return book.destroyRecord();
    });
    Ember.RSVP.all(book_deletions).then(function(){
      return author.destroyRecord();
    });
    this.transitionTo('authors');
  },
  update(author, params){
    Object.keys(params).forEach(function(key){
      if(params[key]!==undefined){
        author.set(key,params[key]);
      }
    });
    author.save();
    this.transitionTo('indiv-author');
  }
}
});
