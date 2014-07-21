exports.init = function(){
	
	var backgroundView = Titanium.UI.createView({
		backgroundImage: 'giza-blur.jpg',
		width: 1024,
	   	height: 768
	});
	var articlesView = Titanium.UI.createView({
		backgroundImage: 'articles.png',
		width: 1024,
	   	height: 768
	});
	articlesView.addEventListener('click', function(){
		$.feed.init();
	});
	$.articles.add(backgroundView);
	$.articles.add(articlesView);
	$.articles.addEventListener('pinch', function(e){
		$.articles.close();
	});
	$.articles.open();
};