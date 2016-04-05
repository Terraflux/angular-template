(function() {
	function HomeCtrl(){
		this.heroTitle = "Pure IT";
	}
	angular
		.module('fits')
		.controller('HomeCtrl', HomeCtrl);
})();