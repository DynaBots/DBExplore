exports.init = function(article){
	switch(article){
		case 0:
			$.uw.init();
			break;
		case 1:
			$.giza.init();
			break;
		case 2:
			$.rock.init();
			break;
	}
};