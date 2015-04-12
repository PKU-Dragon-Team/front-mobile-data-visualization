'use strict';

/**
 * @ngdoc function
 * @name frontMobileDataVisualizationApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the frontMobileDataVisualizationApp
 */
angular.module('frontMobileDataVisualizationApp')
  .controller('UserCtrl', ['$scope', 'api', '$routeParams', function ($scope, api, $routeParams) {
    $scope.uid = $routeParams.uid;
    $scope.seed = +new Date() % 10;
    api.user($scope.uid).success(function(data) {
      $scope.user = data;
    });
    api.location_by_uid($scope.uid).success(function(data) {
      $scope.location_range_data = data;
    });
    api.location_stop_by_uid($scope.uid).success(function(data) {
      $scope.location_stop_range_data = data;
    });
    api.gprs_count_by_hour($routeParams.uid).success(function(data) {
      $scope.net_flow = data;
    });
    api.gprs_count_by_day($routeParams.uid).success(function(data) {
      $scope.net_flow_by_week = data.map(function(elem) {
        elem.day = parseInt(elem.day);
        return elem;
      });
    });
    api.proba_matrix($routeParams.uid).success(function(data) {
      $scope.proba_matrix = data;
    });
    api.holiday_proba_matrix($routeParams.uid).success(function(data) {
      $scope.holiday_proba_matrix = data;
    });
    api.workday_proba_matrix($routeParams.uid).success(function(data) {
      $scope.workday_proba_matrix = data;
    });
    api.freq_seq($routeParams.uid).success(function(data) {
      $scope.freq_seqs = data;
    });
    api.site_count($routeParams.uid).success(function(data) {
      $scope.sites = data;
    });
    api.app_count($routeParams.uid).success(function(data) {
      $scope.apps = data;
    });

    api.web_req_hist($routeParams.uid).success(function(data) {
      var newdata = [];
      var i = 0, j = 0;
      while(i < 24) {
        if (data[j] && i == data[j].hour) {
          newdata.push(data[j]);
          j += 1;
          i += 1;
        } else {
          newdata.push({count: 0, hour: i});
          i += 1;
        }
      }
      $scope.web_req = newdata;
    });

    api.call_hist($routeParams.uid).success(function(data) {
      console.log(data);
      var newdata = [];
      var i = 0, j = 0;
      while(i < 24) {
        if (data[j] && i == data[j].hour) {
          newdata.push(data[j]);
          j += 1;
        } else {
          newdata.push({count: 0, hour: i});
        }
        i += 1;
      }
      $scope.call = newdata;
    });

  }]);
