var apiUrl = "https://api.gettyimages.com:443/v3/search/images?file_types=jpg&page_size=20";
var method = "GET";

$(function() {
    fetchData('1');
    //console.log("Called");
});

function populateGrid(imgs,itemsUrl) {

var parentDiv = $('#items'); 
parentDiv.empty();
len = imgs.length;
for (i=0; i<len; i++) {
     var div = $("<div/>");
     div.addClass("itemDiv");
     div.attr("id","drag"+(i+1));
     //var infoLink = $("<a>");
     //infoLink.addClass("round-button"); 
     //infoLink.attr("target","_blank");
     //infoLink.attr("href",itemsUrl[i]);
     //infoLink.html("i");
     var img = $("<img/>");
     img.attr('src', imgs[i]);
     img.width("100px");
     img.height("100px");
     //div.append(infoLink);
     div.append(img);
     div.mouseover(function() {displayIn(this)});
     div.mouseout(function() {displayOut(this)});
     parentDiv.append(div);
     }
}

function displayIn(elem) {
	$(elem).children('a').show();
}

function displayOut(elem) {
	$(elem).children('a').hide();
}

function fetchData(pageNum) {

    var spinner = new Spinner({
	lines: 12, // The number of lines to draw
	length: 7, // The length of each line
	width: 5, // The line thickness
	radius: 10, // The radius of the inner circle
	color: '#000', // #rbg or #rrggbb
	speed: 1, // Rounds per second
	trail: 100, // Afterglow percentage
	shadow: false // Whether to render a shadow
    }).spin(document.getElementById("items"));

	var images= [];
	var itemsUrl = [];
	var request = $.ajax({
						url: apiUrl,
						type: method,
						data : {page:pageNum},			
						dataType: "json",
						headers:{
							"Api-Key":"pzx2pxrdp69k9w53qxr8byae"
						}
					});

					request.done(function(data) {	
							var imgCollection = data.images;
							var count = imgCollection.length;
							//console.log(count)
							if (!count) {
								return;
							}
							for (var i=0;i<count;i++) {
								var item = imgCollection[i].display_sizes[0];
								var imgUrl = item.uri;
								console.log("Image "+i+" : "+imgUrl)
								images.push(imgUrl)
								//itemsUrl.push(itemUrl)
     
							}
							populateGrid(images,itemsUrl); 
						
                       spinner.stop();
					});

					request.fail(function(jqXHR, textStatus) {
						alert( "Request failed: " + textStatus );
						 spinner.stop();
					});

}



