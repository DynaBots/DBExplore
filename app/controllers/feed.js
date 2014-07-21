exports.init = function(){
	
	var article = 0; //default article
	var numOfArticles = 3; //update number of article
	
	var feedView = Titanium.UI.createView({
		width: 1024,
	   	height: 768
	});
	
	var headingBack = Titanium.UI.createView({
		backgroundColor: 'rgba(255,255,255,0.8)',
		top: '200px',
	   	left: '50px',
		height: '1536px',
	   	width: '1948px',
	   	borderRadius: 3
	});
	
	var heading = Titanium.UI.createLabel({
	   	text: 'Ancient priests tomb painting discovered near Great Pyramid at Giza',
	   	top: '400px',
	   	left: '324px',
	   	height: '200px',
	   	width: '1400px'
	   	//visible: 'false'
	});
	
	heading.font = {
		fontSize: 24,
		fontFamily: 'Helvetica'
	};
	
	var text1Back = Titanium.UI.createView({
		width: 1024,
	   	height: 768
		/*
		backgroundColor: 'rgba(255,255,255,0.8)',
		top: '200px',
	   	left: '50px',
		height: '1436px',
	   	width: '1948px',
	   	borderRadius: 3
	   	*/
	});
	
	var text1 = Titanium.UI.createLabel({
	   	text: "A wall painting, dating back over 4,300 years, has been discovered in a tomb located just east of the Great Pyramid of Giza. The painting shows vivid scenes of life, including boats sailing south on the Nile River, a bird hunting trip in a marsh and a man named Perseneb who's shown with his wife and dog. While Giza is famous for its pyramids, the site also contains fields of tombs that sprawl to the east and west of the Great Pyramid.",
	   	top: '590px',
	   	left: '324px',
	   	height: '400px',
	   	width: '1400px'
	   	//visible: 'false'
	});
	
	/*
	var buttonFeed = Titanium.UI.createButton({
		title:'Open'
	});
	*/
	
	heading.addEventListener('click', function(){
		$.explore.init(article);
	});
	text1.addEventListener('click', function(){
		$.explore.init(article);
	});
	
	//ADD articles here and update numberOfArticles
	
	function updateArticle(){
		switch(article){
			case 0:
				heading.text = " ";
				text1.text = " ";
				//heading.text = "New record: University of Washington spun out 18 startups last year";
				//text1.text = "The school announced today that it helped launch 18 startups in fiscal 2013, breaking last year’s record of 17. A majority of the companies, which received support from the UW Center for Commercialization (C4C) and have signed patent-licensing agreements with the university, are health-care related with a few focused on software and robotics.";
				text1Back.backgroundImage = 'uw-blur-selected.jpg';
				break;
			case 1:
				heading.text = " ";
				text1.text = " ";
				//heading.text = 'Ancient priests tomb painting discovered near Great Pyramid at Giza';
				//text1.text = "A wall painting, dating back over 4,300 years, has been discovered in a tomb located just east of the Great Pyramid of Giza. The painting shows vivid scenes of life, including boats sailing south on the Nile River, a bird hunting trip in a marsh and a man named Perseneb who's shown with his wife and dog. While Giza is famous for its pyramids, the site also contains fields of tombs that sprawl to the east and west of the Great Pyramid.";
				text1Back.backgroundImage = 'london-selected.png';
				break;
			case 2:
				heading.text = " ";
				text1.text = " ";
				//heading.text = "Queen + Adam Lambert teach lesson in old school rock at Mohegan Sun Casino";
				//text1.text = "Queen + Adam Lambert: A Once in a Lifetime Experience brought the 2009 American Idol finalist and Queen guitarist Brian May and drummer Roger Taylor together before a sold-out crowd at the 10,000-seat Mohegan Sun Arena on Saturday night. (They return Friday for another performance). With fog, lasers, extended solos on top of extended solos, and, oh yeah, an impressive catalog of songs, it was – as Taylor aptly put it – a show with no dancers and real singers.";
				feedView.backgroundImage = 'rock-blur.jpg';
		}
	};
	
	updateArticle();
	
	//$.feed.add(feedView);
	$.feed.add(text1Back);
	//$.feed.add(headingBack);
	$.feed.add(text1);
	$.feed.add(heading);
	
	$.feed.addEventListener('swipe',function(e){
		if(e.direction == 'up'){
			article++;
			if(article == numOfArticles)
				article = 0;
		}
		else if(e.direction == 'down'){
			article--;
			if(article < 0)
				article = numOfArticles - 1;
		}
		updateArticle();
	});
	
	$.feed.addEventListener('pinch', function(e){
		$.feed.close();
	});
	
	$.feed.open();
};