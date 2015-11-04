(function(){
  'use strict';



  //[{value: 'Buy Beer',id:1,done: false,canBeDeleted:true}];
var todoItems=[];

  angular.module('too-doo',[])
  .controller('toDoListController',['$http', function($http){
    var todo = this;
    $http.get('/app/too-doo.json').success(function(data){
      todoItems = data;
      todo.items = todoItems;
      console.log(todoItems,'todoItems');
    });


    this.removeItem = function(id){
      todoItems = $.grep(todoItems, function(data, index) {
         return data.id != id;
      });
      this.items = todoItems;
    };
  }])
  .controller('newToDoController', function(){
    this.item = {id: todoItems.length+1,canBeDeleted:true};
    this.addNewItem = function(){
      if (!this.item.id){this.item.id = todoItems.length+1};
      this.item.createdOn = Date.now();
      todoItems.push(this.item);
      this.item = {id: todoItems.length+1,canBeDeleted:true};
    };
  })
  .directive('todoListItem', function(){
    return {
      restrict: 'E',
      templateUrl: '/app/views/todolist/list-item-view.html'
    };
  })
  .directive('todoNewItemForm', function(){
    return {
      restrict: 'E',
      templateUrl: '/app/views/todolist/new-item-form.html',
      controller: 'newToDoController',
      controllerAs: 'newToDoCtrl'
    };
  })
  .directive('todoList', function(){
    return {
      restrict: 'E',
      templateUrl: '/app/views/todolist/list-view.html',
      controller: 'toDoListController',
      controllerAs: 'toDoListCtrl'
    };
  });
})();
