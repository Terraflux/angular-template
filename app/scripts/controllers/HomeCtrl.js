(function() {
	function HomeCtrl($rootScope){
		this.heroTitle = "Pure IT";

		$rootScope.showModal = false;

		$rootScope.toggleModal = function(){
			$rootScope.showModal = !$rootScope.showModal;
		};

	};

	angular
		.module('fits')
		.controller('HomeCtrl', ['$rootScope',HomeCtrl]);
})();