exports.init = function(article){
	var videoPlayer;	
	var myView = Titanium.UI.createView({
		backgroundImage: 'giza.jpg',
		width: 1024,
	   	height: 768
	});
	
	var vidWin = Titanium.UI.createWindow({
	    	title : 'Video View Demo',
	    	backgroundColor : 'black'
		});
		
	var closeButton = Titanium.UI.createButton({
		title: "Exit Video",
	   	height: '40dp',
	   	backgroundColor: 'black'
	});
	
	// Callbacks
	function goToVideo(videoUrl) {
		
		videoPlayer = Titanium.Media.createVideoPlayer({
	    	top : 2,
		    autoplay : false,
		    backgroundColor : 'black',
		    fullscreen: 'true',
		    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_HIDDEN,
		    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
		});
	
		videoPlayer.url = videoUrl;
		
		function closeVideo() {
			if(videoPlayer != null){
				videoPlayer.hide();
				videoPlayer.release();
				videoPlayer = null;
			}
			//alert("Oh hai, I was clicked");
			vidWin.close();
		}
		
		vidWin.open();
		videoPlayer.autoplay = 'true';
		
		videoPlayer.addEventListener("complete", closeVideo);
		
		vidWin.add(videoPlayer);
		vidWin.add(closeButton);
		closeButton.addEventListener("click", closeVideo);
		myView.add(vidWin);
		//alert("Oh hai, I was clicked");
	}
	
	//Text Box
	var transformTextStart = Ti.UI.create2DMatrix({
		scale: 1
	});
	var animationTextStart = Ti.UI.createAnimation({
		duration: 500,
		transform: transformTextStart
	});
	var transformTextEnd = Ti.UI.create2DMatrix({
		scale: 0
	});
	var animationTextEnd = Ti.UI.createAnimation({
		duration: 500,
		transform: transformTextEnd
	});
	var text1 = Titanium.UI.createLabel({
	   	text: ' ',
	   	top: '0px',
	   	left: '0px',
	   	backgroundColor: 'white',
	   	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	   	borderColor: 'gray',
	   	borderRadius: 3,
	   	borderWidth: '3px'
	   	//visible: 'false'
	});
	text1.addEventListener("click", function(){
		//text1.visible = "false";
		text1.animate(animationTextEnd);
	});
	//
	
	var audioIcon1 = Titanium.UI.createView({
		backgroundImage: 'audio.png',
		width: 50,
	   	height: 50,
	   	top: '500px',
	   	right: '400px'
	});
	
	// Add Video Icons here
	var videoIcon = Titanium.UI.createView({
		backgroundImage: 'video.png',
		width: 50,
	   	height: 50,
	   	top: '800px',
	   	left: '600px'
	});
	videoIcon.addEventListener("click", function() {
		goToVideo('https://db.tt/7iWk90mv');
	});
	myView.add(videoIcon);
	
	
	//Add Text Icons here
	var textIcon1 = Titanium.UI.createView({
		backgroundImage: 'text.png',
		width: 50,
	   	height: 50,
	   	top: '700px',
	   	left: '400px'
	});
	textIcon1.addEventListener("click", function(){
		text1.animate(animationTextEnd);
		text1.text = "Giza";
		text1.top = '700px';
	   	text1.left = '400px';
		//text1.visible = "true";	
		text1.height = '100px';
	   	text1.width = '200px';
	   	text1.animate(animationTextStart);
	});
	myView.add(textIcon1);
	
	//end of text icons
	
	myView.add(text1);
	myView.add(audioIcon1);
	
	$.giza.add(myView);
	$.giza.addEventListener('pinch',function(){
		$.giza.close();
	});
	$.giza.open();
	//$.feed.init();
	
	//myView.animate(animation);
};