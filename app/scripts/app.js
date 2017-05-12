(function() {

	function config($locationProvider, $stateProvider) {
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
			.state('polodex', {
				url: '/polodex',
				controller: 'PoloCtrl as polo',
				templateUrl: '/templates/polodex.html'
			});
	}

	angular
		.module('terra', ['ui.router', 'ngMaterial'])
		.config(config);
})();
