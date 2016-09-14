var todoApp=angular.module("todoApp",[])

todoApp.controller("listController",function($scope){
	  $scope.listItems=[{text:"tst",completed:'false'}];
	  
	  $scope.addNew = function(newItem){
	  	$scope.listItems.push({text:newItem,completed:'false'})
	  }


	})