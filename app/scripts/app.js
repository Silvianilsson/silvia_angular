'use strict';

angular.module('silviaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/pictures', {
        templateUrl: 'views/pictures.html',
        controller: 'PicturesCtrl'
      })
      .when('/links', {
        templateUrl: 'views/links.html',
        controller: 'LinksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
