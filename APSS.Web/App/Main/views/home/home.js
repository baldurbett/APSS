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
                    category: "Complete",
                    value: 53.8,
                    color: "#6685a4"
                }, {
                    category: "In Progress",
                    value: 47.2,
                    color: "#d74b4b"
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