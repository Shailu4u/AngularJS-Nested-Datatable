/*
 * AngularJS Nested DataTable custom directive
 * Version: 0.1
 *
 * Copyright 2015 Shailendra Kumar.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * Author: Shailendra Kumar
 */
(function () {
    "use strict";

    angular
        .module("myApp", ["nestedDataTable"])
        .controller("MyController",["$scope","DataService",appController])
        .service("DataService",["$http",dataService]);
        /*page app controller*/
        function appController($scope, DataService){
            //tableData supplied to custom element.
            $scope.tableData = {};
            //outer datatable configuration
            $scope.outerDefaults = {
                sPaginationType: "full_numbers",
                bRetrieve: true,
                bDestroy: true,
                aaSorting: [[1, "asc"]]
            };
            //inner datatable configuration
            $scope.innerDefaults = {
                aaSorting: [[2, "asc"]]
            };
            /*get table data from data.json file*/
            DataService.get()
                .success(function(data){
                    $scope.tableData = data;//console.log($scope.outerDefaults)
                })
                .error(function(data, status) {
                    console.log("Error:"+status);
                });
        }
        /*service to get table data*/
        function dataService($http) {
            this.get = function () {
                return $http.get("src/data.json");
            }
        }
})();
