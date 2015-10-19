/*
Template.mainlayout.helpers({
	currentweather: function(){
		var city = Session.get('city');
		Meteor.call('getWeather', city, function(err, results){
			console.log(results.content);
			Session.set('weather', JSON.parse(results.content).weather[0].description);
		});
	return (Session.get('weather') + ' in ' + city).toUpperCase();
	}
});

moment.js meteor package to insert date*/