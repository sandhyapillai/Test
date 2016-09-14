var app = angular.module("myApp",['ngRoute','ngCookies'])
app.config(function($routeProvider){
	$routeProvider
	.when('/dashboard',{
		templateUrl:'dashboard.html'
	})
	.when('/login',{
		templateUrl:'app/partials/login.html'
	})
	.otherwise({
		redirectTo:'/'
	})
})

app.controller("loginCtrl",function($scope,$location,$cookieStore){
	$scope.submit=function(){
		if($scope.username=='admin' && $scope.password=='admin'){
			$cookieStore.put("loggedIn", "true");
			$location.path('/index')
		}
	}
})

app.controller("mainCtrl",function($scope,$location,$cookieStore){
	$cookieStore.remove("loggedIn")
	
	if($cookieStore.get("loggedIn")){
		$location.path('/dashboard')
	}
	else{
		$location.path('/login')
	}
	
})