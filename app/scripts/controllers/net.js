'use strict';

/**
 * @ngdoc function
 * @name frontMobileDataVisualizationApp.controller:NetCtrl
 * @description
 * # NetCtrl
 * Controller of the frontMobileDataVisualizationApp
 */
angular.module('frontMobileDataVisualizationApp')
  .controller('NetCtrl', function ($scope) {
    $scope.data = [
      {day: 1, hour: 1 , value: 16},
      {day: 1, hour: 2 , value: 20},
      {day: 1, hour: 3 , value: 0},
      {day: 1, hour: 4 , value: 0},
      {day: 1, hour: 5 , value: 0},
      {day: 1, hour: 6 , value: 2},
      {day: 1, hour: 7 , value: 0},
      {day: 1, hour: 8 , value: 9},
      {day: 1, hour: 9 , value: 25},
      {day: 1, hour: 10, value:   49},
      {day: 1, hour: 11, value:   57},
      {day: 1, hour: 12, value:   61},
      {day: 1, hour: 13, value:   37},
      {day: 1, hour: 14, value:   66},
      {day: 1, hour: 15, value:   70},
      {day: 1, hour: 16, value:   55},
      {day: 1, hour: 17, value:   51},
      {day: 1, hour: 18, value:   55},
      {day: 1, hour: 19, value:   17},
      {day: 1, hour: 20, value:   20},
      {day: 1, hour: 21, value:   9},
      {day: 1, hour: 22, value:   4},
      {day: 1, hour: 23, value:   0},
      {day: 1, hour: 24, value:   12},
      {day: 2, hour: 1 , value: 6},
      {day: 2, hour: 2 , value: 2},
      {day: 2, hour: 3 , value: 0},
      {day: 2, hour: 4 , value: 0},
      {day: 2, hour: 5 , value: 0},
      {day: 2, hour: 6 , value: 2},
      {day: 2, hour: 7 , value: 4},
      {day: 2, hour: 8 , value: 11},
      {day: 2, hour: 9 , value: 28},
      {day: 2, hour: 10, value:   49},
      {day: 2, hour: 11, value:   51},
      {day: 2, hour: 12, value:   47},
      {day: 2, hour: 13, value:   38},
      {day: 2, hour: 14, value:   65},
      {day: 2, hour: 15, value:   60},
      {day: 2, hour: 16, value:   50},
      {day: 2, hour: 17, value:   65},
      {day: 2, hour: 18, value:   50},
      {day: 2, hour: 19, value:   22},
      {day: 2, hour: 20, value:   11},
      {day: 2, hour: 21, value:   12},
      {day: 2, hour: 22, value:   9},
      {day: 2, hour: 23, value:   0},
      {day: 2, hour: 24, value:   13},
      {day: 3, hour: 1 , value: 5},
      {day: 3, hour: 2 , value: 8},
      {day: 3, hour: 3 , value: 8},
      {day: 3, hour: 4 , value: 0},
      {day: 3, hour: 5 , value: 0},
      {day: 3, hour: 6 , value: 2},
      {day: 3, hour: 7 , value: 5},
      {day: 3, hour: 8 , value: 12},
      {day: 3, hour: 9 , value: 34},
      {day: 3, hour: 10, value:   43},
      {day: 3, hour: 11, value:   54},
      {day: 3, hour: 12, value:   44},
      {day: 3, hour: 13, value:   40},
      {day: 3, hour: 14, value:   48},
      {day: 3, hour: 15, value:   54},
      {day: 3, hour: 16, value:   59},
      {day: 3, hour: 17, value:   60},
      {day: 3, hour: 18, value:   51},
      {day: 3, hour: 19, value:   21},
      {day: 3, hour: 20, value:   16},
      {day: 3, hour: 21, value:   9},
      {day: 3, hour: 22, value:   5},
      {day: 3, hour: 23, value:   4},
      {day: 3, hour: 24, value:   7},
      {day: 4, hour: 1 , value: 0},
      {day: 4, hour: 2 , value: 0},
      {day: 4, hour: 3 , value: 0},
      {day: 4, hour: 4 , value: 0},
      {day: 4, hour: 5 , value: 0},
      {day: 4, hour: 6 , value: 2},
      {day: 4, hour: 7 , value: 4},
      {day: 4, hour: 8 , value: 13},
      {day: 4, hour: 9 , value: 26},
      {day: 4, hour: 10, value:   58},
      {day: 4, hour: 11, value:   61},
      {day: 4, hour: 12, value:   59},
      {day: 4, hour: 13, value:   53},
      {day: 4, hour: 14, value:   54},
      {day: 4, hour: 15, value:   64},
      {day: 4, hour: 16, value:   55},
      {day: 4, hour: 17, value:   52},
      {day: 4, hour: 18, value:   53},
      {day: 4, hour: 19, value:   18},
      {day: 4, hour: 20, value:   3},
      {day: 4, hour: 21, value:   9},
      {day: 4, hour: 22, value:   12},
      {day: 4, hour: 23, value:   2},
      {day: 4, hour: 24, value:   8},
      {day: 5, hour: 1 , value: 2},
      {day: 5, hour: 2 , value: 0},
      {day: 5, hour: 3 , value: 8},
      {day: 5, hour: 4 , value: 2},
      {day: 5, hour: 5 , value: 0},
      {day: 5, hour: 6 , value: 2},
      {day: 5, hour: 7 , value: 4},
      {day: 5, hour: 8 , value: 14},
      {day: 5, hour: 9 , value: 31},
      {day: 5, hour: 10, value:   48},
      {day: 5, hour: 11, value:   46},
      {day: 5, hour: 12, value:   50},
      {day: 5, hour: 13, value:   66},
      {day: 5, hour: 14, value:   54},
      {day: 5, hour: 15, value:   56},
      {day: 5, hour: 16, value:   67},
      {day: 5, hour: 17, value:   54},
      {day: 5, hour: 18, value:   23},
      {day: 5, hour: 19, value:   14},
      {day: 5, hour: 20, value:   6},
      {day: 5, hour: 21, value:   8},
      {day: 5, hour: 22, value:   7},
      {day: 5, hour: 23, value:   0},
      {day: 5, hour: 24, value:   8},
      {day: 6, hour: 1 , value: 2},
      {day: 6, hour: 2 , value: 0},
      {day: 6, hour: 3 , value: 2},
      {day: 6, hour: 4 , value: 0},
      {day: 6, hour: 5 , value: 0},
      {day: 6, hour: 6 , value: 0},
      {day: 6, hour: 7 , value: 4},
      {day: 6, hour: 8 , value: 8},
      {day: 6, hour: 9 , value: 8},
      {day: 6, hour: 10, value:   6},
      {day: 6, hour: 11, value:   14},
      {day: 6, hour: 12, value:   12},
      {day: 6, hour: 13, value:   9},
      {day: 6, hour: 14, value:   14},
      {day: 6, hour: 15, value:   0},
      {day: 6, hour: 16, value:   4},
      {day: 6, hour: 17, value:   7},
      {day: 6, hour: 18, value:   6},
      {day: 6, hour: 19, value:   0},
      {day: 6, hour: 20, value:   0},
      {day: 6, hour: 21, value:   0},
      {day: 6, hour: 22, value:   0},
      {day: 6, hour: 23, value:   0},
      {day: 6, hour: 24, value:   0},
      {day: 7, hour: 1 , value: 7},
      {day: 7, hour: 2 , value: 6},
      {day: 7, hour: 3 , value: 0},
      {day: 7, hour: 4 , value: 0},
      {day: 7, hour: 5 , value: 0},
      {day: 7, hour: 6 , value: 0},
      {day: 7, hour: 7 , value: 0},
      {day: 7, hour: 8 , value: 0},
      {day: 7, hour: 9 , value: 0},
      {day: 7, hour: 10, value:   0},
      {day: 7, hour: 11, value:   2},
      {day: 7, hour: 12, value:   2},
      {day: 7, hour: 13, value:   5},
      {day: 7, hour: 14, value:   6},
      {day: 7, hour: 15, value:   0},
      {day: 7, hour: 16, value:   4},
      {day: 7, hour: 17, value:   0},
      {day: 7, hour: 18, value:   2},
      {day: 7, hour: 19, value:   10},
      {day: 7, hour: 20, value:   7},
      {day: 7, hour: 21, value:   0},
      {day: 7, hour: 22, value:   19},
      {day: 7, hour: 23, value:   9},
      {day: 7, hour: 24, value:   4},
    ];
  });
