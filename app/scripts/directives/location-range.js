'use strict';

/**
 * @ngdoc directive
 * @name frontMobileDataVisualizationApp.directive:locationRange
 * @description
 * # locationRange
 */
angular.module('frontMobileDataVisualizationApp')
  .directive('locationRange', ['$window', function ($window) {
    return {
      template: '',
      restrict: 'E',
      scope: {
        data: '='
      },
      link: function postLink(scope, element, attrs) {
        function clock_to_num(str) {
          var split = str.split(':');
          return +split[0] * 60 + +split[1];
        }

        var gridWidth = 25;
        var width = gridWidth * 31;
        var margin = { top: 25, right: 0, bottom: 40, left: 30 };
        var height = 400 - margin.top - margin.bottom;
        var times = ["1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a", "9a", "10a", "11a", "12a", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "10p", "11p", "12p"];

        var svg = d3.select(element[0]).append('svg').style('width', '100%')
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        var y = d3.scale.linear().domain([0, 24 * 60 - 1]).range([0, height]);

        window.onresize = function() {
          scope.$apply();
        };

        scope.$watch(function() {
          return angular.element($window)[0].innerWidth;
        }, function() {
          scope.render(scope.data);
        });

        scope.$watch('data', function(newVals, oldVals) {
          return scope.render(newVals);
        });

        scope.render = function(data) {
          svg.selectAll('*').remove();

          if (!data) {
            return;
          }

          var dayLabels = svg.selectAll(".dayLabel")
              .data(d3.range(31))
              .enter().append("text")
                .text(function(d) { return d + 1; })
                .attr("x", function(d, i) { return i * gridWidth; })
                .attr("y", 0)
                .style("text-anchor", "middle")
                .attr("transform", "translate(" + gridWidth / 2 + ", -6)");

          var time_labels = svg.selectAll('.timeLabel')
            .data(times)
            .enter().append('text')
            .text(function(d) { return d; })
            .attr('x', 0)
            .attr('y', function(d, i) { return i * (gridWidth / 2); })
            .style("text-anchor", "end")
            .attr("transform", "translate(-6," + gridWidth / 3 + ")");

          var heatmaps = [];
          data.forEach(function(entity) {
            var date = parseInt(entity.date);
            var no_duplicated_locations = {};
            var one_day_data = entity.locations.map(function(elem) {
              no_duplicated_locations[elem.location] = true;
              return {
                from: clock_to_num(elem.from),
                to: clock_to_num(elem.to),
                location: elem.location,
                title: elem.from + '-' + elem.to
              };
            });
            var color = d3.scale.category20();
            svg.selectAll('.day' + date).data(one_day_data)
              .enter().append('rect')
              .attr('x', function(d) { return gridWidth * (date - 1); })
              .attr('y', function(d) { return y(d.from); })
              .attr('width', gridWidth)
              .attr('height', function(d) { return y(d.to) - y(d.from); })
              .attr('title', function(d) { return d.title; })
              .attr('fill', function(d) { return color(d.location); });
          });
        };
      }
    };
  }]);