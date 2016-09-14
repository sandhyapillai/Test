 var myapp=angular.module('myApp',['ngRoute'])
 
 myapp.config(function($routeProvider){
	 $routeProvider
	 	.when("/albums",{
	 		templateUrl:'app/partials/albumlistpartial.html',
	 		controller:"albumListController"
	 	})
	 	.when("/album/:album_name",{
	 		templateUrl:'app/partials/albumviewpartial.html',
	 		controller:"albumViewController"
	 	})
	 	.when("/photo/:photo_name",{
	 		templateUrl:'app/partials/photoviewpartial.html',
	 		controller:"photoViewController"
	 	})
	 	.otherwise({
			redirectTo:'/albums'
		})
	 	
	 	
 })
 
 
