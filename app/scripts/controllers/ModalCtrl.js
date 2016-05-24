(function () {
	
	function ModalCtrl($mdDialog, $mdMedia, $http, $mdToast) {

		this.client = {
			name: '',
			email: '',
			message: ''
		};
		
		this.showContactPrompt = function($event) {

			$mdDialog.show({
				templateUrl: 'templates/contactModal.html',
				clickOutsideToClose: true,
				controller: 'ModalCtrl as modal',
				targetEvent: $event
			});
		}

		this.pushMessage = function(){

			var data = this.client;

			$http.post('/contact-form, data')
				.success(function(data, status, headers, config) {
					$mdToast.show(
						$mdToast.simple()
							.content('Thanks for your message' + data.name)
							.hideDelay(3000)
					);
					$mdDialog.hide();
				}).
				error(function(data, status, headers, config) {
					$mdToast.show(
						$mdToast.simple()
							.content('Thanks for your message!')
							.hideDelay(3000)
					);
					$mdDialog.hide();
				});
		};

	};

	angular
		.module('fits')
		.controller('ModalCtrl', ['$mdDialog', '$mdMedia', '$http', '$mdToast', ModalCtrl,]);
})();