'use strict';

/**
 * @ngdoc function
 * @name frontMobileDataVisualizationApp.controller:UserlistCtrl
 * @description
 * # UserlistCtrl
 * Controller of the frontMobileDataVisualizationApp
 */
angular.module('frontMobileDataVisualizationApp')
  .controller('UserlistCtrl', ['$scope', 'api', function($scope, api) {
    $scope.maxSize = 10;
    api.usercount().success(function(data) {
      $scope.totalItems = +data;
    });
    $scope.currentPage = 1;

    api.users($scope.currentPage).success(function(data) {
      $scope.users = data;
    });
    $scope.pageChanged = function() {
      api.users($scope.currentPage).success(function(data) {
        $scope.users = data;
      });
    };
  }]);
