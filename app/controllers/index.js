function doClick(e) {
    alert($.label.text);
}

$.index.open();

var myView = Titanium.UI.createView({
	backgroundColor: "blue"	
});

var myLabel = Titanium.UI.createLabel({
	text: "Hello, Label"
});

var transform = Ti.UI.create2DMatrix({
	rotate: 180
});

var animation = Ti.UI.createAnimation({
	duration: 1500,
	delay: 2000,
	transform: transform
});

$.index.add(myView);

myView.add(myLabel);
myView.animate(animation);
