'use strict';

  angular.module('angularMApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller:'MainCtrl'
      })
  }).directive("headerTmpl",function(){
    var _dir = {};
    _dir.templateUrl = "../views/template/Header/headerTmpl.html" ;
    _dir.scope = {};
    _dir.restrict = "M" ;
    _dir.replace = true;
    _dir.transclude = false ;
    _dir.controller = function(){
    };
    return _dir;
  }).directive("aboutMeTmpl",function(){
    var _dir = {};
    _dir.templateUrl = "../views/template/About/aboutMe.html" ;
    _dir.scope = {};
    _dir.restrict = "M" ;
    _dir.replace = true;
    _dir.transclude = false ;
    _dir.controller = function(){
    };
    return _dir;
  }).directive("mySkillsTmpl",function(){
    var _dir = {};
    _dir.templateUrl = "../views/template/MySkills/mySkills.html" ;
    _dir.scope = {};
    _dir.restrict = "M" ;
    _dir.replace = true;
    _dir.transclude = false ;
    _dir.controller = function(){
    };
    return _dir;
  }).directive("myExperienceTmpl",function(){
    var _dir = {};
    _dir.templateUrl = "../views/template/MyExperience/myExperience.html" ;
    _dir.scope = {};
    _dir.restrict = "M" ;
    _dir.replace = true;
    _dir.transclude = false ;
    _dir.controller = function(){
    };
    return _dir;
  }).directive("myEducationTmpl",function(){
    var _dir = {};
    _dir.templateUrl = "../views/template/MyEducation/myEducation.html" ;
    _dir.scope = {};
    _dir.restrict = "M" ;
    _dir.replace = true;
    _dir.transclude = false ;
    _dir.controller = function(){
    };
    return _dir;
  }).directive("myPortfolioTmpl",function(){
    var _dir = {};
    _dir.templateUrl = "../views/template/MyPortfolio/myPortfolio.html" ;
    _dir.scope = {};
    _dir.restrict = "M" ;
    _dir.replace = true;
    _dir.transclude = false ;
    _dir.controller = function(){
    };
    return _dir;
  }).directive("myContactTmpl",function(){
    var _dir = {};
    _dir.templateUrl = "../views/template/MyContact/myContact.html" ;
    _dir.scope = {};
    _dir.restrict = "M" ;
    _dir.replace = true;
    _dir.transclude = false ;
    _dir.controller = function(){
    };
    return _dir;
  }).directive("myFeedbackTmpl",function(){
    var _dir = {};
    _dir.templateUrl = "../views/template/MyFeedback/myFeedback.html" ;
    _dir.scope = {};
    _dir.restrict = "M" ;
    _dir.replace = true;
    _dir.transclude = false ;
    _dir.controller = function(){
    };
    return _dir;
  });

/*Manually Bootstrap Angular application*/
angular.element(document).ready(function() {
      angular.bootstrap(document, ['angularMApp']);
});

