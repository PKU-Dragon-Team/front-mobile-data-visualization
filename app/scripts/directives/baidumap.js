'use strict';


var MapController = (function() {
  function MapController() {
    this.overlays = [];
  }

  MapController.prototype.clean_map = function(map) {
    var i;
    this.overlays.forEach(function(overlay) {
      map.removeOverlay(overlay);
    });
  };

  MapController.prototype.render = function(map, raw) {
    var points = raw2points(raw);

    var center = get_points_center(points);
    map.panTo(new BMap.Point(center[0], center[1]));

    var curve = new BMapLib.CurveLine(
      points.map(function(point) { return new BMap.Point(point[0], point[1]); }),
      {strokeColor: "#FF0000", strokeWeight:6, strokeOpacity:0.5});
    map.addOverlay(curve);

    var bluemarker = new BMap.Icon(
        "/images/bluemarker.png",
        new BMap.Size(16, 16),
        {anchor: new BMap.Size(8, 16)});

    var markers = [];
    var label_texts = {};

    points.forEach(function(point) {
      var map_point = new BMap.Point(point[0], point[1]);
      var marker = new BMap.Marker(map_point, {icon: bluemarker});
      map.addOverlay(marker);
      markers.push(marker);
      if (label_texts[point[0], point[1]]) {
        label_texts[point[0], point[1]].times.push(point[2] + '-' + point[3]);
      } else {
        label_texts[point[0], point[1]] = {
          point: map_point,
          times: [point[2] + '-' + point[3]]
        };
      }
    });

    var labels = [];
    for (points in label_texts) {
      var map_point = label_texts[points].point;
      var times = label_texts[points].times;
      var opts = {
        position: map_point,
        offset: new BMap.Size(15, -10)
      };
      var label = new BMap.Label(times.join('<br />'), opts);
      label.setStyle({
        color : "red",
        fontSize : "12px",
        background: 'none',
        border: 0,
        fontFamily:"微软雅黑"
      });
      map.addOverlay(label);
      labels.push(label);
    }

    markers.push(curve);
    this.overlays = markers.concat(labels);
  };

  function raw2points(raw) {
    if (!raw) {
      return [];
    }
    return raw.map(function(raw_point) {
      var pair = raw_point.location.split(' ');
      return [+pair[0] + 0.013, +pair[1] + 0.007, raw_point.start_time, raw_point.end_time];
    });
  }

  function get_points_center(points) {
    var len = points.length;
    var sum = [0, 0];
    points.forEach(function(point) {
      sum[0] += point[0];
      sum[1] += point[1];
    });
    return [sum[0] / len, sum[1] / len];
  }

  return MapController;
})();
/*
    # init map
    center = pointavg(pairs)
    console.log 'center:', center
    point = new BMap.Point(center[0], center[1])
    map.panTo(point)

    # add curve
    curve = new BMapLib.CurveLine(
        points,
        {strokeColor: "#00BFFF", strokeWeight:6, strokeOpacity:0.5})
    map.addOverlay(curve)

    bluemarker = new BMap.Icon("/assets/bluemarker.png",
                           new BMap.Size(16, 16),
                           {anchor: new BMap.Size(8, 16)})
    redmarker = new BMap.Icon("/assets/redmarker.png",
                           new BMap.Size(16, 16),
                           {anchor: new BMap.Size(8, 16)})

    markericons = [redmarker, bluemarker]

    # add marker
    markers = []
    for i in [0..(points.length - 1)]
      p = points[i]
      markericon = if pairs[i].length >= 3 then pairs[i][2] else 0
      marker = new BMap.Marker(p, {icon: markericons[markericon]})
      map.addOverlay(marker)
      markers.push(marker)

    format_time = (d) ->
      return moment(d).format('HH:mm:ss')

    geo = new BMap.Geocoder()

    addresses = []

    n = points.length

    for i in [0..(n - 1)]
      point = points[i]
      time = pairs[i][0]
      marker = markers[i]
      ((pair, point, marker, time) ->
        geo.getLocation point, (rs) ->
          label = new BMap.Label(format_time(time), {offset: new BMap.Size(20, -10)})
          marker.setLabel(label)
          addresses.push([time, rs, pair])
          if addresses.length == n
            if finish
              finish(addresses)
      )(pairs[i], point, marker, time)

    markers.push(curve)
    @overlays = markers
*/
/**
 * @ngdoc directive
 * @name frontMobileDataVisualizationApp.directive:baidumap
 * @description
 * # baidumap
 */
angular.module('frontMobileDataVisualizationApp')
  .directive('baidumap', ['$window', function ($window) {
    return {
      template: '<div id="map" style="height: 800px;"></div>',
      restrict: 'E',
      scope: {
        'data': '='
      },
      link: function postLink(scope, element, attrs) {
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
          element.find('div')[0].innerHTML = '';
          var map = new BMap.Map(element.find('div')[0]);
          var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
          map.enableScrollWheelZoom()
          map.enableContinuousZoom()
          map.addControl(new BMap.NavigationControl())
          map.centerAndZoom(point, 13);

          var map_controller = new MapController();
          map_controller.render(map, data);
        };
      }
    };
  }]);
