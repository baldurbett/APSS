(function() {
    var app = angular.module('app');

    var controllerId = 'app.controllers.views.home';
    app.controller(controllerId, [
        '$scope', function($scope) {
            $scope.onSeriesHover = function (e) {
                //kendoConsole.log(kendo.format("event :: seriesHover ({0} : {1})", e.category, e.value));     
                
            };

            $scope.screenResolution = new kendo.data.DataSource({
                data: [{
                    category: "Asia",
                    value: 53.8,
                    color: "#9de219"
                }, {
                    category: "Europe",
                    value: 16.1,
                    color: "#90cc38"
                }, {
                    category: "Latin America",
                    value: 11.3,
                    color: "#068c35"
                }, {
                    category: "Africa",
                    value: 9.6,
                    color: "#006634"
                }, {
                    category: "Middle East",
                    value: 5.2,
                    color: "#004d38"
                }, {
                    category: "North America",
                    value: 3.6,
                    color: "#033939"
                }]
            });
            
        }
    ]);
})();