Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	this.route('login', {path: "/"});
	this.route('signup', {path: "/signup"});
	this.route('dashboard', {path: "/dashboard"});
	this.route('profile', {path: "/profile"});
	this.route('locations', {path: "/locations"});
	this.route('map', {path: "/map"});
	this.route('transit_lines', {path: "/transit_lines"});
	this.route('lineDirection', {path: "/lineDirection"});
	this.route('stops', {path: "/stops"});
	this.route('boots', {path: "/boots"});
	this.route('edit_locations', {path: "/edit_locations"});


});