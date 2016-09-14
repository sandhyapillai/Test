<html>
    <head>
        <title>AngularJS login</title>
        <script  src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script> 
        <script  src="js/angular-route.min.js"></script>
        <script src="js/angular-cookies.min.js"></script>
      
    </head>
    <body ng-app="myApp">
        <div ng-controller="mainCtrl">
        	 <h1>Tree Structure Data</h1>
    
    <script type="text/ng-template" id="tree-structure">
    <span>{{dt.label}}</span>
     <ul class="childElement">
        <li ng-repeat="dt in dt.nodes" ng-include="'tree-structure'">
        </li>
     </ul>
</script>

<ul class="parentList">
    <li ng-repeat="dt in data" ng-include="'tree-structure'">
    </li>
</ul>
        </div>
        <script>
        	var myapp = angular.module("myApp",[])
        	myapp.controller("mainCtrl",function($scope){
        		 $scope.data = [
				    {
				      "label" : "Level-1 - 1"
				    },{
				      "label" : "Level-1 - 2"
				    },{
				      "label" : "Level-1 - 2",
				      "nodes" : [
				        {"label" : "Level-2 - 1"},
				        {"label" : "Level-2 - 2"},
				        {"label" : "Level-2 - 3",
				          "nodes" : [
				              {"label" : "Level-3-1"},
				              {"label" : "Level-3-2"},
				              {"label" : "Level-3-3",
				                "nodes" : [
				                    {"label"  :"Level-4-1"},
				                    {"label"  :"Level-4-2"}
				                  ]
				              }
				            ]
				        }
				      ]
				    } 
				  ]
        	})
        </script>
    </body>
</html>