var app = angular.module('app', []);
app.controller('controller', function Controller($scope) {
        $scope.beams = [];

        $scope.handleMessage = function(message) {
                var context = document.getElementById("canvas").getContext("2d");
                context.clearRect(0, 0, canvas.width, canvas.height);
                $scope.beams = message.payloadString;
                var beams = JSON.parse(message.payloadString);
                $scope.drawBeams(beams, context);
                $scope.$apply();
        }
        client.onMessageArrived = $scope.handleMessage;

        $scope.click = function(event) {
                var x = event.offsetX;
                var y = event.offsetY;
                sendCoordsMqtt(x, y);
        }

        $scope.drawBeams = function(beams, context) {
                beams.forEach(function(beam) {
                        var lat = beam.lat;
                        var lon = beam.lon;
                        var rad = beam.radius;
                        context.beginPath();
                        context.arc(lat, lon, rad, 0, 2*Math.PI);
                        context.stroke();
                });
        }
});


