angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'homeCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: './views/admin.html',
        controller: 'adminCtrl'
      })


      $urlRouterProvider.otherwise('/')

  })
