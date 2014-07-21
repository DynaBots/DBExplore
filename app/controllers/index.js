
var homeView = Titanium.UI.createView({
		backgroundImage: 'home.png',
		width: 1024,
	   	height: 768
	});
	
homeView.addEventListener('click', function(){
	$.articles.init();
});

$.index.add(homeView);
$.index.open();



//myView.animate(animation);