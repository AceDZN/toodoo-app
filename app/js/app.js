(function(){
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('toDoList', [
    'ngRoute',
    'too-doo'
  ])
  .controller('siteController', function(){
    this.siteName= 'TooDoo';
  });


})();
