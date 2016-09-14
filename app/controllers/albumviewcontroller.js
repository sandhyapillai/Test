(function(){
	
	function albumViewController($scope,$routeParams,albumProvider){
		//$scope.album_name=$routeParams.album_name
		$scope.album_name = $routeParams.album_name
		try{
			$scope.photos = albumProvider.getAlbumByName($scope.album_name)
			
		}
		catch(e){
			$scope.load_error_text=e.message
		}
		
		
	}
	
	myapp.controller('albumViewController',albumViewController)
})()