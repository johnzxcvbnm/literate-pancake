const app = angular.module('BookApp', []);

app.controller('MainController', ['$http', function($http){
this.h1 = 'Book App'
this.book = ''
this.books = []

this.createForm = {}
this.createBook = () => {
  $http({
    method: 'POST',
    url: '/books',
    data: this.createForm
  }).then(response => {
    console.log(response.data);
    this.books.unshift(response.data);
    this.createForm = {}
  }, error => {
    console.log(error);
  })
}

this.getBook = () => {
  $http({
    method: 'GET',
    url: '/books'
  }).then(response => {
    console.log(response.data);
    this.books = response.data
    this.book = this.books[0]
  }, error => {
    console.log(error);
  })
}

this.deleteBook = (id) => {
  $http({
    method: 'DELETE',
    url: '/books/' + id
  }).then(response => {
    console.log(response.data);
    const removeByIndex = this.books.findIndex(book => book._id === id)
    this.books.splice(removeByIndex, 1)
  }, error => {
    console.log(error);
  })
}
this.getBook();
}]);
