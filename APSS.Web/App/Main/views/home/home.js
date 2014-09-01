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
                    value: 53.8                    
                }, {
                    category: "Europe",
                    value: 16.1                    
                }, {
                    category: "Latin America",
                    value: 11.3                  
                }, {
                    category: "Africa",
                    value: 9.6                   
                }, {
                    category: "Middle East",
                    value: 5.2                  
                }, {
                    category: "North America",
                    value: 3.6                   
                }]
            });


            $scope.mainGridOptions = {
                dataSource: {
                    type: "odata",
                    transport: {
                        read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
                    },
                    pageSize: 5,
                    serverPaging: true,
                    serverSorting: true
                },
                sortable: true,
                pageable: true,               
                dataBound: function () {
                    this.expandRow(this.tbody.find("tr.k-master-row").first());
                },
                columns: [{
                    field: "FirstName",
                    title: "First Name",
                    width: "120px"
                }, {
                    field: "LastName",
                    title: "Last Name",
                    width: "120px"
                }, {
                    field: "Country",
                    width: "120px"
                }, {
                    field: "City",
                    width: "120px"
                }, {
                    field: "Title"
                }]
            };

            
            
        }
    ]);
})();