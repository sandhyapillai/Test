(function(){
	
	function albumProvider(){
		var albums = [
		              {title:"India Trip 2016",
		               description:"Pranit\'s India Trip 2016",
		               date:"2016-15-06",
		               name:"india2016",
		               photos:[]
		              },
		              {title:"India Trip 2015",
		               description:"India Trip 2015",
		               date:"2015-20-06",
		               name:"india2015",
		               photos:[
		                       {filename:"sample-thumbnail.jpg",
		   		            	description:"Stopover at Singapore",
				            	date:"2015-14-06"
		                    	   
		                       }
		                      ]
		              },
		              {title:"Pranit\'s birthday",
		               description:"Pranit\'s 7th birthday",
		               date:"2016-21-01",
		               name:"pranit2016",
		               photos:[]
		              },
		              {title:"10th Wedding anniversary",
		               description:"Anniversary",
		               date:"2015-15-12",
		               name:"anniv2015",
		               photos:[]
		              }
		              ]
		 
		this.getAlbum=function(){
			return albums;
		}
		this.getAlbumByName = function(name){
			
			for(var i=0;i<albums.length;i++){
				if(name.toLowerCase()==albums[i].name.toLowerCase()){
					return albums[i].photos
				}
				
			}
			throw new Error("No album found by that name")
			
		}
		this.addNewAlbum = function(album_data){
			if(!album_data.name) throw new Error("Missing name")
			
			//Check for duplicate name
			for(var i=0;i<albums.length;i++){
				if(album_data.name.toLowerCase()=== albums[i].name.toLowerCase())
					throw new Error("Name is duplicate")
			}
			if(!album_data.title) throw new Error("Missing title")
			if(!album_data.description) throw new Error("Missing Description")
			if(!album_data.date) throw new Error("Missing date")
			if(!validDate(album_data.date)) throw new Error("Date is not proper")
			
			albums.push(album_data)
		}
	}
	myapp.service("albumProvider",albumProvider)
	
	function validDate(albumDate){
		 if(albumDate.match(/^[0-9]{2,4}[\-\/\. ,][0-9]{1,2}[\-\/\. ,][0-9]{1,2}$/)){
			var d= new Date(albumDate)	
			 return !isNaN(d.getTime())
		 }
		 else
			 return false
	 }
})()