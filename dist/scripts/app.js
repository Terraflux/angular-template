(function() {

	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeCtrl as home',
				templateUrl: '/templates/home.html'
			})
			.state('profiles', {
				url: '/profiles',
				controller: 'ProfilesCtrl as profiles',
				templateUrl: 'templates/profiles.html'
			})
			.state('blog', {
				url: '/blog',
				controller: 'BlogCtrl as blog',
				templateUrl: '/templates/blog.html'
			})
			;
	}

	angular
		.module('wvum', ['ui.router', 'ngMaterial'])
		.config(config);
})();
