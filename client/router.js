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
	this.route('transit-lines', {path: "/transit-lines"});
	this.route('line-direction', {path: "/line-direction"});
	this.route('stops', {path: "/stops"});
	this.route('boots', {path: "/boots"});

});