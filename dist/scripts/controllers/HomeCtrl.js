(function() {
	function HomeCtrl(){
		this.heroTitle = "Pure IT";

		this.showModal = false;

		this.toggleModal = function(){
			$rootScope.showModal = !$rootScope.showModal;
		};

	};

	angular
		.module('fits')
		.controller('HomeCtrl', HomeCtrl);
})();