(function(){
function albumListController($scope,albumProvider){
	 $scope.addAlbum={}
	 
	 $scope.albumList=albumProvider.getAlbum()
	 $scope.addNewAlbum=function(newAlbum){
		 $scope.add_album_error=""
		 try{
			 albumProvider.addNewAlbum(newAlbum)
			 $scope.addAlbum = {}
			 $scope.add_album_error=""
		 }	
		 catch(e){
			 $scope.add_album_error = e.message
		 }
	 }
 
 }

 myapp.controller('albumListController',albumListController)

 
 })()