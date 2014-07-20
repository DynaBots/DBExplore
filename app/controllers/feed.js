exports.init = function(){
	
	var feedView = Titanium.UI.createView({
		backgroundImage: 'giza-blur.jpg',
		width: 1024,
	   	height: 768
	});
	
	var text1 = Titanium.UI.createLabel({
	   	text: 'Hello!! tap me',
	   	top: '200px',
	   	left: '200px',
	   	backgroundColor: 'white',
	   	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	   	borderColor: 'gray',
	   	borderRadius: 3,
	   	borderWidth: '3px',
	   	height: '400px',
	   	width: '600px'
	   	//visible: 'false'
	});
	
	/*
	var buttonFeed = Titanium.UI.createButton({
		title:'Open'
	});
	*/
	
	text1.addEventListener('click', function(){
		$.explore.init();
	});
	$.feed.add(feedView);
	$.feed.add(text1);
	$.feed.open();
};